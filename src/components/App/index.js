import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import {fetchData, POSTS_URL} from "../../helpers";
import ContentVideo from './../ContentVideo'
import CategoryLinkList from './../CategoryLinkList'
import Thumbnails from '../ResultsPage'

// import logo from './../../images/logo.svg';
import './index.css';

class App extends Component {
  state = {
    posts:undefined
  }

  componentDidMount (){

    fetchData(POSTS_URL)
    .then(res => {
      this.setState({
        posts: res.data.posts
      })
    })
  }

  render() {

    return (
      <BrowserRouter>
      <div className="App">
        <nav className="main-menu">
          <h1 className="logo" onClick={()=>{
            window.location = '/';
          }}> </h1>
        </nav>
        <div className='content'>
          <Route exact path="/" render={() =>
            <Redirect to="/all/"/>}
          />
          <Route exact path="/:category" render={props =>
            <Thumbnails {...props}
              posts={this.state.posts}
            />}
          />
          <Route path="/:category/:id" component={ContentVideo}/>
          <div className='Sidebar'>
            {this.state.posts &&
            <CategoryLinkList
              title='Categories'
              posts={this.state.posts}/>
            }
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
