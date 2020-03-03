let compareToThis = function(param){
    console.log(this === param)
}

compareToThis(global)
const obj = {}
compareToThis = compareToThis.bind(obj)
compareToThis(global)
compareToThis(obj)

// USING ARROW FUNCTION --> IT IS NOT VARIABLE
compareToArrow = param => console.log(this === param)
compareToArrow(global)
compareToArrow(module.exports)
compareToArrow(this)

compareToArrow = compareToArrow.bind(obj) // ARROW FUNCTION IS STRONGER THAN THE BIND FUNCTION
compareToArrow(obj)
