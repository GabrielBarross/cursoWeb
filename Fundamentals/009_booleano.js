let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)
console.log(!!isActive)

// TRUE VALUES
console.log(!!3)
console.log(!!-1)
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

// FALSE VALUES
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

// IF YOU HAVE ONE CONDITION THAT RETURNS TRUE, THEN THE OPERATION WILL RETURN TRUE ("EPA")
console.log(!!('' || null || 0 || "epa"))
