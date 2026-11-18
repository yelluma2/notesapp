import AuthLayout from '../components/templates/AuthLayout';
import AuthForm from '../components/organisms/AuthForm';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
