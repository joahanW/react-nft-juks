import React from 'react';
import CollectionCard from './CollectionCard';
import './JuksList.css';

const JuksList = ({ juksListData, setSelectedJuks }) => {
  return (
    <div className="juksList">
      {juksListData.map((juks) => (
        <div onClick={() =>setSelectedJuks(juks.token_id)}>
          <CollectionCard
            key={juks.token_id}
            id={juks.token_id}
            name={juks.name}
            traits={juks.traits}
            image={juks.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default JuksList;
