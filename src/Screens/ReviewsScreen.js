import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const ReviewsScreen = () => {

    
    const [gameReviews, setGameReviews] = useState([]);

    const searchGameReviews = async () => {
        try {
            const response = await PsaddictApi.get('/category/game-reviews', {
                params: {
                    per_page: 10
                }
            });
            setGameReviews(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchGameReviews([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameReviews}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default ReviewsScreen;