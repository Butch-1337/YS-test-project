import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DescrActions from '../actions/MovDescrActions'
import MovieItem from '../components/MovieItem'
import idToGenres from '../utils/idToGenre'
import AddToFavorite from '../components/AddToFavorite'

class MovDescr extends Component {

  constructor(){
    super()
  }

  componentWillReceiveProps(){
    const oldId = this.props.routeParams.id
    setTimeout(()=>{
      const { getDescr, getRecom } = this.props.DescrActions
      const id = this.props.routeParams.id
      if (id !== oldId) {
        getDescr(id)
        getRecom(id)
      }
    },10,oldId) 
  }

  componentDidMount(){
    const { getDescr, getRecom } = this.props.DescrActions
    const id = this.props.routeParams.id
    getDescr(id)
    getRecom(id)
  }

  render() {
    const { descr, recom } = this.props.descr
    const storedGenres = JSON.parse(sessionStorage.genres)
    const img = `https://image.tmdb.org/t/p/w185/${descr.poster_path}`
    return <section id = 'movDescr' className='container'>
            <div className='row mov-d'>
              <div className='col-md-3'>
                <div>
                  <img className='mov-d-img' id=''
                   src={descr.poster_path ? img : ''} />
                </div>
                <div className='mov-d-favor'>
                  <AddToFavorite class={'favor-descr'} data={descr}/>
                </div>
              </div>
              <div className='col-md-9'>
                <h2 className='mov-d-tit'>
                  {descr.title}
                </h2>
                <div className='mov-d-descr' id=''>
                  <div className='row mov-d-row'>
                    {descr.overview}
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Slogan</div>
                    <div className='col-md-9'>{descr.tagline}</div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Release date</div>
                    <div className='col-md-9'>{descr.release_date}</div>
                  </div>                  
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Genres</div>
                    <div className='col-md-9'>
                      { 
                        descr.genres ?
                        descr.genres.map(el => el.name).join(', ') :
                        ''
                      }
                    </div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Production countries</div>
                    <div className='col-md-9'>
                      { 
                        descr.production_countries ?
                        descr.production_countries
                        .map(el => el.name).join(', ') :
                        ''
                      }        
                    </div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Production companies</div>
                    <div className='col-md-9'>
                      { descr.production_companies ?
                        descr.production_companies
                        .map(el => el.name).join(', ') :
                        ''
                      }
                    </div>
                  </div>                                                      
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Home page</div>
                    <div className='col-md-9'>
                      <a href={descr.homepage}>{descr.homepage}</a>
                    </div>
                  </div>                                    
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Budget $</div>
                    <div className='col-md-9'>{descr.budget}</div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Revenue $</div>
                    <div className='col-md-9'>{descr.revenue}</div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Average vote (0-10)</div>
                    <div className='col-md-9'>{descr.vote_average}</div>
                  </div>
                  <div className='row mov-d-row'>
                    <div className='col-md-3'>Vote count</div>
                    <div className='col-md-9'>{descr.vote_count}</div>
                  </div>                                                      
                </div>

              </div>
            </div>
            <div className='row'>
              <h3 className='recom-h'> 
                { recom.length ?
                  'Recommended' :
                  ''
                }
              </h3>
              <div>
                { recom.length ?
                  recom.map(elem =>
                      <MovieItem
                          data={elem}
                          genres={idToGenres(elem.genre_ids,storedGenres)}
                          key={elem.id}
                      />
                  ) :
                  ''
                }
              </div>                                         
            </div>
          </section>

  }
}

function mapStateToProps(state) {
  return {
    descr: state.descr
  }
}

function mapDispatchToProps(dispatch) {
  return {
    DescrActions: bindActionCreators(DescrActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovDescr)
