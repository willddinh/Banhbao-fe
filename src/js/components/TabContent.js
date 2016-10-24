import React, { Component } from 'react';
import BrickDetailed from './BrickDetailed';
import Bricks from './Bricks';


export default class TabContent extends Component {
    render() {
        let tabContent = this.props.content.map((content, index) => {
            return (
                <BrickDetailed  id={content.entity_id} key={index} title={content.title} texture={content.path} colorIndex={"neutral-" + (index+1)} type={content.type} href={"http://google.com"}
                    rentPrice={Number(content.price)} price={Number(content.price)} author={content.author} 
                />
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