'use strict';

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View
} from 'react-native';

export default class NavBarSpace extends Component {
    render() {
        return (
            <View style={styles.navBarSpace} />
        );
    }
}

const styles = StyleSheet.create({
    navBarSpace: {
        height: (Platform.OS !== 'android') ? 64 : 0,
    }
});
