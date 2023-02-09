'use strict';

const align_columns = require('./align_columns');

const sampleText = '';

describe('Align Columns', () => {
  it('should return text', () => {
    expect(typeof align_columns(sampleText)).toEqual('string');
  });
});
