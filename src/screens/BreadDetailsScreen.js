import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'


const BreadDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CategoriesScreen</Text>
      <Button title="Go to Home " onPress={()=> navigation.navigate("Categories")}></Button>
    </View> 
  )
}

export default BreadDetailScreen

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#FFCC4C",
        alignItems:"center",
        justifyContent:"center"
        
    },
    texto:{
        fontFamily:"latoBold"
    }
})