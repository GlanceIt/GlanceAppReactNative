'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    PixelRatio,
    View,
    Text,
    ListView
} from 'react-native';

import commonStyles from '../../styles/common';
import Detail from '../Detail';
import NavBarSpace from '../../components/NavBarSpace';
import GlanceTouchable from '../../components/GlanceTouchable';

import Constants from '../../constants';

const QUERY_TYPE = 'search';
const ENDPOINT = `${Constants.GLANCE_SERVICE_URL}/${QUERY_TYPE}`;

export default class Search extends Component {
    propTypes: {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
        //this._selectRow = this._selectRow.bind(this);
    }

    componentDidMount() {
        this._getData(`${Constants.GLANCE_SERVICE_URL}/${QUERY_TYPE}`);
    }

    _getData(url) {
        fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    weights: {
                        'coffee': 100
                    }
                })
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJSON.spots)
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    _onForward = () => {
        this.props.navigator.push({
            title: 'Detail',
            component: Detail,
            backButtonTitle: 'Back',
            rightButtonTitle: 'Review'
        });
    }

    _selectRow(row, pushNavBarTitle) {
        this.props.navigator.push({
            title: pushNavBarTitle,
            component: Detail,
            passProps: { spot: row },
            backButtonTitle: 'Back',
            rightButtonTitle: 'Review'
        });
    }

    _renderRow = (rowData) => {
        return (
            <GlanceTouchable style={styles.row} onPress={() => this._selectRow(rowData, rowData.name)}>
                <Text style={styles.buttonText}>{rowData.name}</Text>
            </GlanceTouchable>
        );
    }

    render() {
        return (
            <View style={commonStyles.container}>
                <NavBarSpace />
                <GlanceTouchable style={styles.row} onPress={this._onForward}>
                    <Text style={styles.buttonText}>Go to detail page</Text>
                </GlanceTouchable>
                <ListView
                    automaticallyAdjustContentInsets={false}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
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
