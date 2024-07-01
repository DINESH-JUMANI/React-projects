import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Github.css';

function Github() {
    const data = useLoaderData();
    return (
        <div className='github-container'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub avatar" className='github-avatar' />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DINESH-JUMANI');
    return response.json();
}
