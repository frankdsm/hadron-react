const React = require('react');
const { Long } = require('bson');
const { expect } = require('chai');
const { shallow } = require('enzyme');
const { ElementValue } = require('../../');

describe('<ElementInt32Value />', () => {
  const value = Long.fromNumber(123456789);
  const component = shallow(<ElementValue type="Int64" value={value} />);

  it('sets the base class', () => {
    expect(component.hasClass('element-value')).to.equal(true);
  });

  it('sets the type class', () => {
    expect(component.hasClass('element-value-is-int64')).to.equal(true);
  });

  it('sets the title', () => {
    expect(component.props().title).to.equal('123456789');
  });

  it('sets the value', () => {
    expect(component.text()).to.equal('123456789');
  });
});