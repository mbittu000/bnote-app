import { StyleSheet, Text, View,ScrollView,BackHandler,TouchableOpacity } from 'react-native';
import AsyncStorage from'@react-native-async-storage/async-storage'
import {useState,useEffect} from'react'
import { NativeRouter, Route,useNavigate } from "react-router-native";
let NoteView=(props)=>{
  
 
 //fetch
 let [data,setData]=useState([])
useEffect(()=>{
  async function call(){
  let getId=await AsyncStorage.getItem('id')
    if (getId) {
     let uri=`https://business-note.herokuapp.com/find/note/${getId}`
    let fc=await fetch(uri)
    let fet=await fc.json()
    setData(fet) 
    }
  }
  setTimeout(function() {
    call()
  }, 1000);
  
},[])
  
  
  //back key
  
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
  //delete 
  let del=async()=>{
    let getId=await AsyncStorage.getItem('id')
    let uri=`https://business-note.herokuapp.com/rm/note/${getId}`
  fetch(uri, {
  method: 'DELETE',
})
.then(res => res.json()) 
.then(res => console.log(res))
//  console.log(fo)
history('/')

  }

  return(
    <View>
    <ScrollView>
    <View style={styles.main}>
    <View style={styles.body}>
<Text style={styles.title}>{data.title}</Text>
<View style={{borderWidth:1,width:370,
  borderColor:'gray'
}}></View>
<Text style={styles.note}>{data.note}</Text>
</View>
</View>
<View style={{
alignItems:'center'
}}>
<TouchableOpacity style={styles.del}
onPress={del}>
<Text>delete</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.edit}
onPress={()=>{
  history('/edit')
}}>
<Text>Edit</Text>
</TouchableOpacity>
</View>
<View style={{height:30}}>
</View>
</ScrollView>

</View>
    )
}
export default NoteView;
const styles = StyleSheet.create({
  main:{
    marginTop:40,
    padding:10
  },body:{
    textAlign:'center'
  },title:{
    marginBottom:10,
    fontSize:20,
    color:'#7f9bb0',
    textAlign:'center'
  },note:{
    fontSize:20
  },del:{
  width:65,
  height:35,
  borderWidth:2,
  alignItems:'center',
  justifyContent:'center',
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
  borderBottomRightRadius:10,
  borderBottomLeftRadius:10,
  borderColor:'red',
  backgroundColor:'red',
  marginBottom:5
  },
  edit:{
  width:65,
  height:35,
  borderWidth:2,
  alignItems:'center',
  justifyContent:'center',
  borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderColor:'#41ffa0',
  backgroundColor:'#41ffa0'
  }
});
