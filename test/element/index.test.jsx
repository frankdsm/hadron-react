const React = require('react');
const { expect } = require('chai');
const {
  getElementValueComponent,
  ElementBinaryValue,
  ElementCodeValue,
  ElementDateValue,
  ElementValue,
  ElementDoubleValue,
  ElementInt32Value,
  ElementKeyValue,
  ElementRegexValue
} = require('../../');

describe('#getElementValueComponent', () => {
  context('when the type is Binary', () => {
    it('returns a binary value component', () => {
      expect(getElementValueComponent('Binary')).to.deep.equal(ElementBinaryValue);
    });
  });

  context('when the type is Code', () => {
    it('returns a code value component', () => {
      expect(getElementValueComponent('Code')).to.deep.equal(ElementCodeValue);
    });
  });

  context('when the type is Date', () => {
    it('returns a date value component', () => {
      expect(getElementValueComponent('Date')).to.deep.equal(ElementDateValue);
    });
  });

  context('when the type is Decimal128', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('Decimal128')).to.deep.equal(ElementValue);
    });
  });

  context('when the type is Double', () => {
    it('returns a double value component', () => {
      expect(getElementValueComponent('Double')).to.deep.equal(ElementDoubleValue);
    });
  });

  context('when the type is Int32', () => {
    it('returns an int32 value component', () => {
      expect(getElementValueComponent('Int32')).to.deep.equal(ElementInt32Value);
    });
  });

  context('when the type is Int64', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('Int64')).to.deep.equal(ElementValue);
    });
  });

  context('when the type is MaxKey', () => {
    it('returns an element key value component', () => {
      expect(getElementValueComponent('MaxKey')).to.deep.equal(ElementKeyValue);
    });
  });

  context('when the type is MinKey', () => {
    it('returns an element key value component', () => {
      expect(getElementValueComponent('MinKey')).to.deep.equal(ElementKeyValue);
    });
  });

  context('when the type is ObjectId', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('ObjectId')).to.deep.equal(ElementValue);
    });
  });

  context('when the type is String', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('String')).to.deep.equal(ElementValue);
    });
  });

  context('when the type is a BSONRegExp', () => {
    it('returns an element regex component', () => {
      expect(getElementValueComponent('BSONRegExp')).to.deep.equal(ElementRegexValue);
    });
  });

  context('when the type is Symbol', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('Symbol')).to.deep.equal(ElementValue);
    });
  });

  context('when the type is Timestamp', () => {
    it('returns an element value component', () => {
      expect(getElementValueComponent('Timestamp')).to.deep.equal(ElementValue);
    });
  });
});
