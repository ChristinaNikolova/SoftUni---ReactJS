import './ListItem.css';

function ListItem({children}) {
    return (
        <li className="listItem">
            <a href="#">{children}</a>
        </li>
    );
}

export default ListItem;