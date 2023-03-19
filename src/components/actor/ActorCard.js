/* eslint-disable no-console */
import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  
  return (
    <StyledActorCard>
      <div>
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country.name}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className='deathday'>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledActorCard>
  );
};

export default ActorCard;
