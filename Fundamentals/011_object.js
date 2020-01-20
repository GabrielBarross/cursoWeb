let thisObject = {
    name: 'Hidetaka Miyazaki',
    age: '46',
    soulsGames: ['Dark Souls', 'Bloodborne', 'Dark Souls 3', 'Sekiro'],
    games: {
        number: 12,
        darkSouls: {
            releaseDate: 22 / 09 / 2011
        }
    }
}
thisObject.studio = "From Software"
thisObject.soulsGames[4] = "Deraciné"
console.log(thisObject)

//THIS IS A JSON FORMAT, IT'S NOT THE SAME AS AN OBJECT
'{"nome": "top", "preco": 79.90}'
