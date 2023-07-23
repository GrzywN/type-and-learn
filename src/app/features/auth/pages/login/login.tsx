import { useAuth, useRedirectWhenLoggedIn } from '@auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthForm } from '@ui/organisms/auth-form/auth-form';
import { routes } from '@utils';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginSchema, loginSchema } from '../../models/login.model';

export function Login() {
  useRedirectWhenLoggedIn();

  const { auth, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (user.currentUser != null) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user, navigate]);

  const onSubmit = async (data: LoginSchema) => {
    setIsLoading(true);
    await auth.login(data.email, data.password);
    setIsLoading(false);
    navigate(routes.home.path);
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthForm.Title>Sign in to Your Account</AuthForm.Title>
      <AuthForm.EmailField {...register('email', { required: true })} />
      <AuthForm.PasswordField {...register('password', { required: true })} />
      <AuthForm.SubmitButton loading={isLoading}>Login</AuthForm.SubmitButton>
      <AuthForm.Anchor
        hintText="Don't have an account? "
        anchorText="Register"
        onClick={(event) => {
          event.preventDefault();
          navigate(routes.register.path);
        }}
      />
    </AuthForm>
  );
}

export default Login;
