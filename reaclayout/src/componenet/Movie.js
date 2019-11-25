import React from 'react'
import {getMovie } from './queryMovie'
import { graphql } from "react-apollo";
import {  NavLink} from 'react-router-dom'


function Movie(props) {
    //console.log(location.pathname())
   const getMovieList = (user) => {
     // console.log( user)
   }

    if(props.data.loading) return "loading"
    if (props.data.error)  return'error'
      const data = props.data.movies
      const movie = data.map((movie,i) => {
        return <li key = {i} onClick={() => getMovieList(movie)}> <NavLink to = {`/${movie.id}`}>{movie.title}-{movie.id} </NavLink></li>
     })
     return (
        <div>
            <ul>
              {
                movie
              }
            </ul>
        </div>
    )
}

export default  graphql (getMovie)(Movie)