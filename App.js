import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {useState,useEffect} from'react'
import { NativeRouter, Route,useNavigate ,Routes} from "react-router-native";

import { BackHandler } from 'react-native';

import Home from'./Home'
import NoteView from'./View'
import Create from'./Create'
import Edit from'./Edit'
export default function App() {

  return (
    <NativeRouter>
    <View style={styles.container}>
   <StatusBar style="auto" 
   backgroundColor="#a0ecff" />




<Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/view' element={<NoteView/>}/>
   <Route path='/Create' element={<Create/>}/>
   <Route path='/edit' element={<Edit/>}/>
   </Routes>
    </View>
    
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#f6e5fc'
  },
});
