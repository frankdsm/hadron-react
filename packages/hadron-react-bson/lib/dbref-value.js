const React = require('react');

/**
 * The base css class.
 */
const CLASS = 'element-value';

/**
 * General BSON DBRef component.
 */
class DBRefValue extends React.Component {

  /**
   * Render a single BSON DBRef value.
   *
   * @returns {React.Component} The element component.
   */
  render() {
    const dbref = this.props.value;
    const value = `DBRef(${dbref.namespace}, ${String(dbref.oid)}, ${dbref.db})`;
    return React.createElement(
      'div',
      { className: `${CLASS} ${CLASS}-is-${this.props.type.toLowerCase()}`, title: value },
      value
    );
  }
}

DBRefValue.displayName = 'DBRefValue';

DBRefValue.propTypes = {
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.any
};

module.exports = DBRefValue;