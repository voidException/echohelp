import React,{	Component	} from 'react';
import {  Provider  } from 'react-redux';
import configureStore from '../store/configureStore';
import MyNavigator from './navigator';


const store =configureStore();

export default class App extends Component{
	render(){
		return(
			<Provider store={store}>
				<MyNavigator />
			</Provider>
		);
	}
}


