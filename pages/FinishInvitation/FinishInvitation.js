import React from 'react';
import {View, Button, Alert, Text, StyleSheet, TextInput} from 'react-native';
import MyTextInput from '../components/MyTextInput/MyTextInput';
import {TouchableOpacity} from 'react-native';
import global from '../Global'


export default class FinishInvitation extends React.Component {

    static navigationOptions = ({navigation}) => {
        //  关键这一行设置 header:null
        return {
            header: null,
        }
    };

    constructor(props) {
        super(props);
        this.state={
            text:'',
            color:'lightgray'
        }
    }

    pressFun() {
        this.props.navigation.navigate('FinishResume');
    }


    render() {

        return (
            <View style={styles.container}>

                <View style={styles.topPanel}>
                    <Text style={styles.topButton}
                          onPress={()=>{
                              this.props.navigation.navigate('HomePage');
                              // this.props.navigation.navigate('TestPage');
                          }}
                    >跳过</Text>
                </View>
                <View style={styles.titlePanel}>
                    <Text style={styles.titleFonts}>填写邀请码</Text>
                </View>
                <View style={styles.introPanel}>
                    <Text style={styles.introFonts}>成为叮当口袋正式会员，解锁全部福利</Text>
                </View>
                <View style={styles.inputPanel}>
                    <TextInput
                        // style={styles.inputStyle}
                        placeholder='请输入邀请码'
                        style={{color:this.state.color,
                            borderColor:this.state.color,
                            height: 40,
                            width:320,
                            fontSize: 16,
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            borderTopColor: '#fff',
                            borderLeftColor: '#fff',
                            borderRightColor: '#fff'}}
                        onChangeText={(text) => this.setState({text})}
                        onFocus={()=>{
                        this.setState({
                            color:'#333'
                        })
                    }}
                        value={this.state.text}
                    />

                </View>

                <View style={styles.buttonPanel}>
                    <TouchableOpacity
                        onPress={()=>{
                            let _this = this;
                            console.log(this.state.text);
                            fetch(global.baseUrl+'/user/activation',{
                                method:'post',
                                credentials: 'include',
                                mode:'cors',
                                headers:{
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer '+global.token,
                                },
                                body:JSON.stringify({
                                    key: this.state.text
                                })
                            }).then((response)=>response.json())
                                .then((responseJson)=>{
                                    console.log(responseJson);
                                    if(responseJson.code===0){
                                        console.log(responseJson);
                                        global.token = responseJson.data.token;
                                        Alert.alert('填写成功！');
                                        _this.props.navigation.navigate('FinishResume');
                                    }else{
                                        Alert.alert('账户类型出错！请重新登录');
                                    }
                                }).catch((error)=>{
                                console.log(error);
                            })
                        }}
                    >
                        <View style={styles.confirmButton}>
                            <Text style={styles.buttonText}>
                                提交
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}


const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'flex-start',
       alignItems:'center',
       // backgroundColor:'#000'
   },
    topPanel:{
       marginTop: global.useMarginTop,
        height:20,
        width:300,
        alignItems:'flex-end'
    },
    topButton:{
      color:'gray',
      fontSize: 18
    },
    titlePanel:{
       marginTop:40,
       width:320
    },
    titleFonts: {
       fontSize:24,
        fontWeight: 'bold'
    },
    introPanel:{
        marginTop:50,
        width:320
    },
    introFonts: {
        fontSize:14,
        // fontWeight: 'bold'
    },
    inputPanel:{
        marginTop: 50
    },
    buttonPanel:{
       marginTop:45,
       width:320,
    },
    confirmButton:{
        width:320,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#55ACEE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color:'#fff'
    },
    inputStyle:{
        height: 40,
        width:320,
        // color: 'lightgray',
        // borderColor: 'lightgray',
        borderWidth: 1,
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
    }

});





