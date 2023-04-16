import React, { useEffect, useState } from "react";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { draftToHtml } from "draftjs-to-html";

function Note() {
  const note = {
    id: "9999",
    content: "<p>This is new note</p>",
  };
  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });

  const [rawHTML, setRawHTML] = useState(note.content);

  useEffect(() => {
    const blocksFromHtml = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHtml.contentBlocks,
      blocksFromHtml.entityMap
    );

    setEditorState(EditorState.createWithContent(state));
  }, [note.content]);

  useEffect(() => {
    setRawHTML(note.content);
  }, [note.content]);

  const handleOnChange = (e) => {
    setEditorState(e);
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())));
  };

  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={handleOnChange}
      placeholder="Write something!"
    />
  );
}

export default Note;
