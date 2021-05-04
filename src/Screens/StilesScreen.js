import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const StilesScreen = () => {
    
    const [gameStiles, setGameStiles] = useState([]);

    const searchStiles = async () => {
        try {
            const response = await PsaddictApi.get('/category/monimes-stiles', {
                params: {
                    per_page: 10
                }
            });
            setGameStiles(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchStiles([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameStiles}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default StilesScreen;