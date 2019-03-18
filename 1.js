/*
  OBJECTIVE: Consume a collection of data from an external API
  we need to transform the input into a desire format to use it and send it to the client.
  TASKS:
    - Transform/Format the content to fit the specified desired output
    - Filter the collection according to the given conditions
  CONSIDERATIONS:
    - We may have multiple endpoints consuming different APIs with different formats
    - Multiple filters may be applied in a single request
*/

/* Desired output
  {
    id, // required
    headline, // required
    image,
    createdAt // required
  } 
*/

// The core idea to map data and throw exceptions if mandatory field wasn't found 

const apiTemplate = {
  id: {
    name: '_id',
    required: true,
  },
  headline: {
    name: 'head',
    required: true,
  },
  image: {
    name: 'img',
    required: false,
  },
  createdAt: {
    name: 'created',
    required: true,
  } 
};

const dataAPI = [
  {
    '_id': '775498724',
    'head': '775498724',
    'img': {
      width: 1000,
    },
    'created': '775498724',
  },
  {
    '_id': '6753849638',
    'head': '775498724',
    'img': {
      width: 2000,
    },
    'created': '775498724',
  },
  {
    '_id': '685767564',
    'head': '775498724',
    'img': {
      width: 300,
    },
    'created': '775498724',
  },  
  {
    '_id': '2314678',
    'head': '775498724',
    'img': {
      width: 1000,
    },
    'created': '775498724',
  },  
  {
    '_id': '6786969',
    'head': '775498724',
    'img': '787',
    'created': '775498724',
  },  
  {
    '_id': '254242',
    'head': '775498724',
    'img': {
      width: 3000,
    },
    'created': '775498724',
  },  
];

const mapper = (elem, template) => {
  return Object.keys(template).reduce((acc, key) => {
    if (template[key].required && !elem[template[key].name]) {
      throw new Error(`${key} is required`);
    }
    return {...acc, [key]: elem[template[key].name]};
  }, {})
}

// apply filter when image.width > 1024 


function transform (data, template) {
  return data.map(el => mapper(el, template)).filter(item => item.image.width > 1024);
};

console.log(transform (dataAPI, apiTemplate));
// const response = transform(mapper(data)); // What if change the order of processing, transformer is the first, then mapper.


// What's the difference between p.cathch() and p.then(resolve, reject).catch()


// console.log(response);
