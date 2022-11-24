import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'


const CategorieBreadScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CategorieBreadScreen</Text>
      <Button title="Go to Detail" onPress={()=> navigation.navigate("Details")}></Button>
    </View> 
  )
}

export default CategorieBreadScreen

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#FF359C",
        alignItems:"center",
        justifyContent:"center"
        
    },
    texto:{
        fontFamily:"latoBold"
    }
})