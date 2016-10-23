
import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CSSClassnames from 'grommet/utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.TABLE_ROW;

export default class TableRow extends Component {
  render () {
    const { children, className, onClick, ...props } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--selectable`]: onClick
      },
      className
    );

    return (
      <tr style={{marginBottom: "15px"}} {...props}  onClick={onClick}>
        {children}
      </tr>
    );
  }
};

TableRow.propTypes = {
  onClick: PropTypes.func
};