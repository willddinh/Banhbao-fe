import React, { Component } from 'react';
import Heading from 'grommet/components/Heading'
import Tab from '../components/Tab';
import Tabs from '../components/Tabs';
import TabContent from '../components/TabContent';
import $ from 'jquery';

export default class Section extends Component {
    constructor() {
        super();
        this.state = {
            tabData:[]
        }
    }

    componentDidMount(){
        $.get("http://104.199.175.76/api/book/getBySubCat")
        .done((res)=>{
            this.setState({
                tabData: res
            })
        })
    }

    render() {
        let sectionStyle = {
            marginTop: '45px'
        }
        
        let tabRender = this.state.tabData.map((tab, index) => {
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