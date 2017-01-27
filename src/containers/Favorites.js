import React, { Component } from 'react'
import MovieItem from '../components/MovieItem'
import idToGenres from '../utils/idToGenre'

class Favorites extends Component {

  render() {
    const storedGenres = JSON.parse(sessionStorage.genres)
    const favoritesArr = []
    for (let i = 0; i < localStorage.length; i++) {
        let item = localStorage.key(i);
        favoritesArr.push(JSON.parse(localStorage.getItem(item)))
    }


    return <section className='container'>
             <h2>Favorite movies</h2>
            <div id=''>
                {   favoritesArr.length ?
                    favoritesArr.map(elem => {
                      return (
                        <MovieItem
                            data={elem}
                            genres={
                              elem.genre_ids ?
                              idToGenres(elem.genre_ids,storedGenres) :
                              elem.genres.map(el => el.name)
                            }
                            key={elem.id}
                        />
                      )
                    }) :
                    <span>There is no favorites yet. Add some movies to favorites.</span>
                }
            </div>
           </section>
  }
}

export default Favorites
