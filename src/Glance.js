'use strict';

import React, { Component } from 'react';
import {
    View,
    StatusBar,
    NavigatorIOS
} from 'react-native';

import commonStyles from './styles/common';
import GlancePalette from './styles/colors';
import Home from './views/Home';

export default class GlanceApp extends Component {
    render() {
        return (
            <View style={commonStyles.container}>
                <StatusBar
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0.2)"
                />
                <NavigatorIOS
                    style={commonStyles.container}
                    barTintColor={GlancePalette.primary}
                    initialRoute={{
                        title: 'Glance',
                        component: Home
                    }}
                />
            </View>
        );
    }
}
