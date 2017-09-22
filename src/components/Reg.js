import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Reg.css'
import axios from 'axios'
import 'antd/dist/antd.css';
import { Modal } from 'antd';

class Reg extends React.Component {
	constructor() {
		super();
		this.state = {list: []};
		this.back = this.back.bind(this);
		this.reg = this.reg.bind(this);
		this.error = this.error.bind(this);
		this.error1 = this.error1.bind(this);
		this.error2 = this.error2.bind(this);
		this.success = this.success.bind(this);
	}
	back(){
		window.history.back();
	}
	reg(){
		if(this.refs.user.value ==="" || this.refs.pass.value==="" || this.refs.password.value === ""){
			this.error1()   
		}
		if(this.refs.pass.value !==""  && this.refs.password.value !=="" && this.refs.pass.value!==this.refs.password.value){
			this.error2()
		}		
		if(this.refs.pass.value !==""  && this.refs.password.value !=="" && this.refs.pass.value === this.refs.password.value){
			this.setState({
				list:[]
			})
			this.state.list.push(this.refs.user.value);
			this.state.list.push(this.refs.pass.value);		
			this.setState({
				list: this.state.list
			})
			
			axios.get("http://datainfo.duapp.com/shopdata/userinfo.php?userID="+this.state.list[0]+"&password="+this.state.list[1]+"&status=register"
			).then((res)=>{
				console.log(res.data)
				if( res.data === 0 ){
					this.error()   
				}else{
					this.success()
					setTimeout(function(){
						window.location.href="my"
					},2000)						
				}	   	 
			});
		}		
	}
	error() {
  	Modal.error({
    	title: '用户名重名'
  	});
	}
	error1() {
  	Modal.error({
    	title: '请填写所有内容'
  	});
	}
	error2() {
  	Modal.error({
    	title: '密码两次输入不同'
  	});
	}
	success() {
	  Modal.success({
	    title: '注册成功，稍后为您跳转到登录页面',
	  });
	}
	render (){
 		return (
  			<div id="Reg">	
				<div id="logo">
		        	<p id="back" onClick={this.back}>&lt;</p>
		        	<Link to="/my" id="reg">登录</Link>
		        	<div id="echong">E宠</div>
		        	<div id="epet">epet.com</div>
	    		</div>					
				<div id="bodyer">
					<ul id="oul1">
	        			<li id="li1"><i className="icon iconfont icon-account"></i> <input ref="user" type="text"  placeholder="手机号/邮箱/用户名"/></li>
	        			<li id="li2"><i className="icon iconfont icon-password"></i> <input ref="pass" type="text" placeholder="输入密码"/></li>
	        			<li id="li5"><i className="icon iconfont icon-password"></i> <input ref="password" type="text" placeholder="确认密码"/></li>
	        			<li></li>
	        			<li id="li4"><button onClick={this.reg}>注&nbsp;&nbsp;&nbsp;册</button></li>
        			</ul>
				</div>
			</div>
		)
  	}
}

export default Reg ;