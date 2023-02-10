'use strict';

const align_columns = require('./align_columns');

const sampleText = `Given$a$text$file$of$many$lines,$where$fields$within$a$line$
are$delineated$by$a$single$'dollar'$character,$write$a$program
that$aligns$each$column$of$fields$by$ensuring$that$words$in$each$
column$are$separated$by$at$least$one$space.`;
const alignedSampleText = 
`Given  a          text      file   of     many     lines,     where    fields within  a  line
are    delineated by        a      single 'dollar' character, write    a      program
that   aligns     each      column of     fields   by         ensuring that   words   in each
column are        separated by     at     least    one        space.`;

const sampleTextSingleLine = 'Given$a$text$file$of$many$lines,$where$fields$within$a$line$';
const alignedTextSingleLine = 'Given a text file of many lines, where fields within a line';

const sampleTextTwoLines = `aaa$bbb
aaa$bbb`;
const alignedTextTwoLines = `aaa bbb
aaa bbb`;

describe('Align Columns', () => {
  it('should return text', () => {
    expect(typeof align_columns(sampleText)).toEqual('string');
  });
  
  it('should return white space separated text for $ separated text', () => {
    expect(align_columns(sampleTextSingleLine)).toEqual(alignedTextSingleLine);
  });
  
  it('should return space separated text for columns of equal width for multiline text', () => {
    expect(align_columns(sampleTextTwoLines)).toEqual(alignedTextTwoLines);
  });
  
  it('should return columns aligned over multiline text', () => {
    expect(align_columns(sampleText)).toEqual(alignedSampleText);
  });
});
