import React, { Component } from 'react'
import PostForm from './post-form'
import PostsList from './posts-list'

class App extends Component {
  constructor () {
    super()

    this.state = {
      posts: [{user: 'Dude', text: 'Hi y\'all', upvotes: 0, downvotes: 0}],
      showPosts: true
    }
  }

  addPost = post => {
    this.setState({posts: this.state.posts.concat([post])})
  }

  toggleShowHide = () => {
    this.setState({showPosts: !this.state.showPosts})
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header mb-5">
            <h1>Project Reddit</h1>
          </div>

          <div className="posts">
          </div>

          { this.state.showPosts ? <PostsList posts={this.state.posts}/> : null }

          <PostForm showPosts={this.state.showPosts} addPost={this.addPost} toggleShowHide={this.toggleShowHide}/>

        </div>
      </div>
    );
  }
}

export default App;
