import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
                data : [
                {label: "Everything works fine", important: false, id:"kdnd"},
                {label: "But it can works better", important: false, id:"klddlknl"},
                {label: "Or not...", important: false, id:"lkdlkd"},
                {label: "Cool", important: true, id:"lkdlkdsdd"}]
        }
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id){
        console.log(id)
    }
    render(){
        return (
            <div className="app">
                 <AppHeader/>
                 <div className="search-panel d-flex">
                     <SearchPanel/>
                     <PostStatusFilter/>
                 </div>
                 <PostList posts={this.state.data}
                 onDelete={this.deleteItem}/>
                 <PostAddForm/>
            </div>
         )
    }
}

