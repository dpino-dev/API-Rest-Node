const { Router } = require("express");
const router = Router();
const _ = require('underscore')


const movies = require('../routes/example.json')

router.get('/', (req, resp) => {
    resp.json(movies);
})

router.post('/', (req, resp) => {
    const { title, director, year, rating } = (req.body);
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovies = { id, ...movies }
        movies.push(newMovies);
        resp.json(movies);
    }else{
        resp.status(500).json({error: 'There was an error'})
    }
    
})

router.put('/:id',(req,resp)=>{
    const {id}= req.params;
    const { title, director, year, rating } = (req.body);
    if (title && director && year && rating) {

        _.each(movies,(movie, index)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        })
        resp.json(movies)
    }else{
        resp.status(500).json({error: 'There was an error'})
    }
    
    
})

router.delete('/:id',(req,resp)=>{
    const {id}= req.params;
    _.each(movies,(movie, index)=>{
        if(movie.id == id){
            movies.splice(index,1)
        }
    })
    resp.json(movies)
})

module.exports = router;