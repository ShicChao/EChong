import React from "react";
class Sale extends React.Component{
    constructor(){
        super()
        this.state={
            sale_datas:null,
            brand_lists:null,
        }
    }
    componentWillReceiveProps(){
        var that = this;
        setTimeout(function(){
            that.setState({
                sale_datas:that.props.datas,
                sale_title:that.props.title_datas.value.center.img.image
            })            
        },1000)       
    }
    shouldComponentUpdate(){
        if(this.state.sale_datas){
            return true;
        }else{
            return false;
        }
    }
    brandList(){
        var newbrandList = null;
         if(this.state.sale_datas){
            newbrandList = this.state.sale_datas.map((item,i) => { 
                                let list = null                               
                                if(item.is_show === 1){
                                    list = <li key={item.index}>
                                        <div className="brand_title">
                                            {item.title}
                                            <span>{item.sub_title}</span>
                                        </div>
                                        <div className="brand_img">
                                            <a><img src={item.content_images[0].image} alt=""/></a>
                                        </div>
                                    </li>
                                } 
                                return list
                            }) 
        }
        return newbrandList       
    }
    render(){       
        return(
            <div className="sale">
                <div className="title">
                    <img src={this.state.sale_title} alt=""/>
                </div>
                <div className="brand">
                    <ul>
                       {this.brandList()} 
                    </ul>
                </div>
            </div>
        )
    }
}
export default Sale;