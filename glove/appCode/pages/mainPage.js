//该页面是5大页面的容器，

import{
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	ScrollView,
	TouchableHighlight,
	TouchableOpacity,
	NavigatorIOS,
	Navigator,
	RefreshControl,
	View,
	ListView,
	TabBarIOS
} from 'react-native';
import React,{Component} from 'react';
import Loading from '../loading/loading';
import FaxianPage from './faxianPage/faxianPage';
import HelpPage from './messagePage/helpPage';
import TuiWenPageWrapper from './tuiwenPage/tuiwenPage';
import WoPage  from './woPage/woPage';

import { connect } from 'react-redux';
import { fetchTuiwenPageIfNeeded } from '../actions/tuiwenPageAction';
 class MainPage extends Component{
	constructor(props){
		super(props);
		this.state={
			selectedTab:'tuiwen',
			
		}	
		//console.log(this.props)
	}
	componentWillMount(){
		//console.log(this.props);
		// let requestParams={
		// 	userID:1,
		// 	page:1,
		// 	pageSize:6
		// };
		// const {dispatch}=this.props;
		//dispatch(fetchTuiwenPageIfNeeded(requestParams))
	}
	render(){
		return(	
			   <View style={{backgroundColor:'#ffffff',flex:1}}>
				<TabBarIOS tintColor="green" barTintColor="#FBFBFB" translucent= {false} style={styles.container}>
					{/*
					<TabBarIOS.Item
					    badge="" 
						title="项目"
						icon={require('./imgs/Public_btn_02_nor_.png')}
						selected={this.state.selectedTab==='zhuye'}
						onPress={()=>{
							this.setState({selectedTab:'zhuye'});
						}}>
						<ItemPageWrapper  {...this.props} />
					</TabBarIOS.Item>
					*/}
				

					<TabBarIOS.Item
						title="推文"
						icon={require('./imgs/Public_btn_01_nor_.png')}
						selected={this.state.selectedTab==='tuiwen'}
						onPress={()=>{
							this.setState({selectedTab:'tuiwen'});
						}}>

						<TuiWenPageWrapper {...this.props}/>
					</TabBarIOS.Item>
					
					
					<TabBarIOS.Item
						title="资助"
						icon={require('./imgs/Public_btn_03_nor_.png')}
						selected={this.state.selectedTab==='message'}
						onPress={()=>{
							this.setState({selectedTab:'message'});
						}}>
						<HelpPage {...this.props}/>
					</TabBarIOS.Item>
					
					<TabBarIOS.Item
						title="发现"
						icon={require('./imgs/Public_btn_01_nor_.png')}
						selected={this.state.selectedTab==='find'}
						onPress={()=>{
							this.setState({selectedTab:'find'});
						}}>
						<FaxianPage  {...this.props}/>
					</TabBarIOS.Item>
					<TabBarIOS.Item
						title="我"
						icon={require('./imgs/Public_btn_02_nor_.png')}
						selected={this.state.selectedTab==='wo'}
						onPress={()=>{
							this.setState({selectedTab:'wo'});
						}}>
						<WoPage  {...this.props} />
					</TabBarIOS.Item>
				</TabBarIOS>
				
			</View>
		);
	}
}

const MyMainPage=connect()(MainPage);
export default MyMainPage;

let styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#fff',
		
	},
});






























