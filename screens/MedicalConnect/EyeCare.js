import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class EyeCare extends React.Component{


   
    render(){
        return(
            <ScrollView>
            <MyHeader title='EYE CARE' navigation={this.props.navigation}/>


       <View style={{flex:1}}>
       <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                TOI RANKED OPTHALMOLOGY
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                            Linking.openURL("https://timesofindia.indiatimes.com/health-survey/lifestyle/opthalmology              ")
                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                MEDLIFE RANKED OPTHALMOLOGY 
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.medlife.com/blog/10-best-eye-hospitals-donation-procedure-india/              ")

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                "BEL INDIA RANKED OPTHALMOLOGY    
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://bel-india.com/best-eye-care-hospitals-in-india/              ")
              

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                INDIA TV NEWS RANKED OPTHALMOLOGY
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.indiatvnews.com/news/india/top-10-eye-care-hospitals-in-india-32456.html              ")
              

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                CENTRE FOR SIGHT RANKED OPTHALMOLOGY  
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL(" https://www.centreforsight.net/eye-hospitals-in-india              ")
              
              

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                ESSENCZ RANKED OPTHALMOLOGY  
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              
              Linking.openURL("https://essencz.com/hospitals/eye-hospitals/top-10-best-eye-care-hospitals-in-india/              ")
              

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                VAIDAM RANKED OPTHALMOLOGY  
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              
              Linking.openURL("https://www.vaidam.com/best-eye-hospitals-in-india              ")
              

                          }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                EYE Q INDIA RANKED OPTHALMOLOGY
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              
              Linking.openURL("https://www.eyeqindia.com/              ")
              

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