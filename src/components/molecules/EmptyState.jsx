import { Link } from 'react-router-dom';

export default function EmptyState() {
  return (
    <div className="empty">
      <h2>No notes yet</h2>
      <p>Write your first note and it will show up here.</p>
      <Link className="btn btn-primary" to="/notes/new">
        New note
      </Link>
    </div>
  );
}
