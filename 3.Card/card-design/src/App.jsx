import React, { useState } from 'react'
import "./App.css"
import Card from './components/Card'
import FormPage from './pages/FormPage'

const App = () => {
  
 const [cards, setCards] = useState([
    {
      id: 1,
      name: "Sophie Bennett",
      bio: "Product Designer who focuses on simplicity & usability.",
      imgUrl: "https://unsplash.com",
      followers: 312,
      posts: 48
    }
  ]);

  // 2. Navigation handle karne ke liye simple state toggle
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' ya 'create'

  // 3. Naya card data array mein push karne ke liye function
  const handleAddNewCard = (newCardData) => {
    setCards((prevCards) => [newCardData, ...prevCards]);
    setCurrentScreen('home'); // Card add hote hi home screen par laut jao
  };

  return (
    <div className='app-root'>
      
      {/* 🚀 NAVBAR COMPONENT */}
      <nav className="navbar">
        <h1 className="nav-logo" onClick={() => setCurrentScreen('home')}>CardCraft</h1>
        {currentScreen === 'home' ? (
          <button className="nav-create-btn" onClick={() => setCurrentScreen('create')}>
            Create New Card +
          </button>
        ) : (
          <button className="nav-back-btn" onClick={() => setCurrentScreen('home')}>
            ← Back to Gallery
          </button>
        )}
      </nav>

      {/* 🚀 SCREEN CONDITIONAL RENDERING */}
      <main className='main-content'>
        {currentScreen === 'home' ? (
          <div className='cards-grid-wrapper'>
            {cards.map((card) => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        ) : (
          <FormPage onCardSubmit={handleAddNewCard} />
        )}
      </main>

    </div>
  );
};

export default App