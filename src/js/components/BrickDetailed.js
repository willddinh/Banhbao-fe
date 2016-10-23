// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import CSSClassnames from 'grommet/utils/CSSClassnames';
import { fetchAddToCart } from '../actions';
import { connect } from 'react-redux';
import $ from "jquery";
import { Link } from 'react-router'

const CLASS_ROOT = CSSClassnames.BRICK;
const BACKGROUND_COLOR_INDEX = CSSClassnames.BACKGROUND_COLOR_INDEX;
const TYPE_SMALL = 'small';
const TYPE_LARGE = 'large';
const TYPE_WIDE = 'wide';
const TYPE_TALL = 'tall';

class BrickDetailed extends Component {
  constructor(props) {
        super(props);
  }
  onMouseOver(id){
    $(".addToCartProductList").css("z-index","-1");
    $(".addToCartProductList-"+this.props.id).css("z-index","0");  
    $(".productListItemInfo-image-"+this.props.id).css("background-color","black").css("opacity","0.4");  

    
  }
  onMouseOut(){
      $(".addToCartProductList").css("z-index","-1");
      $(".productListItemInfo-image").css("background-color","").css("opacity","");  

  }
  onClick(id){
    this.props.dispatch(fetchAddToCart(id));
  }
  render () {
    let widthUnit = 1;
    let heightUnit = 1;

    switch (this.props.type) {
      case TYPE_LARGE:
        widthUnit = 2;
        heightUnit = 2;
        break;
      case TYPE_WIDE:
        widthUnit = 2;
        heightUnit = 1;
        break;
      case TYPE_TALL:
        widthUnit = 1;
        heightUnit = 2;
        break;
    }

    let clickable = this.props.href || this.props.onClick;

    let classes = classnames(
      "productListItem",
      "productListItemSmall",
      {
        [`${BACKGROUND_COLOR_INDEX}-${this.props.colorIndex}`]: this.props.colorIndex,
        [`productListItem--clickable`]: clickable
      },
      this.props.className
    );

    let label = (
      <div className={`${CLASS_ROOT}__label  productListItemInfo-image productListItemInfo-image-`+this.props.id}>
        <span>{this.props.label}</span>
      </div>
    );

    let style = {};
    if (this.props.texture && 'string' === typeof this.props.texture) {
      style.background = "url(" + this.props.texture + ") no-repeat center center";
      style.backgroundSize = "cover";
    } else if (this.props.backgroundImage) {
      style.background = "url(" + this.props.backgroundImage + ") no-repeat center center";
      style.backgroundSize = "cover";
    }
    let texture;
    if ('object' === typeof this.props.texture) {
      texture = <div className={CLASS_ROOT + "__texture"}>{this.props.texture}</div>;
    }

    let brickContent = (
      <div>
        <div className={`${CLASS_ROOT}__container`}>
          {texture}
          {this.props.children}
        </div>
        {label}
      </div>
    );

    if (clickable) {
      let url = "/book/"+this.props.id;
      // onClick={this.onClick.bind(this, this.props.id)}
      return (
        <div onMouseOut={this.onMouseOut.bind(this)} onMouseOver={this.onMouseOver.bind(this, this.props.id)} style={{cursor: "auto"}} className={classes} >
          <div className={`${CLASS_ROOT}__background`} style={style}>
            {brickContent}
          </div>
            <div className={`addToCartProductList addToCartProductList-`+this.props.id}><span onClick={this.onClick.bind(this, this.props.id)} className="pageBtnActive">Add</span></div>
            <div className="productListItemInfo">
            <Link to={`book/`+this.props.id}><div className="banhBaoRow productListItemInfo--title" alt="thien">{this.props.title}</div></Link>
            <div className="banhBaoRow productListItemInfo--author">{this.props.author}</div>
            <div className="banhBaoRow productListItemInfo--rent-price">{this.props.rentPrice} đồng/lần</div>
            <div className="banhBaoRow productListItemInfo--price">giá bán: {this.props.price} đồng</div>
          </div>

        </div>
      );
    } else {
      return (
        <div className={classes} style={style}>
          {brickContent}
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) {

  const { auth } = state.banhBaoApp
  const { addToCart, errorMessage } = auth

  return {
    addToCart,
    errorMessage
  }
}

export default connect(mapStateToProps)(BrickDetailed)
