import Navbar from '../organisms/Navbar';

export default function AppLayout({ title, action, children }) {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="page-head">
          <h1>{title}</h1>
          {action}
        </div>
        {children}
      </main>
    </>
  );
}
