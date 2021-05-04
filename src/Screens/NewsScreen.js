import React , {useState, useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet, Image, ActivityIndicator, ScrollView} from 'react-native';
import PsaddictApi from '../api/PsaddictApi';


const NewsScreen = () => {
    
    const [gameNews, setGameNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(10);

    searchNews = async () => {
        try {
            const response = await PsaddictApi.get('/category/news', {
                params: {
                    per_page: page
                }
            });
            setGameNews(response.data);
            setIsLoading(false)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=> {
        setIsLoading(true)
        this.searchNews([]);
    }, [page]);

    renderFooter = () => {
        return(
            isLoading ?
            <View style={styles.loader}>
                <ActivityIndicator color="black" size= "large"/>
            </View> : null
        )
    }

    handleLoadMore = () => {
        setPage(page + 5)
        if(page==25){
            setIsLoading(false)
            setPage(25)
        }
        //setIsLoading(true)
    }

    const RenderFirst = ({item}) => {
        return(
            <View>
                <Image style={{ width:50, height: 50, flex: 1, flexDirection: 'column' }} source={{uri: item.media.large}}/>
                <Text> {item.title} </Text>
                
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <ScrollView horizontal>
                <FlatList 
                    data= {gameNews}
                    keyExtractor={item => item.id.toString()}
                    renderItem= {({item, index}) => {
                        if(index<=4) return <RenderFirst item={item} />
                        return(<View>
                            <Image style={styles.image} source={{ uri: item.media.large }} /> 
                            <Text>{item.title}</Text>
                            <Text>{item.author} </Text>
                        </View>)
                    }}
                    ListFooterComponent={this.renderFooter}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0}
                />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 380,
        height: 180
    },
    loader: {
        marginTop: 10,
        alignItems: 'center'
    }
})

export default NewsScreen;