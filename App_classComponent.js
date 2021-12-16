import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : "https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    }
  }
  
  render() {
    return (
      <View>
        <Text style={desain.title}>
          Welcome to your first react app
        </Text>
        <Image source={{uri: this.state.image}} style={desain.thumbnail}/>
        <Button title="Click" />
      </View>
    );
  }
}

const desain = StyleSheet.create({
  title:{
    fontWeight:"bold",
    fontSize:18,
    color:"orange",
    textAlign:"center",
    marginVertical:20
  },
  thumbnail :{
    width:"100%",
    height:"60%"
  }
})

export default App;