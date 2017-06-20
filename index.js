const initializeHintField = (mineField) => {
  const rowCount = mineField.length;
  const colCount = mineField[0].length;
  const rows = new Array();  
  for (let i = 0; i < rowCount; i++) {
    rows.push(new Array(colCount));
  }
  return rows;
};

const incrementAdjacentCounts = (hintField, i, j) => {
  const incrementCount = (hintField, x, y) => {
    const isMine = val => val === '*';
    const isInBounds = (r, c) => r >= 0 && r < hintField.length && c >= 0 && c < hintField[0].length;
    
    if (!isInBounds(x, y) || isMine(hintField[i][j])) return;   
    hintField[x][y]++;
  };

  incrementCount(hintField, i - 1, j - 1);
  incrementCount(hintField, i - 1, j);
  incrementCount(hintField, i - 1, j + 1);
  incrementCount(hintField, i, j + 1);
  incrementCount(hintField, i, j - 1);
  incrementCount(hintField, i + 1, j - 1);
  incrementCount(hintField, i + 1, j);
  incrementCount(hintField, i + 1, j + 1);
};

const iterate2DArray = (mineFields, iterate) => {

  for (let i = 0; i < mineFields.length; i++){
    for(let j = 0; j < mineFields[0].length; j++)
    {
      iterate(i,j);
    }
  }
  
};

const getHintField = mineField => {
  const hintField = initializeHintField(mineField);

  iterate2DArray(mineField, (i, j) => {    
    if (mineField[i][j] === '*') {
      hintField[i][j] = '*';
    } else {
      hintField[i][j] = 0;
    }    
  });

  iterate2DArray(mineField, (i, j) => {
    if (mineField[i][j] === '*') {
      incrementAdjacentCounts(hintField, i, j);  
    } 
  });

  return hintField;
};

module.exports = {
  getHintField
};