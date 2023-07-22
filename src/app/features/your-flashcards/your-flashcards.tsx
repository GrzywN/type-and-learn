import { Grid } from '@mantine/core';

import { useGetUserCollections } from '../../shared/http';
import { CardGradient } from '../../shared/ui/molecules/card-gradient/card-gradient';

export function YourFlashcards() {
  const { isLoading, isError, data } = useGetUserCollections();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Grid>
      {data.map((collection) => (
        <Grid.Col span={3} key={collection.id}>
          <CardGradient title={collection.name} description={collection.description} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

export default YourFlashcards;
