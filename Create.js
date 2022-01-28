import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,
  TextInput,TouchableOpacity
} from 'react-native';
import {useState,useEffect} from'react'
import {useNavigate} from "react-router-native";

import { BackHandler } from 'react-native';

import AsyncStorage from'@react-native-async-storage/async-storage'

export default function App() {
  let history = useNavigate(); 
  function handleBackButtonClick() {
    history(-1)
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  //code start
  let [title,setTitle]=useState('')
  let [note,setNote]=useState('')
  let [data,setData]=useState('')
  
  
  let uri=`https://business-note.herokuapp.com/set/note`
 //let history = useNavigate(); 
  let sendData=async()=>{
 //alert('working')
fetch(uri,{
    method: "POST",
  headers: {'Content-Type':'application/json'},
    body:JSON.stringify({"title":title,
      "note":note
    })
})
.then(function(res){ return res.json(); })
.then(async function(data){
  let setDot=await AsyncStorage.setItem('id',data._id)
  //console.error(setDot)
})


history('/view')

  }
  
  return (
<View style={styles.main}>
<ScrollView>
<TextInput
        style={styles.title}
        onChangeText={setTitle}
        value={title}
        placeholder='Title....'
      />
      <TextInput
        style={styles.note}
        onChangeText={setNote}
        value={note}
        multiline={true}
        placeholder='ote....'
      />
  <View style={{alignItems:'center'}}>
<TouchableOpacity style={styles.btn}
onPress={sendData}>
<Text>Submit{data._id}</Text>
</TouchableOpacity>
</View>
<View style={{
  height:50
}}>

</View>
</ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  main:{
    marginTop:45,
    flex:1,
    alignItems:'center'
    },title:{
    borderWidth:2,
    width:360,
    height:40,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:10
  },note:{
    borderWidth:2,
    width:360,
    height:740,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:10,
    textAlignVertical: 'top'
  },btn:{
    borderWidth:2,
    borderColor:'skyblue',
    alignItems:'center',
    width:150,
    height:36,
    justifyContent:'center',
    marginTop:5,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10
  }
});
