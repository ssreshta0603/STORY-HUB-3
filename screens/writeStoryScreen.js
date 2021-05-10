import * as React from "react";
import { Header } from "react-native-elements";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from 'firebase'
import db from "../config"
export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title: '',
      author: '',
      story: ''
    }
  }
  submitStory = async() =>{
     await db.collection("stories").add({
      'title': this.state.title,
      'author': this.state.author,
      'story': this.state.story
    })
     ToastAndroid.show("Your story is saved in Database", ToastAndroid.SHORT);


  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#white",
        }}
      >
        
      <KeyboardAvoidingView style={styles.container} behavior= "padding" enabled/>
        <Header
          backgroundColor={"#f38181"}
          centerComponent={{
            text: "Story Hub",
            style: { fontSize: 28, color: "white" },
          }}
        />
        <TextInput style={styles.inputBox} placeholder="Story Title" />
        <TextInput style={styles.inputBox} placeholder="Author" />
        <TextInput
          style={styles.inputBoxMultiline}
          placeholder="Write your Story"
          multiline={true}

        />

        <TouchableOpacity style={styles.button}
        
        onPress={async()=>{
          this.submitStory();
          this.setState({
            title: '',
            author: '',
            story: ''})
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    margin: 20,
    padding: 5,
    borderRadius : 50
  },
  inputBoxMultiline: {
    width: "90%",
    height: "35%",
    borderWidth: 2,
    margin: 20,
    padding: 5,
  },
  button: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95e1d3",
    width: 200,
    height: 50,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
});