import { useState, useRef } from 'react';

type ModalResolver = (value: string | null) => void;

export const useModal = () => {
  // useRef сохраняет значение между ререндерами, но не вызывает ререндер сам по себе
  const resolveRef = useRef<ModalResolver | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = (): Promise<string | null> => {
    setIsOpen(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve; // Сохраняем в .current
    });
  };

  const close = (value: string | null) => {
    setIsOpen(false);
    if (resolveRef.current) {
      resolveRef.current(value); // Вызываем из .current
      resolveRef.current = null;
    }
  };

  return { isOpen, open, close };
};
