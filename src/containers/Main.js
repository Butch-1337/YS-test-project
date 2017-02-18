import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MovieItem from '../components/MovieItem'
import idToGenres from '../utils/idToGenre'
import classNames from 'classnames'
import * as MainActions from '../actions/MainActions'
import Search from '../components/Search'

class Main extends Component {

  componentDidMount() {
    this.props.MainActions.getMovies(1)
    this.props.MainActions.getGenres()
    setTimeout(()=>{
      const { genres } = this.props.main
      sessionStorage.setItem('genres', JSON.stringify(genres))
    },100)
  }

  handleNextPageClick(e) {
     e.preventDefault()
    const { page, movies } = this.props.main
    if (movies.length > 0) {
      this.props.MainActions.getMovies(page + 1)
    }
  }

  handlePrevPageClick(e) {
     e.preventDefault()
    const {page} = this.props.main;
    if (page > 1) {
      this.props.MainActions.getMovies(page - 1)
    }
  }

  render() {
    const { page, movies, genres, searched, fetching } = this.props.main
    const prevStyles = classNames('page-item', { disabled: page <= 1 })
    const nextStyles = classNames('page-item', { disabled: movies.length === 0 })
    return(
    <div className='page container'>
      <div className='row'>
        <nav className='ib pagination'>
          <ul className='pagination pagination-sm'>
            <li className={prevStyles}>
              <a className='page-link' href='#' onClick={this.handlePrevPageClick.bind(this)}>
                <span>Previous</span>
              </a>
            </li>
            <li className={nextStyles}>
              <a className='page-link' href='#' onClick={this.handleNextPageClick.bind(this)}>
                <span>Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className='ib pagenum'>
          <h3>page: {page}</h3>
          {
            fetching ?
            <p>Downloading...</p> :        
            <p>{movies.length} movies</p>
          }
        </div>
        <Search searched={searched} action={this.props.MainActions.search}/>
      </div>
			<div id=''>
            {
                movies.map(elem =>
                    <MovieItem
                        data={elem}
                        genres={idToGenres(elem.genre_ids,genres)}
                        key={elem.id}
                    />)
            }
      </div>
    </div>
	) 
  }
}

function mapStateToProps(state) {
  return {
    main: state.main
  }
}

function mapDispatchToProps(dispatch) {
  return {
    MainActions: bindActionCreators(MainActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);