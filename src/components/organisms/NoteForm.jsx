import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Alert from '../atoms/Alert';
import { errorMessage } from '../../api/client';

export default function NoteForm({ initial = { title: '', content: '' }, onSubmit, submitLabel }) {
  const navigate = useNavigate();
  const [values, setValues] = useState(initial);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await onSubmit(values);
      navigate('/');
    } catch (err) {
      setError(errorMessage(err));
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stack">
      <Alert>{error}</Alert>
      <FormField id="title" label="Title" value={values.title} onChange={onChange} maxLength={120} required />
      <FormField id="content" as="textarea" rows={10} label="Content" value={values.content} onChange={onChange} />
      <div className="row">
        <Button type="submit" loading={saving}>
          {submitLabel}
        </Button>
        <Button type="button" variant="ghost" onClick={() => navigate('/')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
