import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image} from 'react-native';
import axios from 'axios';




const SettingsScreen = () => {
    const url = 'https://psaddict.gr/wp-json/better-rest-endpoints/v1/posts';

    const [data, setData] = useState([]);

     useEffect(() => {
            async function loadPosts() {
                const response = await fetch(url);
                if(!response.ok) {
                    return;
                }
                const posts = await response.json();
                setData(posts);
            }
            loadPosts();
     }, [])
    
    return (
        <SafeAreaView>
            <FlatList style={{ backgroundColor: 'white' }} 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({item}) => {
                    return(
                    <View style={{ padding:20 }}>
                        <Image source={{ uri: item.media.medium }} style={{ width: 300, height: 150 }}  />
                        <Text style={{ fontSize: 18, width: 300 }}>{item.title}</Text>
                        <Text style={{ fontSize: 18 }}>{item.author}</Text>
                    </View>
                    )
                }}
            />
        </SafeAreaView>
        
    )
}

export default SettingsScreen;