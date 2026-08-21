import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

function Login() {
  return (
    <AuthLayout width="md">
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;