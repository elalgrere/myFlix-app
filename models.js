const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

let movieSchema = mongoose.Schema({
    Title: {type: String, rquired: true},
    Description: {Type: String, requiered: true},
    Genre: {
        Name: String,
        Description: String
},
Director: {
    Name: String,
    Bio: String
},
Actors: [String],
ImagePath: String,
Featured: Boolean
});
let userSchema= mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, reuired: true},
    Birthday: Date,
    FavoriteMovies: [{type: mongoose.Schema.types.ObjectID, ref: 'Movie'}]
});

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);
module.exports.Movie = Movie;
module.exports.User = User;


