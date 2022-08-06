import React from 'react';
import Link from 'next/link';

const ListItem = (props) => {
    return (
            <li key={props.id} className="bubbled-item"><Link href={`/items/${props.id}`}><a>{props.name}</a></Link></li>
    );
};

export default ListItem;