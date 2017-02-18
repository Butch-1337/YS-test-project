import React from 'react'
import { Link } from 'react-router'
import AddToFavorite from './AddToFavorite'

class MovieItem extends React.Component {

    render() {
        const item = this.props.data;
        const genres = this.props.genres;
        const img = `https://image.tmdb.org/t/p/w154/${item.poster_path}`
        
        return (
            <div className='col-md-3'>
                <div className='mov' id=''>
                    <div>
                        <Link
                            className='mov-a-img'
                            to={'/movie/' + item.id}>
                            <img className='mov-img' alt='poster'
                             src={item.poster_path  ? img : ''}
                            />
                        </Link>
                        <AddToFavorite class={'favorite'} data={item}/>
                              
                    </div>
                    <div>
                        <Link className='mov-tit' to={'/movie/'+ item.id}>
                          {item.title} 
                        </Link>
                    </div>
                    <div className='mov-cat'>
                        { genres ?
                          genres.join(', ') :
                          ''
                        }
                    </div>
                </div>
            </div>
            
        );
    }
}

export default MovieItem;