/**
 * created by hushicai on 2017/8/12
 */

import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';
import RefreshControl from './components/RefreshControl/ptr';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
    }
    _onRefresh() {
        this.setState({
            refreshing: true
        });

        console.log('refreshing...');

        setTimeout(() => {
            console.log('timeout');
            this.setState({
                refreshing: false
            });
        }, 1000);
    }
    render() {
        return (<ScrollView refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
            />
        }>
            <View style={styles.content}>
                <Text>下拉有惊喜</Text>
            </View>
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'yellow'
    }
});

export default Root;
