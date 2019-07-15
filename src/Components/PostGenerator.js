import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import '../CSS/components/PostGenerator.css';

const PostComponent = ({title, body, key}) => (
  <div className={'post'}>
    <li key={key}>
      <h2 className={"post-title"}>{title}</h2>
      <p className={"post-body"}>{body}</p>
    </li>
    <button className={"post-comment-btn"}>Comment</button>
    <button className={"post-like-btn"}>Like</button>
  </div>
);

class PostGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.generatePost = this.generatePost.bind(this);
  }
  generatePost() {
    let randomIndex = Math.floor(Math.random() * 100);
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomIndex}`)
      .then(res => res.json())
      .then(data => this.setState({posts: [...this.state.posts, data]}))
      .catch(err => console.log(err));


  }
  render() {
    return (
      <div className={"post-generator"}>
        <div className={"post-creator"}>
          <button className={"generate-btn"} onClick={this.generatePost}>Add Post</button>
          <hr className="splitter"/>
        </div>
          <ul className={"posts"}>
          {this.state.posts.map(i => (
            <PostComponent title={i.title} body={i.body} key={i.id}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostGenerator;