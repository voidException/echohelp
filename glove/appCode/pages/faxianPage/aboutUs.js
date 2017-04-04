/*这个是关于我们页面*/
/* 这个是关于我们*/
import{
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	NavigatorIOS,
	Navigator,
	RefreshControl,
	View,
	ListView,
	PixelRatio,
	Platform,
	Dimensions,
	TextInput,
	Picker,
	Switch,
	Slider,
    WebView
} from 'react-native';

import React,{ Component } from 'react';
import fetchTool  from '../../utils/fetchTool';
import {UrlAboutUs} from '../../utils/url';
let ratio = PixelRatio.get();
let lineHeight = Platform.OS === 'ios' ? 14 : 16;
let statusBarHeight = Platform.OS === 'ios' ? 16 : 0;
let width=Dimensions.get('window').width;
let height=Dimensions.get('window').height;
export  default  class AboutUs extends Component{
	constructor(props){
		super(props);
	}
    componentDidMount(){      
       console.log(UrlAboutUs);
    }
    goBack(){
        this.props.navigator.pop();
    }
	render(){
		return(
			<View style={styles.container}> 
				<View style={styles.head}>   
					<TouchableOpacity onPress={this.goBack.bind(this)} style={styles.returnButton}>
                        <Image source={require('./image/return2.png')} style={styles.backImg} resizeMode={'contain'} />
                    </TouchableOpacity>                                          
                </View>              
                <WebView source={{uri:UrlAboutUs}}/>
            </View>
        );
	}
}


let styles=StyleSheet.create({
	container:{
		flex:1,
        backgroundColor:'#F9FFFC',
	},
	head: {
        flexDirection:'row',
        height:50,
        width:width,    
        borderBottomWidth:1/ratio,
        borderBottomColor:'#F9F9F9',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#43AC43',
        paddingLeft:5,
        paddingRight:5
    },
    returnButton:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    backImg:{
        height:24,
        width:24
    },
    commonStyle:{
        marginTop:100,
    	
    },
    wrapperImage:{
        width:15,
        height:15,
        marginRight:10
    },
 });