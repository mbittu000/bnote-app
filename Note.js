import { StyleSheet, Text, View , ScrollView,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import {useState,useEffect} from'react'
import Item from'./Item'

let NoteBody=()=>{
  let [data,setData]=useState([])
  let [dataChake,setDataChake]=useState(true)

let uri=`https://business-note.herokuapp.com/get/note`
useEffect(()=>{
  async function call(){
    let work=true
    let fc=await fetch(uri)
    let fet=await fc.json()
    if (work) {
   setData(fet)
   setDataChake(false)
    }
   let re=()=>{ work=false}
   re()
  }
  call()
},[])

//<ActivityIndicator size="large" color="#00ff00" />
//console.log(data)
  return(
    
    <View style={styles.main}>
       <ScrollView>
    <View style={styles.singel}>
    <View style={styles.flot}>
{dataChake?
<ActivityIndicator size={50} color="#ff47d9" style={styles.lod}/>:
          data.map((e,i)=>{
    return(<Item key={e._id} id={e._id} title={e.title} note={e.note}/>)
  })
}

     <View style={styles.futter}>
     
     </View>
     </View>
     </View>
       </ScrollView>
     
     
     
    </View>
     
    )
}
export default NoteBody;
const styles = StyleSheet.create({
  main:{
    backgroundColor:'#f6e5fc',
    marginTop:-30,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    height:900,
    padding:14
  },singel:{
    marginTop:70
  },flot:{
    textAlign: 'right'
  },futter:{
    height:500
  },lod:{
    marginTop:200
  }
});
/*
{
  data.map((e,i)=>{
    return(<Item key={e._id} id={e._id} title={e.title} note={e.note}/>)
  })
}*/