'use strict';

const align_columns = require('./align_columns');

const sampleText = 'Given$a$text$file$of$many$lines,$where$fields$within$a$line$';

describe('Align Columns', () => {
  it('should return text', () => {
    expect(typeof align_columns(sampleText)).toEqual('string');
  });
  
  it('should return white space separated text for $ separated text', () => {
    expect(align_columns(sampleText)).toEqual('Given a text file of many lines, where fields within a line ');
  });
});
