import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/templates/AppLayout';
import NoteForm from '../components/organisms/NoteForm';
import Spinner from '../components/atoms/Spinner';
import Alert from '../components/atoms/Alert';
import { createNote, getNote, updateNote } from '../api/notes';
import { errorMessage } from '../api/client';

export default function NoteEditorPage() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isEdit) return;
    getNote(id)
      .then(setNote)
      .catch((err) => setError(errorMessage(err)))
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  return (
    <AppLayout title={isEdit ? 'Edit note' : 'New note'}>
      <div className="editor">
        <Alert>{error}</Alert>
        {loading && <Spinner />}
        {!loading && !error && (
          <NoteForm
            initial={note ? { title: note.title, content: note.content } : undefined}
            submitLabel={isEdit ? 'Save changes' : 'Create note'}
            onSubmit={(values) => (isEdit ? updateNote(id, values) : createNote(values))}
          />
        )}
      </div>
    </AppLayout>
  );
}
