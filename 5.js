// -----------------------------------
// What is the output for this.
var p1 = new Promise((resolve, reject) => resolve());

setTimeout(function(){
  console.log("timeout");
}, 0);                              

p1.then(function(value){
  console.log("resolved");
});                                 

setImmediate(function(){
  console.log("immediate");
});                                 

process.nextTick(() => {
  console.log('tick');
});    

//tick
//resolved
//timeout
//immediate
