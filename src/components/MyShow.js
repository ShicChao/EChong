import React from 'react';
import '../styles/MyShow.css'
import { Link } from 'react-router-dom'

class MyShow extends React.Component {	
	constructor() {
		super();
		this.state = {list: [],url1: ["未登录 点击登录"]};
		this.login = this.login.bind(this);
	}
	login(){
		window.location.href="my";

		if(this.state.url1.length<2){
			this.state.url1.unshift("");
			this.setState({
				url1: this.state.url1
			})
		}
			
	}
	componentDidMount(){
		var url = window.location.hash.substring(1);
		// this.state.url1[0] = url;
		this.setState({
			url1: this.state.url1
		})	
	}
  	render (){
    	return ( 
    		<div id="myshow">
    			<div id="bg">
    				<p>
    					<img src="//static.epetbar.com/static_web/wap/dist/images/background/setting.png" alt=""/>
    					<img src="//static.epetbar.com/static_web/wap/dist/images/background/newn.png"  alt=""/>
    				</p>
    				<div id="toux">
    					<img src="https://img2.epetbar.com/dogs/9.jpg@!water"  alt=""/>
    				</div>
    				<div id="user">
    					<span id="login" onClick={this.login}>{this.state.url1[0]}</span>   					
    				</div>
    			</div>
    			
    			
    			
    			
    			
    			
    			<div className="common-foot">
        
		        <ul>
		            <li className="foot-home"><Link to="/" ></Link></li>
		            <li className="foot-classify"><Link to="/classify"></Link></li>
		            <li className="foot-shopcar"><Link to="/shopcar"></Link></li>
		            <li className="foot-my"><Link to="/my"></Link></li>
		        </ul>
	        
        	</div>
    		</div>
    		
    	)
 	}
}

export default MyShow ;



