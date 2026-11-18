export default function Input({ invalid = false, className = '', ...props }) {
  return <input className={`field ${invalid ? 'field-invalid' : ''} ${className}`} {...props} />;
}
