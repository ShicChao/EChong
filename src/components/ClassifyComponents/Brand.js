import React from 'react';
import {
  Link
} from 'react-router-dom';

class Brand extends React.Component {
	render(){
		return (
			<div className="classify brand">
				<header>
					<ul className="h_change">
        		<li><Link to="/classify/itemize">分类</Link></li>
        		<li className="c_itemize"><Link to="/brand">品牌</Link></li>
	        </ul>
				</header>
				
				<div className="brand_con">
					
				</div>
				
				
      
        <div className="common-foot">
        
	        <ul>
            <li className="foot-home"><Link to="/" ></Link></li>
            <li className="foot-classify-sel"><Link to="/classify"></Link></li>
            <li className="foot-shopcar"><Link to="/shopcar"></Link></li>
            <li className="foot-my"><Link to="/my"></Link></li>
	        </ul>
	        
        </div>
				
				Brand
			
			</div>
		)
	}
}

export default Brand
