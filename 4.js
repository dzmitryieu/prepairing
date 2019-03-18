// ------------------------------------
/*

Example input:
  'a1.b2.article1=0&a2.article2=1&c3.article3=0&article6-abc=2';

Example output:
  {
    article1: 'DRAFT',
    article2: 'REVISION',
    article3: 'DRAFT',
    article6: 'READY'
  }
*/
const query = 'a1.b2.article1=0&a2.article2=1&c3.article3=0&article6-abc=2';

const template = {
  0: 'DRAFT',
  1: 'REVISION',
  2: 'READY'
}


function queryToObject(query) {
  return query.split('&').reduce((acc, el) => {
    let [key, value] = el.split('=');
    key = key.match(/article[0-9]/);
    return {...acc, [key]: template[value]}
  }, {})
}

console.log(queryToObject(query));
