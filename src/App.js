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
            addNoteFormVisibility: false,
            currentFormData: {
                title: '',
                text: ''
            },
            categories: [
                { id: 1584107751791, name: 'default', color: '#ffffff' },
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
        this.addNewCategory = this.addNewCategory.bind(this);
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

    addNewNote(date, category) {
        this.setState({
            notes: [...this.state.notes, {
                id: date.getTime(),
                title: this.state.currentFormData.title,
                text: this.state.currentFormData.text,
                category,
                date
            }],
            currentFormData: Object.assign({}, {
                title: '',
                text: ''
            }),
            addNoteFormVisibility: false
        })
    }

    setCurrentFormData(currentFormData) {
        const newCurrentFormData = Object.assign({}, this.state.currentFormData, currentFormData);

        this.setState({
            currentFormData: newCurrentFormData
        })
    }

    addNewCategory(category, color) {
        const newCategory = {
            id: new Date().getTime(),
            name: category,
            color
        };

        this.setState({
            categories: [...this.state.categories, newCategory]
        });
    }

    render() {
        return (
            <div className="app">
                <Header />
                <main className="app__main">
                    <Sidebar categories={this.state.categories} addNewCategory={this.addNewCategory} />
                    <div className="app__container">
                        <div className="add-note">
                            <button
                                type="button"
                                className={this.state.addNoteFormVisibility ? 'add-note-button opened' : 'add-note-button'}
                                onClick={this.toggleAddNewNoteForm}
                            >
                                {this.state.addNoteFormVisibility ? 'Hide form' : 'Add new note'}
                            </button>
                            {this.state.addNoteFormVisibility ?
                                <AddNewNoteForm
                                    addNewNote={this.addNewNote}
                                    setCurrentFormData={this.setCurrentFormData}
                                    currentFormData={this.state.currentFormData}
                                    categories={this.state.categories}
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
