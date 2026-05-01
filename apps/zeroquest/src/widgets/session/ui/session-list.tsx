import {
  Session,
  useGetAllSessions,
  useGetCurrentSession,
  useRemoveSession,
} from '@/entites/session';
import {
  Alert,
  Paper,
  Skeleton,
  Stack,
  Text,
  rem,
} from '@mantine/core';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';

export const SessionList = (props: Stack.Props) => {
  const [removingSessionId, setRemovingSessionId] = useState<string | null>(
    null,
  );
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const {
    data: sessions,
    isLoading: isSessionsLoading,
    isError: isSessionsError,
  } = useGetAllSessions();
  const { data: currentSession, isError: isCurrentSessionError } =
    useGetCurrentSession();
  const { mutateAsync: removeSession } = useRemoveSession();

  const handleDeleteSession = async (sessionId: string) => {
    const ok = window.confirm('Удалить эту сессию?');
    if (!ok) return;

    try {
      setDeleteError(null);
      setRemovingSessionId(sessionId);
      await removeSession({ id: sessionId });
    } catch {
      setDeleteError('Не удалось удалить сессию. Попробуйте позже.');
    } finally {
      setRemovingSessionId(null);
    }
  };

  if (isSessionsLoading) {
    return (
      <Stack
        gap="sm"
        {...props}
        style={{
          minHeight: 0,
          overflowY: 'auto',
          paddingRight: rem(2),
          ...props.style,
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Paper withBorder radius="md" p="md" key={index}>
            <Stack gap="sm">
              <Skeleton h={16} w="38%" />
              <Skeleton h={12} w="26%" />
              <Skeleton h={12} w="90%" />
              <Skeleton h={12} w="82%" />
            </Stack>
          </Paper>
        ))}
      </Stack>
    );
  }

  if (isSessionsError) {
    return (
      <Alert color="red" title="Не удалось загрузить сессии" icon={<AlertCircle size={16} />}>
        Попробуйте обновить страницу или повторить позже.
      </Alert>
    );
  }

  if (!sessions || sessions.length === 0) {
    return (
      <Alert color="gray" title="Сессии не найдены">
        Сейчас у вас нет активных сессий.
      </Alert>
    );
  }

  const currentSessionId = currentSession?.id;
  const sortedSessions = [...sessions].sort((a, b) => {
    if (a.id === currentSessionId) return -1;
    if (b.id === currentSessionId) return 1;
    return 0;
  });

  return (
    <Stack
      gap="sm"
      {...props}
      style={{
        minHeight: 0,
        overflowY: 'auto',
        paddingRight: rem(2),
        ...props.style,
      }}
    >
      {isCurrentSessionError && (
        <Text c="dimmed" size="sm">
          Текущую сессию определить не удалось, показан общий список.
        </Text>
      )}
      {deleteError && (
        <Alert color="red" icon={<AlertCircle size={16} />}>
          {deleteError}
        </Alert>
      )}
      {sortedSessions.map((session) => (
        <Session
          key={session.id}
          data={session}
          isCurrent={session.id === currentSessionId}
          isDeleting={removingSessionId === session.id}
          onDelete={handleDeleteSession}
        />
      ))}
    </Stack>
  );
};
