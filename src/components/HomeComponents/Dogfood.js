import React from "react";
// import {Link} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink 
} from 'react-router-dom';
class Dogfood extends React.Component{
    render(){
        return (
            <div className="dogfood">
                <header>
                    <div className="station">
                        <span>狗狗世界</span> | <Link to="">选择城</Link>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="搜索商品和品牌"/>
                        <img src={require("../../images/search.png")} alt=""/>
                    </div>
                    <div className="msg">
                        <img src={require("../../images/mydope.png")} alt=""/> 
                    </div>
                </header>
                <div className="menus">
                    <ul>
                        <li className="home" ><NavLink exact to="/homepage" activeClassName="selected">首页</NavLink></li>
                        <li className="dog-food"><NavLink to="/dogfood" activeClassName="selected">狗粮</NavLink></li>          
                    </ul>
                </div> 
               <div className="pagemenus">
                    <ul>
                        <li><img src={require("../../images/dogfood_tab1.png")} alt=""/></li>
                        <li><img src={require("../../images/dogfood_tab2.png")} alt=""/></li>
                        <li><img src={require("../../images/dogfood_tab3.png")} alt=""/></li>
                        <li><img src={require("../../images/dogfood_tab4.png")} alt=""/></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Dogfood;