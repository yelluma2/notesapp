export default function AuthLayout({ children }) {
  return (
    <main className="auth-layout">
      <div className="auth-brand">
        <span className="brand">Notebook</span>
        <p>Keep your notes in one place, available wherever you log in.</p>
      </div>
      <section className="auth-panel">{children}</section>
    </main>
  );
}
