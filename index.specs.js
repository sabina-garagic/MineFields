const expect =  require('expect.js');
const mineFields = require('./index.js');

const input = [
   ['*', '.', '.'],
   ['.', '*', '.'],
   ['.', '.', '.'],
   ['.', '.', '.']
];

const result = [
   ['*', 2, 1],
   [2, '*', 1],
   [1, 1, 1],
   [0, 0, 0]
];

const getRows = array => array.length;
const getCols = array => array[0].length;

describe('Mine fields', () => { 
  describe('#getHintField', () => {
    it('should return hint field of same dimensions as mine field', () => {
      const hintField = mineFields.getHintField(input);
      const hintFieldRows = getRows(hintField);
      const hintFieldCols = getCols(hintField);
      const inputFieldRows = getRows(input);
      const inputFieldCols = getCols(input);
      expect(hintFieldRows).to.eql(inputFieldRows);
      expect(hintFieldCols).to.eql(inputFieldCols);          
    });

    it('should return hint field with mines at the same positions', () => {
      const hintField = mineFields.getHintField(input);
      expect(hintField[0][0]).to.eql(input[0][0]);
      expect(hintField[0][1]).not.to.eql('*');
      expect(hintField[1][1]).to.eql(input[1][1]);
    });
  });
});