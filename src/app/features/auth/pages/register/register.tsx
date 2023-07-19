import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { z } from 'zod';

import { AuthForm } from '../../../../shared/ui/organisms/auth-form/auth-form';
import { useAuth, useRedirectWhenLoggedIn } from '../../../../shared/utils/auth';
import { routes } from '../../../../shared/utils/routes';
import { RegisterSchema } from '../../models/register.model';

export function Register() {
  useRedirectWhenLoggedIn();

  const { auth } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setIsLoading(true);
    await auth.register(data.email, data.password, data.username);
    setIsLoading(false);
    navigate(routes.home.path);
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)}>
      <AuthForm.Title>Sign up for an Account</AuthForm.Title>
      <AuthForm.UsernameField {...register('username', { required: true })} />
      <AuthForm.EmailField {...register('email', { required: true })} />
      <AuthForm.PasswordField {...register('password', { required: true })} isPasswordNew />
      <AuthForm.SubmitButton loading={isLoading}>Register</AuthForm.SubmitButton>
      <AuthForm.Anchor
        hintText="Already have an account? "
        anchorText="Log in"
        onClick={(event) => {
          event.preventDefault();
          navigate(routes.login.path);
        }}
      />
    </AuthForm>
  );
}

export default Register;
