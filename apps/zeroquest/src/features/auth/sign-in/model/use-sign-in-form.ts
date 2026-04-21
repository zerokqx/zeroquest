import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthControllerPassword } from '@/shared/api/orval/base-api/auth/auth';
import { PolicyType } from '@/shared/api/orval/base-api/base-api.schemas';
import { getAuthErrorMessage } from '@/features/auth/shared/get-auth-error-message';
import { useGetActualPolicy } from '@/entites/policy/api/get-actual-policy';

interface UseSignInFormParams {
  onSuccess?: () => void;
}

interface SignInFormValues {
  login: string;
  password: string;
  privacyAccepted: boolean;
}

export const useSignInForm = ({ onSuccess }: UseSignInFormParams = {}) => {
  const [submitError, setSubmitError] = useState('');
  const { data: actualPrivacyPolicy, isLoading: isPolicyLoading } = useGetActualPolicy(
    PolicyType.PRIVACY,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: {
      login: '',
      password: '',
      privacyAccepted: false,
    },
  });

  const { mutateAsync, isPending } = useAuthControllerPassword();

  const onSubmit = async (values: SignInFormValues) => {
    setSubmitError('');

    const policyVersion = actualPrivacyPolicy?.version;
    if (!policyVersion) {
      setSubmitError('Не удалось получить актуальную версию политики');
      return;
    }

    try {
      await mutateAsync({
        data: {
          login: values.login.trim(),
          password: values.password,
          policy: [
            {
              type: PolicyType.PRIVACY,
              version: policyVersion,
            },
          ],
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
    isPolicyLoading,
  };
};
