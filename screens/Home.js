import React,{useState} from 'react';
import { View, Text,FlatList,TouchableOpacity,Modal, StyleSheet, TouchableWithoutFeedback,Keyboard ,TouchableHighlight} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm';





export default function Home({navigation}) {
  const [modalOpen,setModalOpen]=useState(false)
 const [reviews,setReviews]=useState([
   {title:"Title 1", rating:1, body:"Body 1", key:'1'},
   {title:"Title 2", rating:2, body:"Body 2", key:'2'},
   {title:"Title 3", rating:3, body:"Body 3", key:'3'},
   {title:"Title 4", rating:4, body:"Body 4", key:'4'}
 ])

 const addReview=(review)=>{
   review.key=Math.random().toString()
   setReviews((prevReviews)=>{
     return [review,...prevReviews]
   })
   setModalOpen(false)
 }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24}
              onPress={()=>setModalOpen(false)}
              style={{...styles.modalToggle,...styles.modalClose}}  />
              <ReviewForm addReview={addReview} />
        </View>
        </TouchableWithoutFeedback>

      </Modal>

      <MaterialIcons 
          name='add'
          size={24}
          onPress={()=>setModalOpen(true)}
          style={styles.modalToggle} />

      <FlatList
        data={reviews}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate("ReviewDetail",{item})}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
          
        )}
        />
      

    </View>
  );
}

const styles=StyleSheet.create({
  modalToggle:{
    marginBottom:10,
    borderWidth:2,
    borderColor:"#eee",
    padding:10,
    borderRadius:10,
    alignSelf:"center"
  },
  modalClose:{
    marginTop:20,
    marginBottom:0
  },
  modalContent:{
    flex:1
  }
})