import React from 'react'
import {getMovieDetail} from './queryMovie'
import { graphql } from "react-apollo";

function EditMovie(props) {

    if(props.data.loading) return "loading"
    if (props.data.error)  return'error'
      const data = props.data.movie
      const movie =  <p > {data.title}-{data.id}</p>
    
    return (
        <div>
            {movie}
        </div>
       )
  }


export default graphql(getMovieDetail, {

    options: (props) => {
        return {
            variables: {
                id: parseInt(props.match.params.id)
            }
        }
    }
    
}) (EditMovie)
