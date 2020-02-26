function onlyHighGrades(grade){
    if(grade >= 7){
        console.log("Approved")
    }
    else{
        console.log("Not Approved")
    }
}

onlyHighGrades(9)
onlyHighGrades(5)

function ifTrueITalk(value){
    if(value){
        console.log("It's true that ..." + value)
    }
}

ifTrueITalk() /* FALSE */
ifTrueITalk("") /* FALSE */
ifTrueITalk(0) /* FALSE */
ifTrueITalk(NaN) /* FALSE */
ifTrueITalk(null) /* FALSE */
ifTrueITalk(-1) /* FALSE */
ifTrueITalk(" ") /* TRUE */
ifTrueITalk([]) /* TRUE */
ifTrueITalk({}) /* TRUE */
ifTrueITalk("Hi") /* TRUE */
ifTrueITalk([1,2,3]) /* TRUE */

function testOne(num){
    if(num > 7)
        console.log(num)
        console.log("Final")
}

testOne(3)
testOne(8)