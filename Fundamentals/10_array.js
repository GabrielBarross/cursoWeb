let thisArray = ["top1", "top2", "top3", "top4"]
console.log(thisArray[2])
console.log(thisArray[4])

thisArray[4] = "top5"
console.log(thisArray)

//SET VALUE TO A SPECIFIC INDEX ON THE ARRAY
thisArray[10] = "top10"
console.log(thisArray)

// VERIFY ARRAY LENGTH
console.log(thisArray.length)

// PUSH IS THE FUNCTION TO ADD MORE ITEM TO THE ARRAY
thisArray.push({ id: 3 }, false, true, "top", null)
console.log(thisArray)

// GET THE LAST ARRAY ITEM
console.log(thisArray.pop())

// DELETE THE CHOOSEN INDEX ITEM
delete thisArray[0]
console.log(thisArray)

console.log(typeof thisArray)

