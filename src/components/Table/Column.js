import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  dataIndex: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  align: 'left',
  title: '',
};

function Column({ title, style, width, align }) {
  const thStyle = {
    ...style,
    width: width ?? 'auto',
    textAlign: align,
  };
  return (
    <th style={thStyle}>
      <div>{title}</div>
    </th>
  );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
