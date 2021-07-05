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
                {label: "Everything works fine", like: false, important: false, id: 1},
                {label: "But it can works better", like: false, important: false, id: 2},
                {label: "Or not...", important: false, like: false, id: 3},
                {label: "Cool", important: true, like: false, id: 4}],

                term: ""
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleIportant = this.onToggleIportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);

        this.maxId = 5;
    }

    searchPost(item, term){
        if (term.length === 0) {
            return item;           
        }

        return item.filter((item) => {
            return item.label.indexOf(term) > -1
        });
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
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
            return {
                data: newArr
            }
        })
    }

    onUpdateSearch(term){
        this.setState({term});
    }

    render(){
        const {data, term} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.searchPost(data, term);

        return (
            <div className="app">
                 <AppHeader
                 liked={liked}
                 allPosts={allPosts}/>
                 <div className="search-panel d-flex">
                     <SearchPanel 
                     onUpdateSearch={this.onUpdateSearch}/>
                     <PostStatusFilter/>
                 </div>
                 <PostList posts={visiblePosts}
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

