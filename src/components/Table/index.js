import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import './table.scss';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowAllSelect: false, //全选按钮
      rowCheck: [], //单项勾选框
      rowSelId: [], //选中的id
      sortArr: [], //排序标志数组
    };
  }

  static propTypes = { dataSource: PropTypes.array.isRequired };

  static Column = Column;

  renderTbodyTd = (data, index) => {
    const { children } = this.props;
    // 获取Column上的dataIndex
    const dataIndexs =
      children?.map(({ props = {} }) => props?.dataIndex) || [];

    // 渲染单元格
    const renderCell = (keyStr = '', _index) => {
      // 判断是不是操作单元格 是最后一项且有cell属性表示是操作单元格
      const isActionCell =
        _index === dataIndexs.length - 1 && !!children[_index]?.props?.cell;

      let dataIndexValue = '';
      keyStr?.split('.')?.forEach((str) => {
        dataIndexValue = dataIndexValue?.[str] || data[str];
      });

      return isActionCell
        ? children[_index].props.cell(dataIndexValue, index, data)
        : dataIndexValue;
    };

    return dataIndexs.map((dataIndex, i) => (
      <td key={i}>{renderCell(dataIndex, i)}</td>
    ));
  };

  render() {
    const { children, dataSource } = this.props;

    return (
      <div className='table-box'>
        <table>
          {/* 表头部分 */}
          <thead>
            <tr>
              {children?.map((child, index) =>
                React.cloneElement(child, {
                  ...child,
                  key: index,
                })
              )}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((data, i) => (
              <tr key={i}>{this.renderTbodyTd(data, i)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// Table.Column = Column;
