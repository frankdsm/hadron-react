const React = require('react');
const PropTypes = require('prop-types');

/**
 * The button constant.
 */
const BUTTON = 'button';

/**
 * Component for a button with text.
 */
class TextButton extends React.Component {

  /**
   * Render the button.
   *
   * @returns {Component} The button component.
   */
  render() {
    return React.createElement(
      'button',
      {
        className: this.props.className,
        'data-test-id': this.props.dataTestId,
        type: BUTTON,
        disabled: this.props.disabled,
        onClick: this.props.clickHandler },
      this.props.text
    );
  }
}

TextButton.displayName = 'TextButton';

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool
};

module.exports = TextButton;