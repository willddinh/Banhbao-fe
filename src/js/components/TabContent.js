import React, { Component } from 'react';
import Brick from './Brick';
import Bricks from './Bricks';


export default class TabContent extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                <Bricks>
                    <Brick colorIndex="neutral-1" type="large" href="http://www.grommet.io/docs/" />
                    <Brick label="Second" colorIndex="neutral-2" type="tall" />
                    <Brick label="Third" colorIndex="neutral-3">
                    </Brick>
                    <Brick label="Fourth" colorIndex="neutral-4" />
                </Bricks>

            </div>
        );
    }
}