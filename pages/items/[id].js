import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../Components/layout';
import EventDelegationList from '../../Components/EventDelegationList';

const Item = (props) => {
    const last = (useRouter().asPath).length-1
    const id = useRouter().asPath[last]
    console.log(props)
    return (
        <Layout>
            <p>Hi, id page</p>
        </Layout>
    );
};

export default Item;