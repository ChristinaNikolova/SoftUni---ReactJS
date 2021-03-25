import ListItem from '../../ListItem/ListItem.jsx';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <ListItem to='/'>Home</ListItem>
                <ListItem to='/create-post'>Post</ListItem>
                <ListItem to='/register'>Register</ListItem>
                <ListItem to='/login'>Login</ListItem>
                <ListItem to='/profile'>Profile</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
                <li className="listItem"><img src="/blue-origami-bird-flipped.png" alt="blue-left-origami-bird"></img></li>
            </ul>
            <p>Software University &copy; 2021</p>
        </footer>
    );
}

export default Footer;