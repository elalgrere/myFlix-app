const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

const app = express();

mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));




let users = [
    {
      name: 'Isabel',
      favmovie: ['The girl with the Pearl Earring']
    },
    {
      name: 'Jonathan',
      favmovie: []
    },
    {
      name: 'Paul',
      famovie: ['Caravaggio']
    }
  ];

  let movies = [
    {
      "Title": "The Girl with a Pearl Earring",
      "Summary":"A young peasant maid working in the house of painter Johannes Vermeer becomes his talented assistant and the model for one of his most famous works.",

      "Genre": {
      "Name":("Biography","Drama","Romance")
    },

      "Director": {
        "Name":"Peter Webber",
        "Bio":"Webber estrenó su primer cortometraje, The Zebra Man, sobre la vida del artista friki Horace Ridler, protagonizad por Minnie Driver. En 2012 regresó a la gran pantalla con el drama bélico Emperor, con Tommy Lee Jones como protagonista. En 2016 dirigió la miniserie Tutankhamun, protagonizada por Sam Neill. En 2018 se trasladó a Bogotá, Colombia, para rodar la película Pickpockets. El director ya había visitado Colombia en 2009 para filmar el documental The Sand and the Rain sobre la tribu amazónica Macuna. En 2019 inició el rodaje de una película de suspenso titulada Fremason para Lionsgate.",
        "Birth": 1968
    },
        "imageURl":"https://www.google.com/search?q=Peter+Webber&sxsrf=ALiCzsbH3y2fQ0qkbccGy-0rm4QUs3SwPg:1662127610542&source=lnms&tbm=isch&sa=X&ved=2ahUKEwifubDuo_b5AhV1XfEDHd9zBbEQ_AUoAXoECAIQAw&biw=1280&bih=623&dpr=2#imgrc=IXH_9oF5l5DJbM",
        "Featured": false
    },

    {
      "Title":"Caravaggio",
      "Summary":"The tumultuous and adventurous life of Michelangelo Merisi, controversial artist, called by Fate to become the immortal Caravaggio. A violent genius that will dare to defy the ideal vision of the world imposed by the Renaissance painters. A provoker that scandalized patrons and institutions, raising the altars the outcast figures he knew so well: drunkards, vagrants and prostitutes.",

      "Genre": {
        "Name":("Biography","History")
    },

    "Director": {
        "Name":"Angelo Longoni",
        "Bio":"Ciccio Longoni played mostly as left winger, but sometimes also operated on the right side. Longoni was small and stocky player, very fast and astute but technically not on high level. Often irresistible with good pace and sudden wriggles, he was very dangerous. Ciccio had strong shot even two-footed, also knew to send good cross from the wing. Longoni grew up in Lecco footballing team in their city, was bought by AC Milan just 17 years, the society in which, however, had no way to shine. Its explosion occurred with the transfer of Atalanta, which competed with the signing almost 200 games 38 goals, managing to earn a call-up, increases in boys and made his debut for Milan in Serie A to 19 years but was too minute to play with the famous Gre-No-Li and was sent to the province. So it was that in 20 years arrives Atalanta and stayed there for 7 years before moving to Lazio. He played a game for the national team alongside Boniperti, Muccinelli and Montuori. The game in question was that of 9 December 1956 against Austria, in which he scored two goals in the victory (2-1), although this exploit was never called into the senior national team. The game in question was that of 9 December 1956 against Austria, in which he scored two goals in the victory despite this exploit was never called into the senior national team. After seven seasons with the jacket of neroazzurri was sold to Lazio, afterwards moved to Vis Pesaro in the first series, then C, concluding his career in Serie B in the ranks of Lecco. He was later a coach in Series C and Series D, training among others on Lecco, Croton, the Giulianova and Marsala. Angelo Longoni died in 1993",
        "Birthd": 1933
    },
        "imageURL":"https://www.google.com/search?q=angelo+Longoni&sxsrf=ALiCzsZhPLr-z92VsqrcsUELvBJHeLa-VQ:1662127927177&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiO-62Fpfb5AhW4VfEDHZ0hAJcQ_AUoAXoECAIQAw&biw=1280&bih=623&dpr=2#imgrc=3StM72hrlI1sIM",
        "Featured": false
    },

    {
      "Title":"Goya's Ghost",
      "Summary":"Goya's Ghosts is a 2006 biographical drama film, directed by Miloš Forman (his final directorial feature before his death in 2018), and written by him and Jean-Claude Carrière. The film stars Javier Bardem, Natalie Portman and Stellan Skarsgård, and was filmed on location in Spain during late 2005. The film was written, produced, and performed in English although it is a Spanish production. Although the historical setting of the film is authentic, the story about Goya trying to defend a model is fictional, as are the characters Brother Lorenzo and the Bilbatúa family.",

      "Genre": {
        "Name":("Biography","Drama","History")
    },

      "Director": {
        "Name":"Miloš Forman",
        "Bio":"Jan Tomáš Miloš Forman was a Czech and American film director, screenwriter, actor, and professor who rose to fame in his native Czechoslovakia before emigrating to the United States in 1968. Forman was an important figure in the Czechoslovak New Wave. Film scholars and Czechoslovak authorities saw his 1967 film The Firemen's Ball as a biting satire on Eastern European Communism. The film was initially shown in theatres in his home country in the more reformist atmosphere of the Prague Spring. However, it was later banned by the Communist government after the invasion by the Warsaw Pact countries in 1968.[3] Forman was subsequently forced to leave Czechoslovakia for the United States, where he continued making films, gaining wider critical and financial success. In 1975, he directed One Flew Over the Cuckoo's Nest (1975) starring Jack Nicholson as a patient in a mental institution. The film received widespread acclaim, and was the second in history to win all five major Academy Awards: Best Picture, Director, Screenplay, Actor in Leading Role, and Actress in Leading Role. In 1978, he directed the anti-war musical Hair which premiered at the 1979 Cannes Film Festival. In 1981, he directed the turn of the century drama film, Ragtime, which was known for its large ensemble cast. The film went on to receive eight Academy Award nominations. His next feature was a period biographical film, Amadeus (1984), based on the life of famed classical musician Wolfgang Amadeus Mozart starring Tom Hulce, and F. Murray Abraham. The film was both a critical and financial success earning eleven nominations with eight wins including for Best Picture, and another win for Forman as Best Director. In 1996, Forman received another Academy Award nomination for Best Director for The People vs. Larry Flynt (1996). Throughout Forman's career he won two Academy Awards, three Golden Globe Awards, Grand Prix at the Cannes Film Festival, Golden Bear at the Berlin Film Festival, a British Academy Film Award, a César Award, David di Donatello Award, and the Czech Lion.[4]",
        "Birth": 1968
      },
        "imageURl":"https://www.google.com/search?q=Peter+Webber&sxsrf=ALiCzsbH3y2fQ0qkbccGy-0rm4QUs3SwPg:1662127610542&source=lnms&tbm=isch&sa=X&ved=2ahUKEwifubDuo_b5AhV1XfEDHd9zBbEQ_AUoAXoECAIQAw&biw=1280&bih=623&dpr=2#imgrc=IXH_9oF5l5DJbM",
        "Featured": false
    },

];

