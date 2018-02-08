import React, { Component } from 'react';

class PostForm extends Component {
  constructor () {
    super()

    this.state = {
      user: '',
      text: '',
      showHideText: 'Hide Posts'
    }
  }

  handleClick = () => {
    if (this.state.user === '') {
      return false
    }
    const post = {
        user: this.state.user,
        text: this.state.text,
        upvotes: 0,
        downvotes: 0
      }
    console.log('About to add a post')
    this.props.addPost(post)
  }

  handleShowHideClick = () => {
    this.state.showHideText === 'Hide Posts' ? this.setState({showHideText: 'Show Posts'}) : this.setState({showHideText: 'Hide Posts'})
    this.props.toggleShowHide()
  }


  render() {
    return (
      <form className="beer-form">
        <h3>Add a New Post</h3>

        <div className="form-group">
          <input value={this.state.text} onChange={ event => this.setState({text: event.target.value})} type="text" id="post-text" className="form-control" placeholder="Post Text">
          </input>

          <br/>

          <input value={this.state.user} onChange={ event => this.setState({user: event.target.value})} type="text" id="post-user" className="form-control" placeholder="Your Name">
          </input>
        </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary mr-2">Post</button>
        <button onClick={this.handleShowHideClick} type="button" className="btn btn-info">{this.state.showHideText}</button>
      </form>
    );
  }
}

export default PostForm;
