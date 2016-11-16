'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    View,
    ScrollView,
    Text
} from 'react-native';

import commonStyles from '../../styles/common';
import Search from '../Search';
import NavBarSpace from '../../components/NavBarSpace';
import GlanceTouchable from '../../components/GlanceTouchable';

export default class Home extends Component {
    // propTypes: {
    //     title: PropTypes.string.isRequired,
    //     navigator: PropTypes.object.isRequired,
    // }

    _onForward = () => {
        this.props.navigator.push({
            title: 'Search',
            component: Search,
            backButtonTitle: 'Back',
            rightButtonTitle: 'Share'
        });
    }

    render() {
        return (
            <View automaticallyAdjustContentInsets={false} style={commonStyles.container}>
                <NavBarSpace />
                <ScrollView automaticallyAdjustContentInsets={false}>
                    <GlanceTouchable style={styles.row} onPress={this._onForward}>
                        <Text style={styles.buttonText}>
                            Go to search page
                        </Text>
                    </GlanceTouchable>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#cdcdcd'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: '500'
    }
});
