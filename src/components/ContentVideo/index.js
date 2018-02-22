import './index.css';

import { fetchData, POSTS_URL } from './../../helpers';
import React, { Component } from 'react';
import VideoLoader from './../VideoLoader'
import LinkListThumbs from './../LinkListThumbs'
import LinkListButtons from './../LinkListButtons'

class ContentVideo extends Component {
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

    if (this.props.match !== undefined){
      this.setState({
        id: this.props.match.params.id
      })
    }
  }

  render(){
    return(
      <div className='ContentVideo'>
        {this.state.posts &&
        <VideoLoader poster={this.state.posts[this.state.id].thumbnail} src={this.state.posts[this.state.id].mp4} />
        }

        {this.state.posts &&
        <div className='description'>
          <h5>Description</h5>
          <div>{this.state.posts[this.state.id].description}</div>
        </div>}

        {this.state.posts &&
        <LinkListButtons
          className='inline'
          title='Categories'
          categories={this.state.posts[this.state.id].categories}
        />}

        {this.state.posts &&
        <LinkListThumbs
          title='Related Videos'
          posts={this.state.posts}
        />}

      </div>
    )
  }
}





export default ContentVideo;
