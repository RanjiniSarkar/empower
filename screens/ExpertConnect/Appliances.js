import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class Appliances extends React.Component{


   
    render(){
        return(
            <ScrollView>
          
       <View style={{flex:1}}>
            <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                RASHTRIYA VAYOSHRI YOJANA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.india.gov.in/spotlight/rashtriya-vayoshri-yojana              ")}}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                ARTIFICIAL LIMBS MANUFACTURING CORPORATION OF INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.alimco.in/              ") }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
            
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                ARMED FORCES MEDICAL COLLEGE
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                  Linking.openURL("https://www.afmc.nic.in/Departments/Hospitals/alc.html              ")}}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>


              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                WHATCLINIC
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.whatclinic.com/organ-transplants/india/hand-transplant              ")
                  
                  }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                OTTOBOCK
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                           Linking.openURL("https://www.ottobock.in/prosthetics/lower-limb/solution-overview/S              ")
                     }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                WORLD HEALTH ORGANIZATION 
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://apps.who.int/iris/bitstream/handle/10665/44407/9789241564045_eng.pdf?sequence=1              ")
                    
                     }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                AIIMS 
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.aiims.edu/aiims/hosp-serv/hosp-rates/revised-rate-list.htm            ")
                           
                     }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                FORERUNNERS HEALTHCARE
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://www.forerunnershealthcare.com/artificial-limb-prosthesis-surgery-india-low-cost-benefits.html            ")
              
                           
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