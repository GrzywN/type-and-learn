import { Paper, Text, ThemeIcon, rem } from '@mantine/core';
import { IconColorSwatch } from '@tabler/icons-react';

import { useStyles } from './card-gradient.styles';

export interface CardGradientProps {
  title: string;
  description: string;
}

export function CardGradient(props: CardGradientProps) {
  const { title, description } = props;
  const { classes } = useStyles();

  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon size="xl" radius="md" variant="gradient" gradient={{ deg: 0, from: 'pink', to: 'orange' }}>
        <IconColorSwatch size={rem(28)} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}

export default CardGradient;
