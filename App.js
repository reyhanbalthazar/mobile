import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';

const App = (props) => {
    const [image, setImage] = useState("https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")
    const [inUrl, setInUrl] = useState("")

    const handleInputURL = (value) => {
        // versi React JS
        // console.log(event.target.value)
        // versi React Native ⬇⬇
        // console.log(event.nativeEvent.text)

        // versi React JS
        // this.setState({inUrl:event.target.value})
        // versi React Native ⬇⬇
        setInUrl(value)
    }

    const onBtChangeImage = () => {
        setImage(inUrl)
    }

    return (
        <View>
            <Text style={desain.title}>
                Welcome to your first functional Component
            </Text>
            <Image source={{ uri: image }} style={desain.thumbnail} />
            {/* <TextInput type="text" placeholder="Input URL" onChange={handleInputURL} /> */}
            <TextInput type="text" placeholder="Input URL" onChangeText={(text) => handleInputURL(text)} />
            <Button title="Click Me!" onPress={onBtChangeImage} />
        </View>
    )
};

const desain = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: "coral",
        textAlign: "center",
        marginVertical: 20
    },
    thumbnail: {
        width: "100%",
        height: "60%"
    }
})

export default App;