import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const FeaturesScreen = () => {

   
    const [gameFeatures, setGameFeatures] = useState([]);

    const searchFeatures = async () => {
        try {
            const response = await PsaddictApi.get('/category/features', {
                params: {
                    per_page: 10
                }
            });
            setGameFeatures(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchFeatures([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameFeatures}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default FeaturesScreen;