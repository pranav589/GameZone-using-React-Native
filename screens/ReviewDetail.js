import React from "react";
import { Text, View, Image,StyleSheet } from "react-native";
import Card from "../shared/card";
import { globalStyles, images } from "../styles/global";

function ReviewDetail({route}) {
  const item=route.params.item
 
  
//  console.log(item)
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.reviewTitle}>{item.title}</Text> 
        <Text style={styles.reviewBody}>{item.body}</Text>
        <View style={styles.rating}>
        <Text>GameZone Ratings:</Text>
        <Image source={images.ratings[item.rating]} />
        </View>
        
      </Card>
    </View>
  );
}

export default ReviewDetail;

const styles=StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:"#eee"
  },
  reviewTitle:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:5
  },
  reviewBody:{
    fontSize:15,
    marginVertical:3
  }
})
