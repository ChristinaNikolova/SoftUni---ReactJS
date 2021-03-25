import CreatePost from '../CreatePost/CreatePost.jsx';
import PostsList from '../PostsList/PostsList.jsx';

import './SharePost.css';

function SharePost() {
    return (
        <div className="sharePost">
            <CreatePost />
            <div>
                <h2>Last 3 posts on your wall</h2>
                <PostsList limit={3} />
            </div>
        </div>
    );
}

export default SharePost;