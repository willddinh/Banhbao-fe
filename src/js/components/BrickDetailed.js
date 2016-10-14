// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import CSSClassnames from 'grommet/utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.BRICK;
const BACKGROUND_COLOR_INDEX = CSSClassnames.BACKGROUND_COLOR_INDEX;
const TYPE_SMALL = 'small';
const TYPE_LARGE = 'large';
const TYPE_WIDE = 'wide';
const TYPE_TALL = 'tall';

export default class Brick extends Component {
  onClick(id){

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
      <div className={`${CLASS_ROOT}__label`}>
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
      return (
        <Anchor href={url} onClick={this.onClick.bind(this, this.props.id)} className={classes}>
          <div className={`${CLASS_ROOT}__background`} style={style}>
            {brickContent}
          </div>
          
          <div className="productListItemInfo">
            <div className="banhBaoRow productListItemInfo--title" alt="thien">{this.props.title}</div>
            <div className="banhBaoRow productListItemInfo--author">{this.props.author}</div>
            <div className="banhBaoRow productListItemInfo--rent-price">{this.props.rentPrice} đồng/lần</div>
            <div className="banhBaoRow productListItemInfo--price">giá bán: {this.props.price} đồng</div>
          </div>

        </Anchor>
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

Brick.propTypes = {
  colorIndex: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  texture: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  type: PropTypes.oneOf([TYPE_SMALL, TYPE_LARGE, TYPE_WIDE, TYPE_TALL])
};

Brick.defaultProps = {
  type: TYPE_SMALL
};
