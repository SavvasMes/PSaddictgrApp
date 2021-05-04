import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const DealsScreen = () => {
    
    const [gameDeals, setGameDeals] = useState([]);

    const searchDeals = async () => {
        try {
            const response = await PsaddictApi.get('/category/deals', {
                params: {
                    per_page: 10
                }
            });
            setGameDeals(response.data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        searchDeals([]);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList 
                    data= {gameDeals}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item}) => (
                        <Text>{item.title}</Text>
                    )}

                />
                
            </View>
        </SafeAreaView>
        
    )
}

export default DealsScreen;