import React, { Component } from 'react';
import Heading from 'grommet/components/Heading'
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';


export default class Section extends Component {
    render() {
        let sectionStyle = {
            marginTop: '20px',
            marginBottom: '40px'
        }
        
        let tabRender = this.props.data.map((tab, index) => {
            return (
                <Tab key={index} title={tab.tabName}>
                    <TabContent title={tab.tabName} content={tab.tabContent}/>
                </Tab>
            )
        })
        return (

            <div style={sectionStyle}>
                <Heading tag="h2" align="center">
                    {this.props.name}
                </Heading>
                <Tabs>
                    {tabRender}
                </Tabs>

            </div>
        );
    }
}