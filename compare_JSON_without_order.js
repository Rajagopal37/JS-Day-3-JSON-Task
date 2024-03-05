function compareJSON() {

    let obj1 = { name:"Person 1", age: 5 };
    let obj2 = { age:5, name:"Person 1" };
    
    if ( Object.keys(obj1).length !== Object.keys(obj2).length ) {
        return false ; }
        else {
          console.log ( "Both object have equal length "  )
          }
      
    for (var key in obj1) {
      if ( !obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
        return false ;
        }
        else {
          console.log("Same key and Value ")}
      }
      return true
    }
    
    let result = compareJSON();
    
    console.log(`Properties of both Object : ${result}`);