import PostsList from '../../Posts/PostsList/PostsList.jsx';
import UserInfo from '../UserInfo/UserInfo.jsx';

import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <UserInfo />
            <div>
                <h2>3 of your recent posts</h2>
                <PostsList limit={3} />
            </div>
        </div>
    );
}

export default Profile;