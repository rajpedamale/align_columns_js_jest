'use strict';

const updateColumnWidths = (columnWidthArray) => (column, index) => {
  if (index >= columnWidthArray.length) {
    columnWidthArray.push(column.length + 1);
  } else if (columnWidthArray[index] <= column.length) {
    columnWidthArray[index] = column.length + 1;
  }
};

function buildColumn(columnWidths) {
  return (column, index) => column.padEnd(columnWidths[index], ' ');
}

function align_columns(delimitedText) {
  const columnWidths = [];
  const lines = delimitedText.split('\n').map((line) => line.split('$'));
  lines.forEach((line) => {
    line.forEach(updateColumnWidths(columnWidths));
  });

  return lines.map((line => line.map(buildColumn(columnWidths)).join('').trim())).join('\n');
}


module.exports = align_columns;
