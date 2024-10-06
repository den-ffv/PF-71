import { useEffect, useState } from "react";
import Title from "../components/Title.tsx";
import Note from "../components/Note.tsx";

export type NoteType = {
  id: number;
  title: string;
  content: string;
  autor_id: number;
  createdAt: Date;
  updatedAt: Date;
};

interface NotesData {
    count: number;
    notes: NoteType[];
  }
  

const Notes = () => {
  const [notes, setNotes] = useState<NotesData | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/note/list");
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <Title title={"Notes"} />
      {notes === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{notes.count} notes</p>
          <div style={{ marginTop: 100 }}>
            {notes.notes.map((note) => (
              <Note
                key={note.id}
                createdAt={new Date(note.createdAt)}
                title={note.title}
                content={note.content}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Notes;
