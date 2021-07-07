<div>
{this.state.movies.map(movie => <div>
    <p>Title = {movie.title}</p>
    <p>Description = {movie.description}</p>
    <p>Adult movie = {movie.adult ? "Oui" : "Non"}</p>
    <img src={movie.image} />
    <p>Note = {movie.note}</p>
    <p>Number of votes so far = {movie.voteCount}</p>
    <p>Genre(s) = {movie.genre.map(genre => genre.name).join(", ")}</p>
    <p>Author(s) = {movie.author.map(author => author.name).join(", ")}</p>
    <p>Actor(s) = {movie.actor.map(actor => actor.name).join(", ")}</p>
    <p>Support = {movie.adress.map(adress => adress.type).join(", ")}</p>
    <p>Name = {movie.adress.map(adress => adress.typeName).join(", ")}</p>
    <p>Where to find = {movie.adress.map(adress => adress.adress).join(", ")}</p>
    <p>Original Language = {movie.originalLanguage.map(originalLanguage => originalLanguage.name)}</p>
</div>)}

</div>



// {
//     "originalLanguage": [
//         {
//             "name": ""
//         }
//     ],
//     "actor": [
//         {
//             "name": ""
//         },
//         {
//             "name": ""
//         },
//         {
//             "name": ""
//         }
//     ],
//     "author": [
//         {
//             "name": ""
//         }
//     ],
//     "adress": [
//         {
//             "typeName": "",
//             "adress": ""
//         }
//     ],
//     "genre": [
//         {
//             "name": ""
//         }
//     ],
//     "title": "",
//     "description": "",
//     "image": "",
//     "releaseDate": "",
//     "note": 3.9,
//     "voteCount": 12544,
//     "adult": false
// }