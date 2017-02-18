import React from 'react';
import { Link } from 'react-router'

class Search extends React.Component {

    componentDidMount(){
      let ul = document.querySelector('#search-ul')
      ul.classList.add('hide')
    }

    handleSearch(e) {
      e.preventDefault()
      const ul = e.target.parentNode.nextSibling
      ul.classList.remove('hide')
      if (e.target.value.length > 0) {
        this.props.action(e.target.value)
      }
    }

    handleBlur(e) {
      const ul = e.target.parentNode.nextSibling
      setTimeout(()=>{ul.classList.add('hide')},500)
    }

    handleSubmit(e) {
      e.preventDefault()
    }
    render() {

        return (
        <div className='ib search'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-inline'>
              <label className='sr-only' htmlFor='srch'>Search</label>
              <input onChange={this.handleSearch.bind(this)}
               onBlur={this.handleBlur.bind(this)}
               type='text' 
               className='search-text search-show'
               id='srch' placeholder='Search' />
            </div>
            <ul id='search-ul' className='search-res'>
              {
                this.props.searched.map(elem => 
                <li key={elem.id} className='search-item'>
                    <Link to={'/movie/' + elem.id}>
                      {elem.title}
                    </Link>  
                </li>)
              }
            </ul>
          </form>
        </div>
        );
    }
}

export default Search;