import React, { Component } from 'react';
import Heading from 'grommet/components/Heading'
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';


export default class Section extends Component {
    render() {
        let sectionStyle = {
            marginTop: '45px'
        }
        
        let tabRender = this.props.data.map((tab, index) => {
            return (
                <Tab key={index} title={tab.tabName}>
                    <TabContent title={tab.tabName} content={tab.tabContent}/>
                </Tab>
            )
        })
        return (
            <div>
                <div className="section" style={sectionStyle}>
                    <div className="sectionTitle">
                        {this.props.name}
                    </div>
                    <Tabs>
                        {tabRender}
                    </Tabs>
                </div>
                <form className="sectionBtn"><button>Xem chi tiết</button></form>
            </div>
        );
    }
}