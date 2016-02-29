import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

export default class App extends React.Component {

    state = {
        notes: [
            {
                id: uuid.v4(),
                task: 'Learn Webpack #1'
            },
            {
                id: uuid.v4(),
                task: 'Learn React #2'
            },
            {
                id: uuid.v4(),
                task: 'Do laundry #3'
            }
        ]
    }

    render() {
        // const notes = this.state.notes;
        return (
            <div>
                <button onClick={this.addNoteFatArrow}>+ Fat Arrow</button>
                <button onClick={this.addNoteClassic.bind(this)}>+ Classic</button>
                <button onClick={this.clearNotes}>x</button>
                <Note name="boucherie notes"/>
                <ul>
                    {this.state.notes.map(note =>
                        <li key={note.id}>{note.task} yo</li>
                    )}
                </ul>
            </div>
        );
    }

    // hot reload OK
    addNoteClassic() {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'note-simple-v2 ' + new Date()
            }])
        });
    }

    // hot reload FAIL
    addNoteFatArrow = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'note-fat-arrow-v2 ' + new Date()
            }])
        });
    }

    clearNotes = () => {
        this.setState({notes: []});
    }

}