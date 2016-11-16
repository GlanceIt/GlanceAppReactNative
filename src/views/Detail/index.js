'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    View,
    Text
} from 'react-native';

import commonStyles from '../../styles/common';
import NavBarSpace from '../../components/NavBarSpace';

import Constants from '../../constants';

const QUERY_TYPE = 'spots';

export default class Detail extends Component {
    propTypes: {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
        //spot: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            spot: null
        };
    }

    componentDidMount() {
        var spotName = 'Peets-Irvine-1';
        if (this.props.spot) {
            // No need to fetch, we can remove this state here since we already have the data
            this.setState({
                spot: this.props.spot
            });
        } else {
            this._getData(`${Constants.GLANCE_SERVICE_URL}/${QUERY_TYPE}/${spotName}`);
        }
    }

    _getData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('Resonse: ', responseJSON);
                this.setState({
                    spot: responseJSON.result
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        var content = null;
        if (this.state.spot !== null) {
            content = (
                <View style={styles.row}>
                    <Text style={styles.buttonText}>{this.state.spot.name}</Text>
                </View>
            );
        }
        return (
            <View style={commonStyles.container}>
                <NavBarSpace />
                {content}
                <View style={styles.row}>
                    <Text style={styles.buttonText}>
                        {this.props.spot.name}
                    </Text>
                </View>
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
