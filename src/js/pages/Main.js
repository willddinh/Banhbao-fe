import '../../scss/index.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import NavBar from '../partials/NavBar';
import Menu from '../partials/Menu';
import Section from '../partials/Section';

export default class Main extends Component {
  render() {
    let menuButtonConf = [
      {
        id: 1,
        name: 'Trang chủ',
        url: '/#',
        active: true
      },
      {
        id: 2,
        name: 'Sách',
        url: '/#'
      },
      {
        id: 3,
        name: 'Quần áo',
        url: '/#'
      },
      {
        id: 4,
        name: 'Phụ kiện',
        url: '/#'
      },
      {
        id: 5,
        name: 'Khuyến mại',
        url: '/#'
      }


    ];


    let tabData1 = [
      {
        tabName: "Nổi bật",
        tabContent: [
          {
            id: 1,
            img: "img/book1.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book2.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book3.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book4.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book5.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book6.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book7.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "img/book8.png",
            href: "http://google.com/",
            type: "small"
          }
        ]
      },
      {
        tabName: "Khuyến mại",
        tabContent: [
          {
            id: 1,
            img: "http://genknews.genkcdn.vn/k:thumb_w/640/2016/1-1469776583175/diemtindota2ti6con4ngaynguoitrungquoctieptucgapkho.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 2,
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 3,
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 4,
            href: "http://google.com/",
            type: "small"
          }
        ]
      },
      {
        tabName: "Tất cả",
        tabContent: [
          {
            id: 1,
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            img: "http://genknews.genkcdn.vn/k:thumb_w/640/2016/1-1469776583175/diemtindota2ti6con4ngaynguoitrungquoctieptucgapkho.png",
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            href: "http://google.com/",
            type: "small"
          },
          {
            id: 1,
            href: "http://google.com/",
            type: "small"
          }
        ]
      }
    ]

    let container = {
      width: '80%',
      margin: '0 auto'
    }

    return (
      <App centered={false}>
        <Menu conf={menuButtonConf}/>
        <NavBar/>
        <div className="container" style={container}>

          <Section name="Sách" data={tabData1}/>
          <Section name="Second Section" data={tabData1} />
          <Section name="Third Section" data={tabData1} />

        </div>
        <Footer primary={true} appCentered={true} direction="column"
          align="center" pad="small" colorIndex="grey-1">
          <p>
            Build your ideas with <a href="http://grommet.io" target="_blank">Grommet</a>!
          </p>
        </Footer>
      </App>
    );
  }
}
