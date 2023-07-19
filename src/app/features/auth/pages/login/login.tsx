import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { AuthForm } from '../../../../shared/ui/organisms/auth-form/auth-form';
import { useAuth, useRedirectWhenLoggedIn } from '../../../../shared/utils/auth';
import { routes } from '../../../../shared/utils/routes';
import { LoginSchema } from '../../models/login.model';

export function Login() {
  useRedirectWhenLoggedIn();

  const { auth, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  useEffect(() => {
    if (user.currentUser != null) {
      navigate(routes.home.path, { replace: true });
    }
  }, [user, navigate]);

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
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
