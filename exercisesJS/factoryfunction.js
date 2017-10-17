var films = []
// /**
//  * @function addFilm 
//  * @param {string} name 
//  * @param {string} director 
//  * @param {number} released 
//  */


function createFilm(name, director, released){
    var film = {
        name: name, 
        director: director, 
        released: released
    }
    return film
}


films.push(createFilm('Finding Nemo', 'Andrew Stanton and Lee Unkrich', 2003))
films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

function forEachElem(arr, func){ 
    for (var i = 0; i < arr.length; i++){ 
        func(arr[i]) 
}

function logDirector(film){ 
    console.log(film.director) 
}

//factory function easy to create objects when we already know the keys

}
forEachElem(films, function(film) {
    console.log(film.released) 
})