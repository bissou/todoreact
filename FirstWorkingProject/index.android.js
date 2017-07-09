/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Note from './android/app/Note';

export default class FirstWorkingProject extends Component {

    state = {
        noteArray :[{note:'test1',isfinish : false},{note:'test2',isfinish : true}],
        noteText : '',
    };

    toggleState = (val) => {
        //alert(val);
        val.isfinish = !val.isfinish;
        alert(val.isfinish);
        // this.stylNote   = this.props.val.isfinish ? styles.noteTextFinished : styles.noteText;
    };

    addNote() {
        alert(this.state.noteText);
       if(this.state.noteText)
       {
           this.state.noteArray.push( {note: this.state.noteText, isfinish: false });
           // this.setState( {noteArray:  this.state.noteArray});
           this.setState({noteText : ''});

       }
    }
    changeColorNote()
    {
 const textColor =this.state.Isfinish ? '#fff': 'red'




       // if ( this.state.Isfinish == false)
       // { this.state.Isfinish = true;}
    }


    render() {

        let notes = [];
        for(let i= 0; i < this.state.noteArray.length ; i++)
        {
            notes.push( <Note key={i}
                         val={this.state.noteArray[i]}
                         toggleState={()=> {
                             this.state.noteArray[i].isfinish = true;
                             this.setState({noteArray: this.state.noteArray}) }} />);

        }
       /* let notes = this.state.noteArray.map((val,key)=> {

            return <Note key={key}
                         keyval={key}
                         val={val}
                         toggleState={ ()=>this.toggleState(val)} />
        });*/


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> TO DO </Text>

                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>

                    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>

                    <TextInput style={styles.textInput}
                               onChangeText={(noteText) => this.setState({noteText})}
                               value={this.state.noteText}
                               placeholder='> note' placeholderTextColor='white' underlineColorAndroid='transparent' >
                    </TextInput>
                </View>
            </View>


        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header:{
        backgroundColor: '#C91832',
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth :10,
        borderBottomColor: '#eee',

    },
    headerText:{
        color : 'white',
        fontSize : 18,
        padding : 26,

    },
    scrollContainer :{
        flex :1,
        marginBottom:100,
    },

    footer:{
        position:'absolute',
        alignItems: 'center',
        bottom :0,
        left:0,
        right:0,

    },

    addButton :{
        backgroundColor:'#E91E63',
        width:90,
        height: 90,
        borderRadius:50,
        borderColor:'#ccc',
        alignItems:'center',
        justifyContent:'center',
        elevation : 8,
        marginBottom:-45,
        zIndex :10,
    },
    addButtonText:{
        color: '#fff',
        fontSize :24,
    },
    textInput:{

        alignSelf : 'stretch',
        color:'#fff',
        padding:20,
        paddingTop:46,
        backgroundColor:'#252580',
        borderTopWidth:2,
        borderTopColor:'#ede55d',
    },
});


AppRegistry.registerComponent('FirstWorkingProject', () => FirstWorkingProject);
