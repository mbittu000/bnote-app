import { StyleSheet, Text, View,ScrollView,BackHandler,TouchableOpacity,ActivityIndicator,Modal,Image } from 'react-native';
import AsyncStorage from'@react-native-async-storage/async-storage'
import {useState,useEffect} from'react'
import { NativeRouter, Route,useNavigate } from "react-router-native";
let NoteView=(props)=>{
  
 
 //fetch
 let [data,setData]=useState([])
 let [dataChake,setDataChake]=useState(true)
 let [modalChake,setmodalChake]=useState(false)
useEffect(()=>{
  async function call(){
  let getId=await AsyncStorage.getItem('id')
    if (getId) {
     let uri=`https://business-note.herokuapp.com/find/note/${getId}`
    let fc=await fetch(uri)
    let fet=await fc.json()
    setData(fet) 
    setDataChake(false)
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
<View style={styles.hed}>
<TouchableOpacity style={{
  marginTop:25,
  height:25,
  width:35,
  marginLeft:10
}} 
onPress={()=>{
  history(-1)
}}>
<Image
        style={styles.backImg}
        source={require('./img/left.png')}
      />
</TouchableOpacity>

<TouchableOpacity style={{
  marginTop:-25,
  marginLeft:320,
  height:25,
  width:35
}}
onPress={()=>{setmodalChake(true)}}>
  <Image
        style={styles.menuImg}
   source={require('./img/align-left.png')}
      />
</TouchableOpacity>

  <Modal
        animationType="fade"
        transparent={true}
        visible={modalChake}
onRequestClose={()=>
{setmodalChake(false)}}
      ><View style={styles.modal}>
     <TouchableOpacity style={styles.tedit}>
<Text style={{alignItems:'center'}}
onPress={()=>{
  history('/edit')
}}>
Edit</Text>
     </TouchableOpacity>
     
 <TouchableOpacity style={styles.tdelete}
 onPress={del}>
<Text style={{alignItems:'center'}}>
Delete</Text>
     </TouchableOpacity>
     
 <TouchableOpacity style={styles.tclose}
 onPress={()=>{setmodalChake(false)}}>
<Text style={{alignItems:'center'}}>
Close</Text>
     </TouchableOpacity>
      </View>
      </Modal>
   </View>
   
   
   
{
dataChake?<ActivityIndicator size={50} color="#ff47d9" style={styles.lod}/>:
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



</View>
<View style={{height:500}}>
</View>
</ScrollView>
}

</View>
    )
}
export default NoteView;
const styles = StyleSheet.create({
  main:{
    marginTop:5,
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
  },lod:{
    marginTop:400
  },hed:{
    marginTop:20,
    backgroundColor:'#b4f0ff',
    height:60
  },backImg:{
    width:35,
    height:15,
    flex:1,
    alignItems:'center'
  },menuImg:{
    width:35,
    height:15,
    flex:1,
    alignItems:'center'
  },modal:{
    height:150,
    width:160,
    marginLeft:200,
    marginTop:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderColor:'#41ffa0',
    backgroundColor:'#41ffa0',
    alignItems:'center'
  },tedit:{
    marginTop:15,
    width:50,
    alignItems:'center',
    fontWeight: "bold"
  },tdelete:{
    marginTop:30,
    width:50,
    alignItems:'center',
    fontWeight: "bold"
  },tclose:{
    marginTop:30,
    width:50,
    alignItems:'center',
    fontWeight: "bold"
  }
});
