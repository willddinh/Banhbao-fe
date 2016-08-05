import React, { Component } from 'react';
import Brick from './Brick';
import Bricks from './Bricks';


export default class TabContent extends Component {
    render() {
        let tabContent = this.props.content.map((content, index) => {
            return (
                <Brick key={index} texture={content.img} colorIndex={"neutral-" + (index+1)} type={content.type} href={content.href} />
            )
        })
        return (
            <div>
                <Bricks>
                    {tabContent}
                </Bricks>

            </div>
        );
    }
}