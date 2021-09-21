import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem,Header,Icon} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {List} from "react-native-paper"
import {RFValue} from 'react-native-responsive-fontsize'
export default class PhysioConnect extends React.Component{


   
    render(){
        return(
            <ScrollView>
         
       <View style={{flex:1}}>
     
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                  INDIAN ASSOCIATIONS OF PHYSIOTHERAPISTS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("http://www.physiotherapyindia.org/ ")
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
            
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                PHYSIOTHERAPY - DOCTOR DIRECTORY
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://www.indmedica.com/directory.php?directory=doctor&catid=23")
                }}>
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
                BEST PHYSIOTHERAPISTS IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://www.medifee.com/best-doctors/physiotherapist-in-india/                    ")
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
                    Linking.openURL("https://www.practo.com/physiotherapist-in-india/listing                    ")
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                PHYSIOTHERAPY / PHYSIOTHERAPIST IN INDIA  
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://www.medindia.net/patients/doctor_search/physiotherapy-doctors.html                    ")
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
                    Linking.openURL("https://www.askapollo.com/physical-appointment/physiotherapist                    ")
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                TOP 10 PHYSIOTHERAPY CLININCS AND HOSPITALS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                    Linking.openURL("https://gcr.org/top/physiotherapy/in?page=1&per_page=16&sort=score&order=desc                    ")
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