import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    const data = [
        {label: "Everything works fine", important: false, id:"kdnd"},
        {label: "But it can works better", important: false, id:"klddlknl"},
        {label: "Or not...", important: false, id:"lkdlkd"},
        {label: "Cool", important: true, id:"lkdlkdsdd"}
    ];

    return (
       <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}
            onDelete={id => console.log(id)}/>
            <PostAddForm/>
       </div>
    )
}

export default App;