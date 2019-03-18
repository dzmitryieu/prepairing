/*
  OBJECTIVE: Given an input as a string, extract the values from it and map them accordingly
  TASKS:
    - Extract values from the string
    - Map values accordindly to the specifications
  CONSIDERATIONS:
    - The value separator could be different everytime
*/

/* Desired output
  {
    article1: DRAFT,
    article3: REVISION,
    article4: DRAFT,
    article6: READY
  } 
*/

// Simple query queryparser. However it was required to add code value mapper. Additional question was how to implement w/o "switch", the answer was to create dictionary object or use just array.
const template = {
  0: 'DRAFT',
  1: 'REVISION',
  2: 'READY',
}

const input = 'article1=0&article3=1&article4=0&article6=2';

function queryToObject (query, separator = '&') {
  return query.split(separator).reduce((acc, el) => {
    const [key, value] = el.split('=');
    return {...acc, [key]:template[value]}
  }, {})
}

const response = queryToObject(input);

console.log(response);