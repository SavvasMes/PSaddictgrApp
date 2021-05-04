import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const VideosScreen = () => {
    
    const [gameVideos, setGameVideos] = useState([]);

    const searchVideos = async () => {
        try {
            const response = await PsaddictApi.get('/category/videos', {
                params: {
                    per_page: 10
                }
            });
            setGameVideos(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchVideos([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameVideos}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default VideosScreen;