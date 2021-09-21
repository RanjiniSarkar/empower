import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem,Header,Icon} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class Special extends React.Component{


   
    render(){
        return(
            <ScrollView>
         
         <Header
          leftComponent={<Icon name='arrow-back' type='MaterialIcons' color='white'  onPress={() => this.props.navigation.navigate("List")}/>}
          centerComponent={{ text: "SPECIAL EDUCATION", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
         
          backgroundColor = "#32867d"
        />
       <View style={{flex:1}}>
       <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                EDUACTION OF CHILDREN WITH DISABILITIES IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://unesdoc.unesco.org/ark:/48223/pf0000186611              ")
                         
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>
              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                ALI YAVAR JUNG NATIONAL INSTITUE OF SPEECH AND HEARING
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                          Linking.openURL("http://ayjnihh.nic.in/       ")
      
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                EDUACTION OF CHILDREN WITH SPECIAL NEEDS
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                                        Linking.openURL("https://vikaspedia.in/education/parents-corner/guidelines-for-parents-of-children-with-disabilities/education-for-children-with-special-needs ")

                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                INCLUSIVE EDUACTION IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/13135/files/2012/12/INTL-UG-Thesis-Kohama.pdf         ")
                  
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                DISABILITY INFORMATION RESOURCES
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
                            Linking.openURL("https://www.dinf.ne.jp/doc/english/asia/resource/apdrj/z13jo0300/z13jo0304.html         ")
  
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                THE ESSENTIAL GUIDE TO SPECIAL NEEDS EDUACTION IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://blog.firstcrayon.com/the-essential-guide-to-special-needs-education-in-india-47769fc4d234          ")
                    
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                EDUCATION OF DISABLED CHILDREN IN INDIA
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("https://targetstudy.com/articles/education-of-disabled-children-in-india.html           ")
                   
                    
                }}>
                   <Text style={{fontSize:"25px",color:"#ffff",}}>
                    VIEW
                </Text>
                </TouchableOpacity>
              </Card>

              <Card>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize:"25px"}}>
                THE CHILDREN WITH SPECIFIC LEARNING DISABILITIES - IDENTIFICATION  And SUPPORT IN EDUCATION - BILL-2016
                  </Text> 
                <TouchableOpacity style={styles.button} onPress = {()=>{
              Linking.openURL("http://127.0.0.1:8887/educationConnect//THE%20CHILDREN%20WITH%20SPECIFIC%20LEARNING%20DISABILITIES%20-%20IDENTIFICATION%20&%20SUPPORT%20IN%20EDUCATION%20-%20BILL-2016.pdf           ")
                  
                    
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