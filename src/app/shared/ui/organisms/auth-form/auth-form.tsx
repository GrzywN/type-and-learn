import {
  Anchor as MantineAnchor,
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  Checkbox as MantineCheckbox,
  CheckboxProps as MantineCheckboxProps,
  Paper as MantinePaper,
  PasswordInput as MantinePasswordInput,
  Text as MantineText,
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
  Title as MantineTitle,
  TitleProps as MantineTitleProps,
} from '@mantine/core';
import { forwardRef } from 'react';

import { useStyles } from './auth-form.styles';

export interface AuthFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function AuthForm(props: AuthFormProps) {
  const { children, ...passThroughProps } = props;
  const { classes } = useStyles();

  return (
    <form className={classes.wrapper} autoComplete="on" {...passThroughProps}>
      <MantinePaper className={classes.form} radius={0} p={30}>
        {children}
      </MantinePaper>
    </form>
  );
}

type TitleProps = MantineTitleProps;

function Title(props: TitleProps) {
  const { ...passThroughProps } = props;
  const { classes } = useStyles();

  return (
    <MantineTitle order={2} className={classes.title} ta="center" mt="md" mb={50} {...passThroughProps} />
  );
}

type UsernameFieldProps = MantineTextInputProps;

const UsernameField = forwardRef<HTMLInputElement, UsernameFieldProps>((props, ref) => {
  const { ...passThroughProps } = props;

  return (
    <MantineTextInput
      label="Username"
      placeholder="janedoe007"
      size="md"
      autoComplete="username"
      ref={ref}
      {...passThroughProps}
    />
  );
});

type EmailFieldProps = MantineTextInputProps;

const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>((props, ref) => {
  const { ...passThroughProps } = props;

  return (
    <MantineTextInput
      label="Email address"
      placeholder="hello@gmail.com"
      mt="sm"
      size="md"
      autoComplete="email"
      ref={ref}
      {...passThroughProps}
    />
  );
});

type PasswordFieldProps = MantineTextInputProps & {
  isPasswordNew?: boolean;
};

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>((props, ref) => {
  const { isPasswordNew = false, ...passThroughProps } = props;

  return (
    <MantinePasswordInput
      label="Password"
      placeholder="Your password"
      mt="sm"
      size="md"
      autoComplete={isPasswordNew ? 'new-password' : 'current-password'}
      ref={ref}
      {...passThroughProps}
    />
  );
});

type RememberMeFieldProps = MantineCheckboxProps;

const RememberMeField = forwardRef<HTMLInputElement, RememberMeFieldProps>((props, ref) => {
  const { ...passThroughProps } = props;

  return <MantineCheckbox label="Keep me logged in" mt="xl" size="md" ref={ref} {...passThroughProps} />;
});

type SubmitButtonProps = MantineButtonProps;

function SubmitButton(props: SubmitButtonProps) {
  const { ...passThroughProps } = props;

  return <MantineButton type="submit" fullWidth mt="xl" size="md" {...passThroughProps} />;
}

interface AnchorProps {
  hintText: string;
  anchorText: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

function Anchor(props: AnchorProps) {
  const { hintText, anchorText, onClick } = props;

  return (
    <MantineText ta="center" mt="md">
      {hintText}
      <MantineAnchor<'a'> href="#" weight={700} onClick={onClick}>
        {anchorText}
      </MantineAnchor>
    </MantineText>
  );
}

AuthForm.Title = Title;
AuthForm.UsernameField = UsernameField;
AuthForm.EmailField = EmailField;
AuthForm.PasswordField = PasswordField;
AuthForm.RememberMeField = RememberMeField;
AuthForm.SubmitButton = SubmitButton;
AuthForm.Anchor = Anchor;

export default AuthForm;
