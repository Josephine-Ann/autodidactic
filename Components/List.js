import React from 'react';
import ListItem from './ListItem';
import { useState } from 'react';

const List = () => {
    const subjects = [
        {
        name: `The 'this' Keyword`,
        id: 1
        }, 
        {
          name: `JS Prototypal Inheritance`,
          id: 2
        }, 
        {
          name: `Null and undefined`,
          id: 3
        }, 
        {
          name: `Closures`,
          id: 4
        }, 
    ]
    const bubble = e => setOrigin(e.target.innerHTML)
  const [origin, setOrigin] = useState('')
    return (
      <>
      <h1 className={origin ? "block" : "hidden"}>You clicked on "{origin}", and it bubbled up to its parent!</h1>
              <ul onClick={e => {bubble(e)}} id="list-to-bubble">
            {
                subjects.map(sub => {
                   return <ListItem {...sub} key={sub.id}/>
                })
            }
        </ul>
      </>

    );
};

export default List;