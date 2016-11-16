'use strict';

import React, { Component } from 'react';
import {
    TouchableHighlight
} from 'react-native';

import GlancePalette from '../../styles/colors';

export default class GlanceTouchable extends Component {
    render() {
        return (
            <TouchableHighlight
                accessibilityTraits="button"
                underlayColor={GlancePalette.secondary}
                {...this.props}
            />
        );
    }
}
