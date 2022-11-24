import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'


const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CategoriesScreen</Text>
      <Button title="Go to Bread" onPress={()=> navigation.navigate("Bread")}></Button>
    </View> 
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#FF724C",
        alignItems:"center",
        justifyContent:"center"
        
    },
    texto:{
        fontFamily:"latoBold"
    }
})