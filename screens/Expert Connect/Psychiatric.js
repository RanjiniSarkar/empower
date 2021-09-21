import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class Psychiatric extends React.Component{


   
    render(){
        return(
            <ScrollView>
           
       <View style={{flex:1}}>

       <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                  INDIAN ASSOCIATIONS OF PHYSIOTHERAPISTS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://indianpsychiatricsociety.org/ ")
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
            
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                LIST OF PSYCHIATRIC HOSPITALS IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/List_of_psychiatric_hospitals_in_India ")                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                NARAYANA HEALTH
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://www.narayanahealth.org/find-a-doctor/physiotherapists")
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                INDIAN PSYCHIATRISTS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://en.wikipedia.org/wiki/Category:Indian_psychiatrists              ")
              
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                BEST PSYCHIATRISTS IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.medifee.com/best-doctors/psychiatrist-in-india/              ")
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                NARYANA HEALTH
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.narayanahealth.org/find-a-doctor/psychiatrists              ")
            
                    
                    }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                MEDMONKS   
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://medmonks.com/blog/top-10-psychiatrists-in-india              ")
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                ASK APOLLO
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.askapollo.com/physical-appointment/psychiatrist            ")
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
              PRACTO
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.practo.com/psychiatrist-in-india/listing            ")
              
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
       </View>
   </ScrollView>
        )
}
}
const styles = StyleSheet.create({
  button:{
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:RFValue(350),
    marginTop:RFValue(3),
    backgroundColor:"#11c66c",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 6,
  }
})