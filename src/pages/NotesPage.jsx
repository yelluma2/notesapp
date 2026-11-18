import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../components/templates/AppLayout';
import NoteList from '../components/organisms/NoteList';
import Spinner from '../components/atoms/Spinner';
import Alert from '../components/atoms/Alert';
import { getNotes, deleteNote } from '../api/notes';
import { errorMessage } from '../api/client';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (note) => {
    if (!window.confirm(`Delete "${note.title}"? This can't be undone.`)) return;
    setDeletingId(note.id);
    try {
      await deleteNote(note.id);
      setNotes((prev) => prev.filter((n) => n.id !== note.id));
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <AppLayout
      title="Your notes"
      action={
        <Link className="btn btn-primary" to="/notes/new">
          New note
        </Link>
      }
    >
      <Alert>{error}</Alert>
      {loading ? <Spinner /> : <NoteList notes={notes} onDelete={handleDelete} deletingId={deletingId} />}
    </AppLayout>
  );
}
