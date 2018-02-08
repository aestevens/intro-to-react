import React, {Component} from 'react'

class Post extends Component {

  constructor(props) {
    super(props)

    this.state = {
      upvotes: this.props.post.upvotes,
      downvotes: this.props.post.downvotes
    }
  }

  incrementUpvotes = () => {
    this.setState({upvotes: this.state.upvotes += 1});
  }

  incrementDownvotes = () => {
    this.setState({downvotes: this.state.downvotes += 1});
  }

  render() {
    return (
      <li className='mb-2'>
        <span><strong>User:</strong> {this.props.post.user} <strong>Message:</strong> {this.props.post.text}</span>
        <p>
          <button onClick={this.incrementUpvotes} type='button' className='btn btn-outline-success btn-sm mr-2'><span role='img'>&#x1f44d; {this.state.upvotes}</span></button>
          <button onClick={this.incrementDownvotes} type='button' className='btn btn-outline-danger btn-sm'><span role='img'>&#x1f44e; {this.state.downvotes}</span></button>
        </p>
      </li>
    )
  }

}

export default Post
