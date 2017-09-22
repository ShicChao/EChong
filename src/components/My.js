import React from 'react';
import '../styles/My.css'
import { Link } from 'react-router-dom'
import '../iconfont/iconfont.css'
import axios from 'axios'
import 'antd/dist/antd.css';
import { Modal } from 'antd';



class My extends React.Component {
	constructor() {
		super();
		this.state = {list: []};
		this.back = this.back.bind(this);
		this.login_ord = this.login_ord.bind(this);
		this.login_phone = this.login_phone.bind(this);
		this.login = this.login.bind(this);
		this.error = this.error.bind(this);
	}
	back(){
		window.history.back();
	}
	login_ord(){
		document.getElementById("login_ord").style.background="rgba(255,255,255,.4)";
		document.getElementById("login_phone").style.background="rgba(255,255,255,.2)";
		document.getElementById("main_ord").style.display="block";
		document.getElementById("main_phone").style.display="none";
	}
	login_phone(){
		document.getElementById("login_ord").style.background="rgba(255,255,255,.2)";
		document.getElementById("login_phone").style.background="rgba(255,255,255,.4)";
		document.getElementById("main_ord").style.display="none";
		document.getElementById("main_phone").style.display="block";
	}
	login(){
		this.setState({
			list:[]
		})
		this.state.list.push(this.refs.user1.value);
		this.state.list.push(this.refs.pass1.value);		
		
		this.setState({
			list: this.state.list
		})	

		var id = this.state.list[0] ;
		axios.get("http://datainfo.duapp.com/shopdata/userinfo.php?userID="+this.state.list[0]+"&password="+this.state.list[1]+"&status=login"
	).then((res)=>{
			console.log(res.data)
			if( res.data === 2 ){
				this.error()   
			}else if( res.data === 0 ){
				this.error() 
			}else{
				this.success()
				setTimeout(()=>{
					window.location.href="myshow#"+id+""
				},2000)	
			}		   	 
		});
	}
	error() {
	  	Modal.error({
	    	title: '登录失败，用户名或密码错误'
	  	});
	}
	success() {
	  	Modal.success({
	    	title: '登陆成功，稍后为您跳转到个人页面',
	  	});
	}
	componentDidMount(){
		document.getElementById("main_phone").style.display="none";
	}
  	render (){
    	return (
      		<div id="wrap">
       			<div id="logo">
		        	<p id="back" onClick={this.back}>&lt;</p>
		        	<Link to="/reg" id="reg">注册</Link>
		        	<div id="echong">E宠</div>
		        	<div id="epet">epet.com</div>
		        	<div id="login">
		        		<p id="login_ord" onClick={this.login_ord}>普通登录</p>
		        		<p id="login_phone" onClick={this.login_phone}>手机动态密码登录</p>
		        	</div>
        		</div>
       			<div id="main">
		        	<div id="main_ord">
		        		<ul id="oul">
		        			<li id="li1"><i className="icon iconfont icon-account"></i> <input ref="user1" type="text"  placeholder="手机号/邮箱/用户名"/></li>
		        			<li id="li2"><i className="icon iconfont icon-password"></i> <input ref="pass1" type="text" placeholder="输入密码"/></li>
		        			<li id="li3">忘记密码?</li>
		        			<li id="li4"><button onClick={this.login}>登&nbsp;&nbsp;&nbsp;录</button></li>
		        		</ul>
		        		<div id="hezuo">
		        			<p>合作网站登录</p>
		        			<p>
		        				<img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt=""/>
		        				<img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt=""/>
		        			</p>		        			
		        		</div>
		        	</div>
        			<div id="main_phone">
        				<ul id="oul1">
		        			<li id="li1"><i className="icon iconfont icon-account"></i> <input ref="user" type="text"  placeholder="输入手机号"/></li>
		        			<li id="li2"><i className="icon iconfont icon-password"></i> <input ref="pass" type="text" placeholder="输入验证码"/></li>
		        			<li id="li5"><i className="icon iconfont icon-password"></i> <input ref="pass" type="text" placeholder="输入登录码"/></li>
		        			<li id="li3">忘记密码?</li>
		        			<li id="li4"><button>登&nbsp;&nbsp;&nbsp;录</button></li>
		        		</ul>
		        		<div id="hezuo1">
		        			<p>合作网站登录</p>
		        			<p>
		        				<img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt=""/>
		        				<img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt=""/>
		        			</p>		        			
		        		</div>
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

export default My ;



