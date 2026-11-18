import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { errorMessage } from '../../api/client';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import Alert from '../atoms/Alert';

export default function AuthForm({ mode }) {
  const isRegister = mode === 'register';
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      if (isRegister) await register(values);
      else await login({ email: values.email, password: values.password });
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (err) {
      setError(errorMessage(err));
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="stack">
      <h1>{isRegister ? 'Create your account' : 'Log in'}</h1>
      <Alert>{error}</Alert>

      {isRegister && (
        <FormField id="name" label="Name" value={values.name} onChange={onChange} autoComplete="name" required />
      )}
      <FormField id="email" type="email" label="Email" value={values.email} onChange={onChange} autoComplete="email" required />
      <FormField
        id="password"
        type="password"
        label="Password"
        value={values.password}
        onChange={onChange}
        autoComplete={isRegister ? 'new-password' : 'current-password'}
        minLength={6}
        required
      />

      <Button type="submit" loading={submitting}>
        {isRegister ? 'Create account' : 'Log in'}
      </Button>

      <p className="muted center">
        {isRegister ? (
          <>Already have an account? <Link to="/login">Log in</Link></>
        ) : (
          <>New here? <Link to="/register">Create an account</Link></>
        )}
      </p>
    </form>
  );
}
