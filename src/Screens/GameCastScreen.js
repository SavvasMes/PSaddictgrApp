import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const GameCastScreen = () => {
    
    const [gameCast, setGameCast] = useState([]);

    const searchGameCast = async () => {
        try {
            const response = await PsaddictApi.get('/category/gamecast', {
                params: {
                    per_page: 10
                }
            });
            setGameCast(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchGameCast([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameCast}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default GameCastScreen;