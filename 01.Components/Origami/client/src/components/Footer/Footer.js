import ListItem from '../ListItem/ListItem.js';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <ListItem>Going to 1</ListItem>
                <ListItem>Going to 2</ListItem>
                <ListItem>Going to 3</ListItem>
                <ListItem>Going to 4</ListItem>
                <ListItem>Going to 5</ListItem>
                <ListItem>Going to 6</ListItem>
                <ListItem>Going to 7</ListItem>
                <ListItem>Going to 8</ListItem>
                <ListItem>Going to 9</ListItem>
                <li className="listItem"><img src="/blue-origami-bird-flipped.png" alt="blue-left-origami-bird"></img></li>
            </ul>
            <p>Software University &copy; 2021</p>
        </footer>
    );
}

export default Footer;