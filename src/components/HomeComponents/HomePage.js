import React from "react";
import { Carousel } from 'antd';

class HomePage extends React.Component{
    render(){
        return (
            <div className="homepage">
                <Carousel autoplay>
                     <div><img src={require("../../images/swiper1.jpg")} alt=""/></div>
                     <div><img src={require("../../images/swiper2.jpg")} alt=""/></div>
                     <div><img src={require("../../images/swiper3.jpg")} alt=""/></div>
                     <div><img src={require("../../images/swiper4.jpg")} alt=""/></div>
                     <div><img src={require("../../images/swiper5.jpg")} alt=""/></div>
                     <div><img src={require("../../images/swiper6.jpg")} alt=""/></div>
                </Carousel>
                <div className="publicity">
                    <img src={require("../../images/publicity.gif")} alt=""/>
                </div>

                <div className="pagemenus">
                    <ul>
                        <li><img src={require("../../images/homepage_tab1.png")} alt=""/></li>
                        <li><img src={require("../../images/homepage_tab2.png")} alt=""/></li>
                        <li><img src={require("../../images/homepage_tab3.png")} alt=""/></li>
                        <li><img src={require("../../images/homepage_tab4.png")} alt=""/></li>
                        <li><img src={require("../../images/homepage_tab5.png")} alt=""/></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
export default HomePage;