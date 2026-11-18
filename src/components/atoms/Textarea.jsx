export default function Textarea({ className = '', ...props }) {
  return <textarea className={`field ${className}`} {...props} />;
}
