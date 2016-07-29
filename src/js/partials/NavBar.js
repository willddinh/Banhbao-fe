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
                <Image src="http://pre12.deviantart.net/d4d7/th/pre/f/2015/351/7/0/league_of_legends_fan_art___tahm_kench_retreat___by_benlo-d9ki3br.jpg" />
                <Image src="http://pre12.deviantart.net/d4d7/th/pre/f/2015/351/7/0/league_of_legends_fan_art___tahm_kench_retreat___by_benlo-d9ki3br.jpg" />
                <Image src="http://pre12.deviantart.net/d4d7/th/pre/f/2015/351/7/0/league_of_legends_fan_art___tahm_kench_retreat___by_benlo-d9ki3br.jpg" />
            </Carousel>
        )
        let style = {
            width: '100%'
        }
        return (
            <div>
                <div style={style}></div>
                <div style={style}></div>
                <div style={style}></div>
                <div style={style}></div>
                <SearchInputBox />
                <div className="slider">
                    {Slider}
                </div>
            </div>
        );
    }
}