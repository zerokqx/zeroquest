import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthControllerPassword } from '@/shared/api/orval/base-api/auth/auth';
import { LoginDto } from '@/shared/api/orval/base-api/base-api.schemas';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';

interface UseSignInFormParams {
  onSuccess?: () => void;
}

export const useSignInForm = ({ onSuccess }: UseSignInFormParams = {}) => {
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const { mutateAsync, isPending } = useAuthControllerPassword();

  const onSubmit = async (values: LoginDto) => {
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
    errors,
    submitError,
    isPending,
  };
};
