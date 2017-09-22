import React from "react";

class Hotsection extends React.Component{
    constructor(){
        super();              
        this.state = {
            hot_datas:null,
            title_img:null,
            content_img_left:null,
            content_img_top:null,
            content_img_bot:null,
        }
    }
    componentDidMount(){
      
    }
    componentWillReceiveProps(){
       var that = this
        setTimeout(function(){
            that.setState({
                hot_datas:that.props.datas,
                title_img:that.props.datas.center_image.image,
                content_img_left:that.props.datas.content_images[0][0].image,
                content_img_top:that.props.datas.content_images[1][0].image,
                content_img_bot:that.props.datas.content_images[1][1].image
            })
        },1000)      
    }
    render(){
        return (
            <div className="hotsection">
                <div className="title">                    
                     <img src={this.state.title_img} alt=""/> 
                </div>
                <div className="content">
                    <a className="left_content">
                        <img src={this.state.content_img_left} alt=""/>
                    </a>
                    <div className="right_content">
                        <a className="top_content">
                            <img src={this.state.content_img_top} alt=""/>
                        </a>
                        <a className="bot_content">
                            <img src={this.state.content_img_bot} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        )       
    }
}
export default Hotsection;