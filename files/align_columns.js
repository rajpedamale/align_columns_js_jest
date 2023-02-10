'use strict';

function align_columns(delimitedText) {
  const columns = delimitedText.split('$');
  return columns.join(' ');
}

module.exports = align_columns;
