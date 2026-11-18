import NoteCard from '../molecules/NoteCard';
import EmptyState from '../molecules/EmptyState';

export default function NoteList({ notes, onDelete, deletingId }) {
  if (notes.length === 0) return <EmptyState />;
  return (
    <div className="note-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} deleting={deletingId === note.id} />
      ))}
    </div>
  );
}
