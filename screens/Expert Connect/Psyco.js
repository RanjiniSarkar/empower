import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class Psycologist extends React.Component{


   
    render(){
        return(
            <ScrollView>
          

       <View style={{flex:1}}>
       <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                INDIAN PSYCOLOGISTS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.indiaeducation.net/careercenter/humanities/psychology/top-7-psychologists-in-india.html              ")
                          
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                MEDIFEE
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.medifee.com/best-doctors/psychologist-in-india/              ")
                 
                          
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                INDIAN ASSOCIATION OF CLINICAL PSYCOLOGISTS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("http://iacp.in/   ") }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
        
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                HOMEGROWN
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://homegrown.co.in/article/802971/a-crowdsourced-list-of-non-judgemental-mental-health-professionals-in-india              ")
              
              }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
          
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                MENTAL HEALTH EXPERTS 
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://nowandme.com/resources/experts              ")
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
              Linking.openURL("https://www.askapollo.com/physical-appointment/psychologist              ")
              
              }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                MANASTHA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.manastha.com/              ")
              
              
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