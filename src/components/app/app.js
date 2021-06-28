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
                {label: "Everything works fine", important: false, id: 1},
                {label: "But it can works better", important: false, id: 2},
                {label: "Or not...", important: false, id: 3},
                {label: "Cool", important: true, id: 4}]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleIportant = this.onToggleIportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);

        this.maxId = 5;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const before = data.slice(0,index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after]

            return {
                data: newArr
            }
        });
    }

    addItem(body){
       const newItem = {
           label: body, 
           important: false,
           id: this.maxId++
       }
       this.setState(({data}) => {
           const newArr = [...data, newItem];
           return{
               data: newArr
           }
       })
    }

    onToggleIportant(id){
        console.log(`Important ${id}`);
    }

    onToggleLike(like){
        console.log(`Like ${like}`);
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
                 onDelete={this.deleteItem}
                 onToggleIportant={this.onToggleIportant}
                 onToggleLike={this.onToggleLike}
                 />
                 <PostAddForm
                 onAdd={this.addItem}/>
            </div>
         )
    }
}

