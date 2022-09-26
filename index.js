function receivesAFunction(callback){
    return callback();
  }
  let returnsANamedFunction = function() {
    return function namedFunction(){
    }
  }
  let returnsAnAnonymousFunction = function() {
    return function(){
    }
}