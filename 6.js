console.log(typeof func1);
console.log(typeof func2);
console.log(typeof func3);
console.log(typeof func4);

function func1() {
  console.log('Hello');
}

func3 = function func2() {
  console.log('World');
};

(function func4() {
  console.log('ABC');
})();

//function
//undefined
//undefined
//undefined
//ABC

