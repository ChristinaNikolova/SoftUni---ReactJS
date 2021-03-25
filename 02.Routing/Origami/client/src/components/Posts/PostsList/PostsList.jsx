import { Component } from 'react';
import * as postsService from '../../../services/postsService.js';
import Post from '../Post/Post.jsx';
import './PostsList.css';

class PostsList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postsService
            .getAll(this.props.limit)
            .then(posts => this.setState({ posts }));
    }

    render() {
        return (
            <div className="posts">
                {this
                    .state
                    .posts
                    .map(p => <Post key={p.id} content={p.content} author={p.author} />)}
            </div>
        );
    }
}

export default PostsList;