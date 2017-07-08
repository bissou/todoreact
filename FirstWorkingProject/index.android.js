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
        noteArray :[],
        noteText : '',

    }
    addNote() {
   alert(this.state.noteText);
   if(this.state.noteText)
   {
       var  c = this.state.noteText.value.toString();
       var d = new Date();
       this.state.noteArray.push( {'date' : d.getFullYear()+ "-" + (d.getMonth() +1 ) + "-" + (d.getDate()) + "\n" + 'note': c });
       this.setState( {noteArray:  this.state.noteArray});
       this.setState({noteText : ''});

   }


    }
    deleteNote()
    {
  this.state.noteArray.splice(key,1);
  this.setState({noteArray: this.state.noteArray});

    }


    render() {

        let notes = this.state.noteArray.map((val,key)=> {

            return <Note key={key} keyval={key} val={val} deleteMethode={ ()=>this.deleteNote(key)} />
        });


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
