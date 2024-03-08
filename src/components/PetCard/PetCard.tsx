import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { pets } from '../../utills/constants';

import './PetCard.css';

const PetCard = ({ petNameFilter }: any) => {
  const [filteredPets, setFilteredPets] = useState(pets);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const applyFilter = () => {
      const filteredData = pets.filter((pet) => {
        switch (filterStatus) {
          case 'all':
            return true;

          default:
            return pet.name.toLowerCase().includes(filterStatus.toLowerCase());
            // pet.name.toLowerCase().includes(petNameFilter.toLowerCase())
        }
      });

      setFilteredPets(filteredData);
    };

    applyFilter();
  }, [filterStatus, petNameFilter]);

  const handleFilterChange = (event: any) => {
    setFilterStatus(event.target.value);
  };

  const renderPets = () => {
    return (
      <div className="grid-container">
        {filteredPets.map((pet, i) => (
          <Card key={i} className="pet-card">
            <Card.Body>
              <Card.Title>{pet.name}</Card.Title>
              {pet.images.map((img, j) => (
                <Card.Img
                  className="img"
                  key={j}
                  src={img}
                  alt={pet.name + ' Image ' + (j + 1)}
                />
              ))}
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <select value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All Pets</option>

          <option value="athena">Athena</option>
          <option value="peach">Peach</option>
        </select>
      </div>
      {renderPets()}
    </div>
  );
};

export default PetCard;
