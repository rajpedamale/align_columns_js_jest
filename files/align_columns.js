'use strict';

function align_columns(delimitedText) {
  const lines = delimitedText.split('\n').map(line => line.split('$'));
  return lines.map((line => line.join(' '))).join('\n');
}

module.exports = align_columns;
