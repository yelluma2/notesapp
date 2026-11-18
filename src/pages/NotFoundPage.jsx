import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <p className="muted">The page you're looking for doesn't exist or was moved.</p>
      <Link className="btn btn-primary" to="/">
        Back to your notes
      </Link>
    </main>
  );
}
