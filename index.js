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
  const incrementCount = (hintField, i, j) => {
    const isMine = val => val === '*';
    const isInBounds = (i, j) => i >= 0 && i < hintField.length && j >= 0 && j < hintField[0].length;
    
    if (!isInBounds(i, j) || isMine(hintField[i][j])) return;   
    hintField[i][j]++;
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

const iterate2DArray = (mineFields, iterateFn) => {

  for (let i = 0; i < mineFields.length; i++){
    for(let j = 0; j < mineFields[0].length; j++)
    {
      iterateFn(i,j);
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