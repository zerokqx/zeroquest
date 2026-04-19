import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthControllerRegister } from '@/shared/api/orval/base-api/auth/auth';
import { RegisterDto } from '@/shared/api/orval/base-api/base-api.schemas';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';

type SignUpValues = RegisterDto & { confirmPassword: string };

interface UseSignUpFormParams {
  onSuccess?: () => void;
}

export const useSignUpForm = ({ onSuccess }: UseSignUpFormParams = {}) => {
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpValues>({
    defaultValues: {
      login: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { mutateAsync, isPending } = useAuthControllerRegister();

  const onSubmit = async (values: SignUpValues) => {
    setSubmitError('');

    try {
      await mutateAsync({
        data: {
          login: values.login.trim(),
          password: values.password,
        },
      });

      onSuccess?.();
    } catch (error) {
      setSubmitError(getAuthErrorMessage(error));
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    getValues,
    errors,
    submitError,
    isPending,
  };
};
