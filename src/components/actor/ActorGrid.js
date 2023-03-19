import React from 'react';
import ActorCard from './ActorCard';
import IMAGE_NOR_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard key={person.id}
          id={person.id}
          name={person.name}
          country={person.country ? person.country : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image?person.image.medium:IMAGE_NOR_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
