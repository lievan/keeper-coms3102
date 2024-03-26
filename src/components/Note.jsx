import React from "react";

function Note(props) {
  function deleteNote() {
    props.onDelete(props.noteKey);
  }
  console.log(props);
  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button class="note-button" onClick={deleteNote} type="submit">
        DELETE
      </button>
    </div>
  );
}

export default Note;
