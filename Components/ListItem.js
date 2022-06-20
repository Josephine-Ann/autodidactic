import React from 'react';
import Link from 'next/link';

const ListItem = (props) => {
    return (
        <li key={props.id} className="bubbled-item">{props.name}</li>
    );
};

export default ListItem;