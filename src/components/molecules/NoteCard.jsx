import { Link } from 'react-router-dom';
import Button from '../atoms/Button';

const fmt = (iso) =>
  new Date(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });

export default function NoteCard({ note, onDelete, deleting }) {
  return (
    <article className="note-card">
      <h3>{note.title}</h3>
      <p className="note-body">{note.content || 'No content'}</p>
      <footer>
        <time dateTime={note.updatedAt}>Edited {fmt(note.updatedAt)}</time>
        <div className="note-actions">
          <Link className="btn btn-ghost" to={`/notes/${note.id}/edit`}>
            Edit
          </Link>
          <Button variant="danger-ghost" loading={deleting} onClick={() => onDelete(note)}>
            Delete
          </Button>
        </div>
      </footer>
    </article>
  );
}
