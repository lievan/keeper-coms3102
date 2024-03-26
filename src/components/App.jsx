import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App(props) {
  const [noteTitle, setNoteTitle] = React.useState("");
  const [noteContent, setNoteContent] = React.useState("");
  const [_, setDeletedNote] = React.useState("");

  function handleChangeNote(event) {
    setNoteContent(event.target.value);
  }
  function handleChangeTitle(event) {
    console.log(event.target.value);
    setNoteTitle(event.target.value);
  }
  function addNote(event) {
    var key = notes.length + 1;
    console.log(noteTitle);
    console.log(noteContent);
    notes.push({
      key: key,
      title: noteTitle,
      content: noteContent,
    });
    setNoteTitle("");
    setNoteContent("");
    event.preventDefault();
  }

  function onDelete(key) {
    setDeletedNote(key);
    notes.map((note) => {
      if (note.key === key) {
        notes.splice(notes.indexOf(note), 1);
      }
    });
    event.preventDefault();
  }

  function createNote(note) {
    return (
      <Note
        noteKey={note.key}
        title={note.title}
        content={note.content}
        onDelete={onDelete}
      />
    );
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={addNote} className="note">
        <input onChange={handleChangeTitle} type="text" placeholder="Title" />
        <input
          onChange={handleChangeNote}
          type="text"
          placeholder="Take a note..."
        />
        <button onClick={addNote} type="submit">
          Add
        </button>
      </form>
      <div>{notes.map(createNote)}</div>
      <Footer />
    </div>
  );
}

export default App;
