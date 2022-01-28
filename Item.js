import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import AsyncStorage from'@react-native-async-storage/async-storage'
import {useState,useEffect} from'react'
import { useNavigate} from "react-router-native";
let ItemView=(props)=>{
  let history = useNavigate(); 
  let change=async()=>{
let setId=await AsyncStorage.setItem('id',
props.id)
    history('/view')
  }
  return(
    <TouchableOpacity onPress={change} 
    key={props.id} style={{
      flex:1,
    alignItems:'center',
    }}>
    <View style={styles.main} >
     <Text numberOfLines={1}>{props.title}</Text>
     <View style={styles.hori}></View>
     <Text numberOfLines={6}>{props.note}</Text>
    </View>
  </TouchableOpacity>
    )
}
export default ItemView;
const styles = StyleSheet.create({
  main:{
  borderWidth:1,
  borderColor:'gray',
  width:330,
  height:160,
  borderTopLeftRadius:50,
  borderTopRightRadius:50,
  borderBottomLeftRadius:50,
  borderBottomRightRadius:50,
  padding:20,
  textAlign:'center',
  marginTop:5,
  
  },hori:{
    width:300,
    borderWidth:1,
    borderColor:'gray'
  }
});
