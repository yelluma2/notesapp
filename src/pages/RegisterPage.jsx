import AuthLayout from '../components/templates/AuthLayout';
import AuthForm from '../components/organisms/AuthForm';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
