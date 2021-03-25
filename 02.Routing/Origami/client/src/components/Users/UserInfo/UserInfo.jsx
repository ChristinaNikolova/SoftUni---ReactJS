import './UserInfo.css';

function UserInfo() {
    return (
        <div>
            <img src="/user-profile-pic.jpg" alt="user-profile-pic"></img>
            <div className="personal-info">
                <p>
                    <span>Email:</span>
                    chrisi@gmail.com
                </p>
                <p>
                    <span>Posts:</span>
                    3
                </p>
            </div>
        </div>
    );
}

export default UserInfo;