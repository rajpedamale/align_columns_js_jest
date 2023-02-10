'use strict';

const updateColumnWidths = (columnWidthArray) => (column, index) => {
  if (index >= columnWidthArray.length) {
    columnWidthArray.push(column.length + 1);
  } else if (columnWidthArray[index] <= column.length) {
    columnWidthArray[index] = column.length + 1;
  }
};

function align_columns(delimitedText) {
  const columnWidths = [];
  const lines = delimitedText.split('\n').map((line) => line.split('$'));
  lines.forEach((line) => {
    line.forEach(updateColumnWidths(columnWidths));
  });
  console.log(columnWidths);

  return lines.map((line => line.join(' '))).join('\n');
}

module.exports = align_columns;
