import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import SearchInputBox from '../components/SearchInputBox';
import $ from 'jquery';
import Image from 'grommet/components/Image'


export default class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            carousels : []
        }
    }

    componentDidMount(){
        $.get("http://104.199.175.76/api/ui/slider")
        .done((res)=>{
            this.setState({
                carousels: res.sliders
            }) 
        })

    }

    render() {
        let carouselImgs = this.state.carousels.map((carousel, index) => {
            return (
                <Image key={carousel.id} src={carousel.path} />
            )
        })

        let navBarStyle = {
            zIndex: 0
        }
        const Slider = (
            <Carousel autoplay={false}>
                {carouselImgs}
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