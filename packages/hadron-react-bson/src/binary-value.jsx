const React = require('react');
const { truncate } = require('hadron-react-utils');

/**
 * Base 64 constant.
 */
const BASE_64 = 'base64';

/**
 * The component class name.
 */
const CLASS = 'element-value element-value-is-binary';

/**
 * BSON Binary value component.
 */
class Binary extends React.Component {

  /**
   * Render the value as a string.
   *
   * @returns {String} The binary value.
   */
  renderValue() {
    const type = this.props.value.sub_type;
    const buffer = this.props.value.buffer;
    return `Binary('${truncate(buffer.toString(BASE_64), 100)}')`;
  }

  /**
   * Render a BSON binary value.
   *
   * @returns {React.Component} The element component.
   */
  render() {
    const value = this.renderValue();
    return (
      <div className={CLASS} title={value}>
        {value}
      </div>
    );
  }
}

Binary.displayName = 'BinaryValue';

Binary.propTypes = {
  type: React.PropTypes.string,
  value: React.PropTypes.any.isRequired
};

module.exports = Binary;
