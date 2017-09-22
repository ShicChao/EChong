import React from 'react';
import {connect} from "react-redux";
// import axios from "axios";


import {
  Link
} from 'react-router-dom';
import HomePage from "./HomeComponents/HomePage";
import Suprice from "./HomeComponents/Suprice";
import Hotsection from "./HomeComponents/Hotsection";
import Fashion from "./HomeComponents/Fashion";
import Sale from "./HomeComponents/Sale";

  //UI
class HomeUI extends React.Component {
  constructor(){
    super();
    this.state = {
      homedatas:null,
      hotsection_datas:null,
      Fashion_datas:null
    }
  } 
  componentDidMount(){
    this.props.listData() 

    var that = this; 
    // let promise = new Promise(function(resolve,reject){
      fetch("/v3/index/main.html?pet_type=dog&version=345&system=wap&isWeb=1&_=1505814428592").then((res)=>{
          return res.json();
      }).then((data)=>{
        that.setState({
          homedatas:data.datas,
          hotsection_datas:data.datas[6],
          fashion_datas:[data.datas[8],data.datas[9]],
          sale_title:data.datas[14],
          sale_datas:[data.datas[16],data.datas[17],data.datas[18],data.datas[19],data.datas[20],data.datas[21],
                      data.datas[22],data.datas[23],data.datas[24],data.datas[25],data.datas[26],data.datas[27],data.datas[28],
                      data.datas[19],data.datas[30],data.datas[31],data.datas[32],data.datas[33],data.datas[34],data.datas[35]
                    ]
        })
          // console.log(this.state.homedatas)
          // console.log(this.state.hotsection_datas)
      })
    // })
    
           
  }
  render (){ 
     
    return (
      <div className="home">             
         <header>
            <div className="station">
              <span>狗狗世界</span> | <Link to="">选择城</Link>
            </div>
            <div className="search">
              <input type="text" placeholder="搜索商品和品牌"/>
              <img src={require("../images/search.png")} alt=""/>
            </div>
            <div className="msg">
              <img src={require("../images/mydope.png")} alt=""/> 
            </div>
        </header>
        <HomePage/>
        <Suprice />
        <Hotsection datas={this.state.hotsection_datas}/>
        <Fashion datas={this.state.fashion_datas}/>
        <Sale datas={this.state.sale_datas} title_datas={this.state.sale_title}/>
        <div className="common-foot">
          <ul>
            <li className="foot-home-sel"><Link to="/"></Link></li>
            <li className="foot-classify"><Link to="/classify"></Link></li>
            <li className="foot-shopcar"><Link to="/shopcar"></Link></li>
            <li className="foot-my"><Link to="/my"></Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
  //container
const mapStateToProps = (state) => {
  return {
    home_list:state.home_list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    listData:()=>{
      fetch("/v3/index/main.html?pet_type=dog&version=345&system=wap&isWeb=1&_=1505814428592").then((res)=>{
          return res.json();
      }).then((res)=>{
        // console.log(res.datas);
        dispatch({
          type:"HOME_LIST",
          payload:res.datas
        })
      })
      // axios.get('/api', {
      //   params: {
         
      //   }
      // })
      // .then(function (res) {
      //   console.log(res.data)
      //   dispatch({
      //     type:"HOME_LIST",
      //     payload:res.data
      //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  }
}
const Home = connect(mapStateToProps,mapDispatchToProps)(HomeUI)
export default Home ;