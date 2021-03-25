import { Link } from 'react-router-dom';

import './ListItem.css';

function ListItem({ children, to }) {
    return (
        <li className="listItem">
            <Link to={to}>{children}</Link>
        </li>
    );
}

export default ListItem;