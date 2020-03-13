import React, { Component } from 'react';
import './App.css';
import uuid from 'react-uuid';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddNewNoteForm from "./components/AddNewNoteForm/AddNewNoteForm";
import NoteItem from "./components/NoteItem/NoteItem";
import NotesList from "./components/NotesList/NotesList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                { id: new Date().getTime(), title: 'first note', text: 'some text for first note', category: 'work', date: new Date() },
                { id: new Date().getTime(), title: 'second note', text: 'some text for second note', category: 'education', date: new Date() }
            ],
            addNoteFormVisibility: false,
            currentFormData: {}
        };

        this.toggleAddNewNoteForm = this.toggleAddNewNoteForm.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.setCurrentFormData = this.setCurrentFormData.bind(this);
    }

    toggleAddNewNoteForm(e) {
        this.setState({
            addNoteFormVisibility: !this.state.addNoteFormVisibility,
            currentFormData: Object.assign({})
        })
    }

    addNewNote(date) {
        this.setState({
            notes: [...this.state.notes, {
                id: date.getTime(),
                title: this.state.currentFormData.title,
                text: this.state.currentFormData.text,
                date
            }]
        })
    }

    setCurrentFormData(currentFormData) {
        const currentFormDataClone = Object.assign({}, this.state.currentFormData, currentFormData);

        this.setState({
            currentFormData: currentFormDataClone
        })
    }

    render() {
        console.log(this.state.notes)
        return (
            <div className="app">
                <Header />
                <main className="app__main">
                    <Sidebar />
                    <div className="app__container">
                        <div className="add-note">
                            <button
                                type="button"
                                onClick={this.toggleAddNewNoteForm}
                            >
                                {this.state.addNoteFormVisibility ? 'Hide form' : 'Add new note'}
                            </button>
                            {this.state.addNoteFormVisibility ?
                                <AddNewNoteForm
                                    addNewNote={this.addNewNote}
                                    setCurrentFormData={this.setCurrentFormData}
                                />
                                : null
                            }
                        </div>
                        <NotesList notes={this.state.notes} />

                    </div>
                </main>
            </div>
        )
    }
}

export default App;
