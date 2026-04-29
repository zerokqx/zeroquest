import { Box, BoxProps } from '@mantine/core';

type DiffuseLightProps = BoxProps & {
  size?: number | string;
  blur?: number;
  opacity?: number;
};

const resolveSize = (size: number | string): string => {
  return typeof size === 'number' ? `${size}px` : size;
};

export const DiffuseLight = ({
  size = 360,
  blur = 72,
  opacity = 0.45,
  bg = 'violet.4',
  style,
  ...props
}: DiffuseLightProps) => {
  const resolvedSize = resolveSize(size);

  return (
    <Box
      aria-hidden
      bg={bg}
      {...props}
      style={{
        position: 'absolute',
        width: resolvedSize,
        height: resolvedSize,
        borderRadius: '999px',
        filter: `blur(${blur}px)`,
        pointerEvents: 'none',
        opacity,
        ...style,
      }}
    />
  );
};
