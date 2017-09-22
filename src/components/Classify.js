import React from 'react';
import { Link } from 'react-router-dom';

class Classify extends React.Component {
	
	constructor (){
		super();
		this.state = {
			lf_list: [],
			lf_class: "",
			rg_list: []
		};
		this.change_class = this.change_class.bind(this);
		
	}
	
	componentDidMount(){
		this.getDate_lflist();
		this.getDate_rglist();
	}
	
	//改变class名
	change_class (){	
		this.setState({
			lf_class: "lf_active"
		});
	}
	
	//获取数据
	getDate_lflist (){
		fetch("/v3/goods/category/main.html?pet_type=dog").then((res) => {
			return res.json();
		}).then((data) => {
			var newArr = data.categorys;
			newArr.splice(1,1)
			this.setState({
				lf_list: newArr
			});
		})
	}
	
	getDate_rglist(){
		fetch("/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&system=wap&isWeb=1&version=303&_=1505955660649").then((res) => {
			return res.json();
		}).then((data) => {
			console.log(data.cate_list[0].list);
			const rg_arr = data.cate_list[0].list;
			this.setState({
				rg_list: rg_arr
			})
		})
	}
	
  	render (){
    	return (
	      	<div className="classify">
	      
		      	<header>
					<ul className="h_change">
		        		<li className="c_itemize"><Link to="/classify/itemize">分类</Link></li>
		        		<li><Link to="/brand">品牌</Link></li>
			        </ul>
				</header>
					
				<div className="content">
				
					<div className="left">
						
						<ul>
							{
								this.state.lf_list.map((item) => {
									return (
										<li key={item.cateid} onClick={this.change_class}>{item.name}</li>
									);
								})
							}
						</ul>
				
		
					</div>	
					
					<div className="right">
						<p>热门分类</p>
						<ul className="goods_detail">
							{
								this.state.rg_list.map((item) => {
									return (
										<li key={item.id_param}><img src={item.photo}/>{item.name}</li>
									)
								})
							}
						</ul>
					</div>
				</div>
	      
		        <div className="common-foot classify-foot">
		        
			        <ul>
			            <li className="foot-home"><Link to="/" ></Link></li>
			            <li className="foot-classify-sel"><Link to="/classify"></Link></li>
			            <li className="foot-shopcar"><Link to="/shopcar"></Link></li>
			            <li className="foot-my"><Link to="/my"></Link></li>
			        </ul>
			        
		        </div>
	        
	      	</div>
    	)
  	}
}

export default Classify ;




















