import Input from '../atoms/Input';
import Textarea from '../atoms/Textarea';

export default function FormField({ label, id, as = 'input', ...props }) {
  const Control = as === 'textarea' ? Textarea : Input;
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <Control id={id} name={id} {...props} />
    </div>
  );
}
