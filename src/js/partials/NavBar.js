import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import SearchInputBox from '../components/SearchInputBox';

import Image from 'grommet/components/Image'


export default class NavBar extends Component {
    render() {
        let navBarStyle = {
            zIndex: 0
        }
        const Slider = (
            <Carousel autoplay={false}>
                <Image src="img/carouselBackground.png" />
                <Image src="img/carouselBackground.png" />
                <Image src="img/carouselBackground.png" />
            </Carousel>
        )
        let style = {
            width: '100%'
        }
        return (
            <div>
                <SearchInputBox />
                <div className="adTextGroup">
                <span className="adTextLeft">Đọc sách chỉ với<span className="adTextCenter">25K</span><span style={{marginLeft: '10px' }}>Đăng ký ngay</span></span>
                </div>
                <div className="slider">
                    {Slider}
                </div>
            </div>
        );
    }
}