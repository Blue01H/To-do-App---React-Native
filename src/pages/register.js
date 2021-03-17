import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class RegisterScreen extends React.Component {
 
    state = {
      username: '',
      password: ''
    }
  
  register() {
    const user = this.state.username;
    const password = this.state.password;

    const jsonRegister = {
      username: user,
      password: password
    } 

    fetch('http://localhost:3000/user', {
      method: "POST",
      body: JSON.stringify(jsonRegister),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.text())
      .catch(error => console.log(`Server Error${error}`))
      .then(token => console.log(token))
    
  }

  render(){
    return (
      <View style={styles.container}>
       
        <Text style={styles.logo}>F-Reminder</Text>
      
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="#fff"
            onChangeText={username => this.setState({username})}
            value = {this.state.username}/>
        </View>

        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#fff"
            onChangeText={password => this.setState({password})}
            value = {this.state.password}/>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress = {this.register.bind(this)}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fff",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#029fff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
