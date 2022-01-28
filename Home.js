import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
import {useState,useEffect} from'react'
import { useNavigate} from "react-router-native";
import Head from'./Head'
import Note from'./Note'
let Home=()=>{
  let history=useNavigate()
  function goapp(){
    history('/create')
   // alert('workin')
  }
  return(
 <View>
 
   <Head/>
   <Note/>
      <TouchableOpacity onPress={goapp} 
   style={styles.btn}>
   <Image style={styles.btnImg}
  source={require('./img/write.png')}
      />
  </TouchableOpacity>
 </View>
    )
}
export default Home;
const styles = StyleSheet.create({
  edit:{
    width:20,
    height:20,
    marginLeft:200,
    marginTop:2,
    borderWidth:2,
    backgroundColor:'red'
  },btn:{
    width:65,
    height:65,
    marginTop:-390,
    marginLeft:280,

  },btnImg:{
    width:65,
    height:65,
    
  }
});
