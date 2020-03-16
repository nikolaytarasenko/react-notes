import React, { Component } from 'react';
import './App.css';

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AddNewNoteForm from "./components/AddNewNoteForm/AddNewNoteForm";
import NotesList from "./components/NotesList/NotesList";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                { id: new Date().getTime(), title: 'first note', text: 'some text for first note', category: 'work', date: new Date() },
                { id: new Date().getTime(), title: 'second note', text: 'some text for second note', category: 'education', date: new Date() }
            ],
            addNoteFormVisibility: true,
            currentFormData: {
                title: '',
                text: ''
            },
            categories: [
                { id: 1584107751792, name: 'work', color: '#de5454' },
                { id: 1584107751793, name: 'education', color: '#4ec568' },
                { id: 1584107751794, name: 'personal', color: '#217ede' },
                { id: 1584107751795, name: 'books', color: '#b36b2d' },
                { id: 1584107751796, name: 'sport', color: '#b578f7' }
            ]
        };

        this.toggleAddNewNoteForm = this.toggleAddNewNoteForm.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.setCurrentFormData = this.setCurrentFormData.bind(this);
    }

    toggleAddNewNoteForm() {
        this.setState({
            addNoteFormVisibility: !this.state.addNoteFormVisibility,
            currentFormData: Object.assign({}, {
                title: '',
                text: ''
            })
        })
    }

    addNewNote(date) {
        this.setState({
            notes: [...this.state.notes, {
                id: date.getTime(),
                title: this.state.currentFormData.title,
                text: this.state.currentFormData.text,
                date
            }],
            currentFormData: Object.assign({}, {
                title: '',
                text: ''
            })
        })
    }

    setCurrentFormData(currentFormData) {
        const newCurrentFormData = Object.assign({}, this.state.currentFormData, currentFormData);

        this.setState({
            currentFormData: newCurrentFormData
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main className="app__main">
                    <Sidebar categories={this.state.categories} />
                    <div className="app__container">
                        <div className="add-note">
                            <button
                                type="button"
                                className="add-note-button"
                                onClick={this.toggleAddNewNoteForm}
                            >
                                {this.state.addNoteFormVisibility ? 'Hide form' : 'Add new note'}
                            </button>
                            {this.state.addNoteFormVisibility ?
                                <AddNewNoteForm
                                    addNewNote={this.addNewNote}
                                    setCurrentFormData={this.setCurrentFormData}
                                    currentFormData={this.state.currentFormData}
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
