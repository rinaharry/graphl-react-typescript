import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import Movie from './componenet/Movie'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import EditMovie from './componenet/EditMovie'

let url = "";
   if (window.location.origin==='http://localhost:3000') {
      url = 'http://localhost:4000/graphql'  
   } else {
      url = '/graphql'
   }
  const client = new ApolloClient({
    uri: url
  });

function App() {
  return (
  
    <ApolloProvider client={client}>
        <BrowserRouter>
         <Movie/>
          <div>
            <Switch>
              <Route path='/:id' exact  component ={EditMovie} />
            </Switch>
          </div>
       </BrowserRouter>
    </ApolloProvider>
  
 
  );
}

export default App;
