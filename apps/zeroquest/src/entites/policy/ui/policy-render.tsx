import { PolicyType } from '@/shared/api/orval/base-api/base-api.schemas';
import { useGetActualPolicy } from '../api';
import { Alert, Center, Group, Loader, Stack, Text, Title } from '@mantine/core';
import { Ban } from 'lucide-react';
import { ErrorCatSvg } from '@/shared/ui/svg-cat/error-cat';
interface PolicyRenderProps {
  type: PolicyType;
}
export const PolicyRender = ({ type }: PolicyRenderProps) => {
  const { data: policy, isLoading, isError } = useGetActualPolicy(type);

  if (isLoading) {
    return (
      <Center py="xl">
        <Loader size="sm" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Alert color="red" title="Не удалось загрузить документ">
        <Stack gap="xs">
          <Text size="sm">Попробуйте обновить страницу позже.</Text>
          <Group justify="center">
            <div style={{ width: 160, opacity: 0.9 }}>
              <ErrorCatSvg />
            </div>
          </Group>
        </Stack>
      </Alert>
    );
  }

  if (!policy?.content) {
    return (
      <Alert icon={<Ban size={14} />} color="gray" title="Документ не найден">
        Для выбранного типа документа пока нет опубликованной версии.
      </Alert>
    );
  }

  return (
    <Stack gap="md" align="center">
      <Title order={3}>{policy.type}</Title>
      <Text c="dimmed" size="sm">
        Версия: {policy.version}
      </Text>
      <Text>
        {policy.content}
      </Text>
    </Stack>
  );
};
