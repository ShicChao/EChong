import React from "react";
import axios from "axios";
class Suprice extends React.Component{
    constructor(){
        super()
        this.state = {lists:[]}
        // this.hotgoods_lists = this.hotgoods_lists.bind(this)
    }
    componentDidMount(){
        var that = this
       axios.get('/hotdata', {
        params: {
         
        }
      })
      .then(function (res) {        
        that.setState({lists : res.data})   
          
      })
    }
    hotgoods_list(){
        let listarr = []  
        if(this.state.lists){
            for(let i = 0;i < this.state.lists.length;i ++){
                listarr.push(<a className="goods" key={this.state.lists[i]._id}>
                        <img src={this.state.lists[i].img} alt=""/>
                        <p>￥{this.state.lists[i].price}</p>
                        <span>省￥{this.state.lists[i].economize}</span>
                </a>)
            }
        }
        return listarr;

    }
    render(){
        return (
            <div className="suprice">
                <div className="img">
                    <img className="crazy" src={require("../../images/suprice.png")} alt=""/>
                    <a href="" className="more">
                        <img src={require("../../images/more.png")} alt=""/>
                    </a>
                </div>
                <div className="hotgoods swiper-container">
                    <div className="swiper-wrapper">
                      {this.hotgoods_list()}
                    </div>
                </div>
            </div>
        )
    }
}
export default Suprice;