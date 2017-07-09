import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class FirstWorkingProject extends Component {
    render() {
       const stylNote = this.props.val.isfinish ? styles.noteTextFinished : styles.noteText;
        return (
            <View key={this.props.keyval}style={styles.note}>
                <Text style={stylNote}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.toggleState} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}> - </Text>
                </TouchableOpacity>
            </View>


        );
    }
}

const styles = StyleSheet.create({

    note :
        {
            position : 'relative',
            padding: 20,
            paddingRight :100,
            borderBottomWidth :2,
            borderBottomColor: '#ededed',

        },

    noteText :{
        color: 'black',
        paddingLeft : 20,
        borderLeftColor : '#E91E63',
    },
    noteTextFinished :{
        paddingLeft : 20,
        color : '#E91E63',
        borderLeftColor : '#E91E63',
    },
    noteDelete : {
        position : 'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#252580',
        padding : 10,
        top : 10,
        bottom : 10,
        right : 10,
    },

    noteDeleteText :
        {
color : 'white',

        },

});



