import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PetCard from './components/PetCard/PetCard';
import { useState } from 'react';

function App() {
  const [petNameFilter, setPetNameFilter] = useState('');

  return (
    <div className="App">
      <Header
        petNameFilter={petNameFilter}
        setPetNameFilter={setPetNameFilter}
      ></Header>

      <PetCard petNameFilter={petNameFilter}></PetCard>
      <Footer />
    </div>
  );
}

export default App;
