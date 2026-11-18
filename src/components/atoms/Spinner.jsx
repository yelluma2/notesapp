export default function Spinner({ fullPage = false }) {
  return (
    <div className={fullPage ? 'spinner-page' : 'spinner-inline'} role="status" aria-label="Loading">
      <span className="spinner" />
    </div>
  );
}
