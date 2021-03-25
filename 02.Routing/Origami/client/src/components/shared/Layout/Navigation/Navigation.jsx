import ListItem from '../../ListItem/ListItem.jsx';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation" style={{ position: 'fixed' }}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white-right-origami-bird"></img></li>
                <ListItem to='/'>Home</ListItem>
                <ListItem to='/create-post'>Post</ListItem>
                <ListItem to='/register'>Register</ListItem>
                <ListItem to='/login'>Login</ListItem>
                <ListItem to='/profile'>Profile</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
            </ul>
        </nav>
    );
}

export default Navigation;