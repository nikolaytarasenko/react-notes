import React, { Component } from 'react';
import './App.css';
import uuid from 'react-uuid';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddNewNoteForm from "./components/AddNewNoteForm/AddNewNoteForm";
import NoteItem from "./components/NoteItem/NoteItem";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                { id: new Date().getTime(), title: 'first note', text: 'some text for first note', category: 'work', date: new Date() },
                { id: new Date().getTime(), title: 'second note', text: 'some text for second note', category: 'education', date: new Date() }
            ]
        }
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main className="app__main">
                    <Sidebar />
                    <div className="app__container">
                        {this.state.notes.map(note => {
                            return (
                                <NoteItem key={uuid()} {...note} />
                            )
                        })}
                        <AddNewNoteForm />
                    </div>
                </main>
            </div>
        )
    }
}

export default App;
