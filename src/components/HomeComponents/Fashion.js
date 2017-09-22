import React from "react";

class Fashion extends React.Component{
    constructor(){
        super();              
        this.state = {
            fashion_datas:null,
            right_img:null,
            title_img:null
        }
    }
    componentDidMount(){
      
    }
    componentWillReceiveProps(){
        var that = this
        setTimeout(function(){
            that.setState({
               fashion_datas:that.props.datas,
               title_img:that.props.datas[0].value.center.img.image,
               right_img:that.props.datas[0].value.right.img.image,
               video_img:that.props.datas[1].value[0].cover.image,
               video_time:that.props.datas[1].value[0].time,
               visit_img:that.props.datas[1].value[0].visit_img.image,
               target_title:that.props.datas[1].value[0].title,
               target_visit:that.props.datas[1].value[0].visit,

            })
        },1000)      
    }
    render(){
        return (
            <div className="fashion">
               <div className="title">
                    
                    <a className="more" href="">
                        <img src={this.state.right_img} alt=""/>
                    </a>    
                    <img className="center" src={this.state.title_img} alt=""/>    
               </div>
               <div className="video">
                    <a href="">
                        <p>{this.state.video_time}</p>
                        <img className="video-img" src={this.state.video_img} alt=""/>
                    </a>
                </div>
                <div className="visit">
                    <p>{this.state.target_title}</p>
                    <span>{this.state.target_visit}</span>
                    <img className="play-img" src={this.state.visit_img} alt=""/>
                    
                </div>
            </div>
        )       
    }
}
export default Fashion;