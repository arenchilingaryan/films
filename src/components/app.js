import React, { Component } from 'react'
import './app.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { addData, addLikedFilm, addSearch, deleteLikedFilms } from './actions'

const API_KEY = "2c3845db"

class App extends Component {

    dataResult = async (event) => {
        event.preventDefault()
        let searchValue = document.getElementById('search')
        try {
            const response = await axios
                .get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue.value}`);

            if (response.data.Response === "False") {
                console.log('GNIDA')
            } else {
                this.props.onAddData(response.data.Search)
                this.props.onAddSearch(searchValue.value)
            }
            searchValue.value = ''
        } catch (e) {
            console.log(e)
        }
    }

    render() {

        const renderItems = this.props.searchData.map(i => {
            return (
                <li className="flexItems" key={i.imdbID}>
                    <img src={i.Poster} alt="sorry bro" />
                    <span>
                        <p><strong>{i.Title}</strong></p>
                        <p>TYPE: {i.Type}</p>
                        <p>YEAR: {i.Year}</p>
                        <button
                         className="btn btn-danger"
                          id={i.imdbID}
                           onClick={() => this.props.onAddLiked(i.Title)}>On Like</button>
                    </span>
                </li>
            )
        })

        const renderLikedFilms = this.props.onLike.map((i, idx) => {
            return (
                <li key={idx} className="removeItem">
                    <span> {i} </span>
                    <button
                     className="btn btn-dark"
                      id={idx}
                       onClick={() => this.props.deleteLikedFilm(idx)}> Remove </button>
                </li>
            )
        })

        const renderSearchValues = this.props.search.map(i => {
            return (
                <li key={i}>
                    <h2> {i} </h2>
                </li>
            )
        })
        return (
            <div>
                <form className="form" onSubmit={this.dataResult}>
                    <input id="search" className="form-control" />
                    <input type="button"
                        value="search"
                        className="btn btn-primary"
                        onClick={this.dataResult} />
                </form>
                <div className="container" >
                    <div className="films-block">
                        <h2>Result List</h2>
                        <ul>
                            {renderItems}
                        </ul>
                    </div>
                    <div className="like" >
                        <h3>Was liked</h3>
                        <ul id="likedList">
                            {renderLikedFilms}
                        </ul>
                    </div>
                    <div className="search-history" >
                        <h3>Search History</h3>
                        <ul>{renderSearchValues}</ul>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        searchData: state.addDataReducer.searchData,
        onLike: state.onLikeReducer.onLike,
        search: state.onSearchReducer.search
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onAddData: dataState => dispatch(addData(dataState)),
        onAddLiked: likeItem => dispatch(addLikedFilm(likeItem)),
        onAddSearch: searchItem => dispatch(addSearch(searchItem)),
        deleteLikedFilm: filmId => dispatch(deleteLikedFilms(filmId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

