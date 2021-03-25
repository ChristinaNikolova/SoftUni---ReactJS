import ListItem from '../../ListItem/ListItem.jsx';
import './Aside.css';

function Aside() {
    return (
        <aside className="aside">
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
                <ListItem to='/'>#######</ListItem>
                <ListItem to='/'>#######</ListItem>
            </ul>
        </aside>
    );
}

export default Aside;