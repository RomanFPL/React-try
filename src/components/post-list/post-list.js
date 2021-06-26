import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
    return (
        <ul className = "app-list list-group">
            <PostListItem label="Everything works fine" important />
            <PostListItem label="But it can works better" />
            <PostListItem label="Or not" />
        </ul>
    )
}

export default PostList;