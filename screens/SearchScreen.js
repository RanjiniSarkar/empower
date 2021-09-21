
import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from "../config";
import MyHeader from '../components/MyHeader';
import{RFValue} from 'react-native-responsive-fontsize'

export default class SearchScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      feedbackList: [ ]
    }
  this.requestRef= null
  }

  getFeedbackList =()=>{
    this.requestRef = db.collection("feedbacks")
    .onSnapshot((snapshot)=>{
      var feedbackList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        feedbackList : feedbackList
      });
    })
  }

   componentDidMount(){
   this.getFeedbackList()
  }

  componentWillUnmount(){
    this.requestRef();
  }
  

  keyExtractor = (item,index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem 
        key={i}
        title={item.name}
        subtitle={item.feedback}
        titleStyle={{ color: 'black', fontWeight: 'bold', fontSize:"20px"}}
        
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        <MyHeader title="Search Screen" navigation ={this.props.navigation}/>
        <View style={{flex:1}}>
          {
            this.state.feedbackList.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Feedbacks</Text>
              </View>
            )
            :(
              <FlatList
              style={{}}
              data={this.state.feedbackList}
              keyExtractor={(item, index) => item.key}
              renderItem={(this.renderItem)}
            />
            )
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: RFValue(20),
    justifyContent:'center',
    alignItems:'center'
  },

  
})