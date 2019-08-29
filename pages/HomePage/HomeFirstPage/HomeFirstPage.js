import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Image, Dimensions, ScrollView} from 'react-native';
import ShopCard from '../../components/ShopCard/ShopCard';
import ActCard from '../../components/ActCard/ActCard';
import {BoxShadow} from 'react-native-shadow';


const {allWidth, allHeight} = Dimensions.get('window');


export default class HomeFirstPage extends React.Component{
    constructor(props){
        super(props);
    }



    render(){


        return(
            <ScrollView>
                <View style={{

                    width:allWidth,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={styles.searchPanel}>
                        <Text
                            style={styles.searchText}
                        >搜索美食、校园活动</Text>
                    </View>

                    <View
                        style={styles.banner}
                    >
                        <Image
                            style={{
                                width:330,
                                height:110
                            }}
                            source={require('../../images/Banner.jpg')}
                        />
                    </View>

                    <View style={styles.todayEat}>
                        <Text
                            style={styles.eatTitle}
                        >今天吃什么</Text>
                    </View>
                    <View
                        style={styles.shopPanel}
                    >
                        <ShopCard/>
                        <ShopCard/>
                    </View>

                    <View
                        style={styles.activitiesPanel}
                    >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight: 'bold'
                            }}
                        >热门推荐 · 美食</Text>
                        <View
                            style={{
                                width:57,
                                height:3,
                                backgroundColor:'#55acee',
                                marginTop:7,
                                marginLeft:7
                            }}
                        >
                        </View>
                        <View style={{
                            width:330,
                            marginTop: 22

                        }}>
                            <ActCard/>
                            <ActCard/>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    searchPanel:{
        marginTop: 40,
        width:330,
        height:32,
        backgroundColor: 'whitesmoke',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'

    },
    searchText:{
        fontSize:15,
        color:'#555'
    },
    banner:{
        width:330,
        height:110,
        backgroundColor:'whitesmoke',
        marginTop: 10
    },
    todayEat:{
        width:330,
        alignItems:'flex-start',
        marginTop: 20
    },
    eatTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    shopPanel:{
        width: 330,
        marginTop: 16,
        justifyContent:'flex-start',
        flexDirection:'row'

    },
    activitiesPanel:{
        marginTop: 32,
        width: 330,
        justifyContent:'flex-start'
    }
});



