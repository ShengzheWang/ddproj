import React from 'react';
import {View, Image, Button, Text, StyleSheet,TouchableOpacity} from 'react-native';
import global from '../Global';





export default class FirstPage extends React.Component{

    static navigationOptions=({navigation}) => {
        //  关键这一行设置 header:null
        return{
            header: null,
        }
    };
    constructor(props){
        super(props);
    }



    render() {
        return(
            <View style={styles.container}>
                <View style={styles.imagePanel}>
                    <Image style={styles.circleImage} source={require('../images/icon.png')}  />
                </View>
                <View style={styles.fontsPanel}>
                    <Text style={styles.titleFonts}>叮当口袋</Text>
                    <Text style={styles.titleFonts}>只要你有，只要我有</Text>
                </View>
                <View style={styles.buttonPanel} >
                    <TouchableOpacity onPress={()=>{

                        let _this = this;

                        fetch(global.baseUrl+'/user/login',{
                          method:'post',
                          headers:{
                              'Content-Type' : 'application/json',

                          },
                          body:JSON.stringify({
                              channel: 0,
                              uid:'dss5haned155ddhhw'
                        })
                        }).then((response)=>response.json())
                            .then((responseJSON)=>{
                                console.log(responseJSON);
                                global.token = responseJSON.data.token;
                                if(responseJSON.data.role===0){
                                    _this.props.navigation.navigate('FinishInvitation');    
                                }else{
                                    _this.props.navigation.navigate('HomePage');
                                }
                            });
                        // this.props.navigation.navigate('FinishInvitation');
                    }}>
                        <View style={styles.loginButton}>
                            <Text style={styles.buttonText}>微信登录</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.loginButtonA}>
                        <Text style={styles.buttonTextA}>支付宝登录</Text>
                    </View>
                    <View
                        style={{
                            width: 280,
                            height: 50,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 13,
                                color:'#666'
                            }}

                            onPress={()=>{
                                this.props.navigation.navigate('ShopLogin');
                            }}
                        >商家登录</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#000'
    },
    imagePanel:{
        width: 280,
        marginTop:-100
    },
    circleImage:{
        width:80,
        height:80,
        backgroundColor:'#55ACEE',
        borderRadius:40
    },
    fontsPanel:{
        marginTop: 40,
        width:280
    },
    titleFonts:{
        marginTop:10,
        fontWeight: 'bold',
        fontSize: 24,

    },
    buttonPanel:{
      width:280,
      marginTop: 160
    },
    loginButton:{
        width:280,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#55ACEE',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText:{
        color:'#fff'
    },
    loginButtonA:{
        marginTop: 20,
        width:280,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonTextA:{
        color:'#000'
    }
});

