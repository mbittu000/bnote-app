import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import {useState,useEffect} from'react'

let Head=()=>{
  
  
  
  return(
    <View style={styles.head}>
    <View style={{flex:1,
      marginLeft:20,
      marginTop:60
    }}>
    <Text style={styles.logo}>BNote</Text>
    <Text style={{fontSize:10,
    color:'steelblue'}}>This is Business Note App</Text>
    </View>
<View>

<Image style={styles.edit}
  source={require('./img/draw.png')}
      />

</View>
    </View>
    )
}
export default Head;
const styles = StyleSheet.create({
  head:{
    backgroundColor:'#a0ecff',
    marginTop:30,
    height:200,
  },logo:{
    fontSize:30,
    color:"skyblue",
    marginLeft:13
  },edit:{
    width:30,
    height:30,
    marginTop:-132,
    marginLeft:120
  }
});
