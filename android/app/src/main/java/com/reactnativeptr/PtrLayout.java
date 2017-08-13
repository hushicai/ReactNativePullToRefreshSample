package com.reactnativeptr;

import android.view.LayoutInflater;
import android.view.View;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import javax.annotation.Nullable;

import in.srain.cube.views.ptr.PtrDefaultHandler;
import in.srain.cube.views.ptr.PtrFrameLayout;

/**
 * Created by hushicai on 2017/8/12.
 */

public class PtrLayout extends ViewGroupManager<PtrReactNativeFrameLayout> {
    private static final int REFRESH_COMPLETE = 0;

    protected static final String REACT_CLASS = "PtrLayout";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected PtrReactNativeFrameLayout createViewInstance(ThemedReactContext reactContext) {
        return new PtrReactNativeFrameLayout(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of("refreshComplete", REFRESH_COMPLETE);
    }

    @Override
    public void receiveCommand(PtrReactNativeFrameLayout root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case REFRESH_COMPLETE:
                root.refreshComplete();
                break;
            default:
                break;
        }
    }

    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final PtrReactNativeFrameLayout view) {
        view.setPtrHandler(
                new PtrDefaultHandler() {
                    @Override
                    public void onRefreshBegin(PtrFrameLayout frame) {
                        reactContext.getNativeModule(UIManagerModule.class)
                                .getEventDispatcher()
                                .dispatchEvent(new PtrRefreshEvent(view.getId()));
                    }
                }
        );
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put("ptrRefresh", MapBuilder.of("registrationName", "onPtrRefresh"))
                .build();
    }

    @Override
    public void addView(PtrReactNativeFrameLayout parent, View child, int index) {
        super.addView(parent, child, 1);
        parent.updateLayout();
    }

    @ReactProp(name = "refreshing")
    public void setRefreshing(PtrReactNativeFrameLayout view, boolean refreshing) {
        if (refreshing == false) {
            view.refreshComplete();
        }
    }
}
