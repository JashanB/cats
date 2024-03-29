const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?
    console.log('bombay worked');
  });
  it('requires breed details for the Balinese breed', () => {
    console.log('balinese worked')
});
});
const bombay = breedDetails('Bombay');
const balinese = breedDetails('Balinese');
const expectedDesc1 = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
const expectedDesc2 =  "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";

assert.equal(expectedDesc1, bombay);
assert.equal(expectedDesc2, balinese);


