// VAR HAS ONLY TO SCOPES, GLOBAL OR FUNCTION SCOPE
{
    {
        {
            var topmeistre = "monk"
            {
                var whatIf = "what if???"
                console.log(topmeistre)
            }
        }
    }
}
console.log(whatIf)

function test() {
    var local = 123
    console.log(local)
}

test()


// VAR SCOPE
var number = 1
{
    var number = 2
    console.log('dentro= ' + number)
}
console.log('fora= ' + number)
