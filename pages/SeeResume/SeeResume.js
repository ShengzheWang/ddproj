import React from 'react';
import {View, Button, Text,  Dimensions, Image} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import global from '../Global';



export default class SeeResume extends React.Component{


    constructor(props){
        super(props);


        this.state={
            sourceUrl: this.props.navigation.state.params.sourceUrl,
            name:this.props.navigation.state.params.name,
            gender: this.props.navigation.state.params.gender,
            introduction: this.props.navigation.state.params.introduction,
            phone: this.props.navigation.state.params.phone,
            profession: this.props.navigation.state.params.profession
        }
    }


    static navigationOptions = {
        header:null
    };


    componentDidMount() {
    }



    render(){
        return(
            <View
                style={styles.container}
            >
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: 50,
                        // backgroundColor:'#000',
                        marginTop: 1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            width: Dimensions.get('window').width*0.9,
                            height: 25,
                            flexDirection:'row'
                        }}
                    >
                        <View
                            style={{
                                width: 35,
                                height:24,
                            }}
                        >
                            <TouchableOpacity
                                onPress={()=>{
                                    this.props.navigation.goBack();
                                }}
                            >
                                <Image
                                    source={require('../images/方向-左.png')}
                                    style={{
                                        width:24,
                                        height:24,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                width: Dimensions.get('window').width*0.9-70,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',

                                }}
                            >
                                简历预览
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 35,
                                height: 24,
                                justifyContent:'center',
                                alignItems:'center',

                            }}
                        >
                        </View>


                    </View>


                </View>


                {/*
                    头像
                */}

                <View
                    style={{
                        marginTop: 20,
                        width: allWidth,
                        height: 168,
                        alignItems: 'center'
                    }}
                >{
                    this.state.sourceUrl !== "" ? 
                    <Image style={{
                        width:88,
                        height:88,
                        borderRadius: 44,
                        
                    }} source={this.state.sourceUrl} /> :

                    <View
                        style={{
                            width:88,
                            height:88,
                            borderRadius: 44,
                            backgroundColor: '#55acee',
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                    >
                        <Text 
                        style={{
                            color: 'white'
                        }}>
                            暂无头像
                        </Text>

                    </View>

                }  

                    <View
                        style={{
                            width:64,
                            height:20,
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize:14,
                                color:'#333',
                                fontWeight: 'bold',

                            }}
                        >
                            {this.state.name} {this.state.gender}
                        </Text>
                    </View>
                    <View
                        style={{
                            width:allWidth*0.7,
                            height:20,
                            justifyContent:'center',
                            alignItems:'flex-start',
                            marginTop: 46
                        }}
                    >
                        <Text
                            style={{
                                fontSize:14,
                                color:'#333',
                                fontWeight: 'bold',

                            }}
                        >
                            {"联系电话："} {this.state.phone}
                        </Text>
                    </View>
                    <View
                        style={{
                            width:allWidth*0.7,
                            height:20,
                            justifyContent:'center',
                            alignItems:'flex-start',
                            marginTop: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize:14,
                                color:'#333',
                                fontWeight: 'bold',

                            }}
                        >
                            {"主修专业："} {this.state.profession}
                        </Text>
                    </View>


                    <View
                        style={{
                            width:allWidth*0.7,
                            height:20,
                            justifyContent:'center',
                            alignItems:'flex-start',
                            marginTop: 16
                        }}
                    >
                        <Text
                            style={{
                                fontSize:14,
                                color:'#333',
                                fontWeight: 'bold',

                            }}
                        >
                            {this.state.introduction}
                        </Text>
                    </View>

                </View>


            </View>

        );
    }


}

const allWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    topBar:{
        width: allWidth,
        height: 50,
        marginTop: global.useMarginTop,
        flexDirection:'row',

    }

});
