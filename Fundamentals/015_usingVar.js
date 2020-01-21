// VAR HAS ONLY TO SCOPES, GLOBAL OR FUNCTION SCOPE
{
    {
        {
            var topmeistre = "monk"
            {
                var whatIf = "what If???"
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
console.log(local)