//CREATE 
//users

app.post('/users', (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + 'already exists');
      } else {
        Users
          .create({
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
            Birthday: req.body.Birthday
          })
          .then((user) =>{res.status(201).json(user) })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
        })
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});
//users favorite movie

app.post('/users/:id/:movieTitle', (req,res) =>{
  const {id, movieTitle} = req.params;
  const updatedUser = req.body;
  let user = users.find (user => user.id == id);
if (user){
    user.favoriteMovies.push(movieTitle);
    res.sattus(200).send(`$(movieTitle) has been added to user ${id}'s array`);;
} else{
    res.status(400).send ('no such user')
}
})

//READ
// Get all users
app.get('/users', (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// Get a user by username
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

//Get all movies
app.get('/movies', function (req, res) {
  Movies.find()
    .then(function (movies) {
      res.status(201).json(movies);
    })
    .catch(function (err) {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

// Get movies by title
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ Title: req.params.Title })
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get genre information

app.get('/movies/genre/:name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ "Genre.Name": req.params.name })
    .then((movies) => {
      res.json(movies.Genre);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err)
    });
});
//Get director information

app.get("/movies/directors/:name", passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ "Director.Name": req.params.name })
    .then((movies) => {
      res.json(movies.Director);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});





//UPDATE

//Update user information

app.put('/users/:Username',
  [
    check('Username', 'Username is required').isLength({ min: 5 }),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not appear to be valid').isEmail(),
  ],
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let hashPassword = Users.hashPassword(req.body.Password);
    Users.findOneAndUpdate(
      { Username: req.params.Username },
      {
        $set: {
          Username: req.body.Username,
          Password: hashPassword,
          Email: req.body.Email,
          Birthday: req.body.Birthday,
        },
      },
      { new: true }, //This line makes sure that the updated document is returned
      (err, updateUser) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error:' + err);
        } else {
          res.json(updateUser);
        }
      }
    );
  }
);
// Add a movie to a user's list of favorites
app.post('/users/:Username/movies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $push: { favoriteMovies: req.params.MovieID }
  },
    { new: true }, // This line makes sure that the updated document is returned
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

// Delete a user by username
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});




  app.listen(8080,() => console.log('listen on 8080'))

