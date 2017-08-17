/**
 * created by hushicai on 2017/8/15
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import PullToRefreshLayout from '../components/PullToRefreshLayout';

export default class Refreshable extends Component {
    static navigationOptions = {
        title: 'Refreshable'
    };

    _layoutRef = null;

    _onRefresh() {
        console.log('refreshing...');

        setTimeout(() => {
            console.log('refresh complete');

            this._layoutRef.stopRefresh();
        }, 5000);
    }

    render() {
        return (
            <View>
                <PullToRefreshLayout
                    ref={(ref) => {this._layoutRef = ref}}
                    onRefresh={() => this._onRefresh()}
                    style={styles.container}>
                    <ScrollView>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                        <Text>Refreshable</Text>
                    </ScrollView>
                </PullToRefreshLayout>
            </View>
        );
    }
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
