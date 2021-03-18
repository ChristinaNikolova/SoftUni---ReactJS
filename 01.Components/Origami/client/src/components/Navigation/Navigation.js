import ListItem from '../ListItem/ListItem';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation" style={{position: 'fixed'}}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white-right-origami-bird"></img></li>
                <ListItem>Going to 1</ListItem>
                <ListItem>Going to 2</ListItem>
                <ListItem>Going to 3</ListItem>
                <ListItem>Going to 4</ListItem>
                <ListItem>Going to 5</ListItem>
                <ListItem>Going to 6</ListItem>
                <ListItem>Going to 7</ListItem>
                <ListItem>Going to 8</ListItem>
                <ListItem>Going to 9</ListItem>
            </ul>
        </nav>
    );
}

export default Navigation;