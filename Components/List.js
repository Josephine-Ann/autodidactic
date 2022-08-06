import React from 'react';
import ListItem from './ListItem';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

const List = () => {
    const subjects = [
        {
          name: `Event Delegation`,
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
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.usersList)
    const {loading, error, users} = usersList
    useEffect(() => {
        dispatch(getUsers()) 
      }, [dispatch])
    return (
      <>
      <ul>
            {
                subjects.map(sub => {
                   return <ListItem {...sub}/>
                })
            }
        </ul>
        <ul>
        {loading ? "Loading..." : error ? error.message : users.map(u => <li>{u.name}</li>)}
        </ul>
      </>

    );
};

export default List;