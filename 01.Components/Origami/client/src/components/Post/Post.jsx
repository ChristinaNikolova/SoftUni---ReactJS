import './Post.css';

function Post({content, author}) {
    return (
        <div className="post">
            <img src="/blue-origami-bird.png" alt="blue-right-origami-bird"></img>
            <p className="description">{content}</p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    );
}

export default Post;