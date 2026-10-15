import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh', backgroundColor: '#f4f4f9' }}>
      <Header onNavigate={(pageId) => setCurrentPage(pageId)} />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <Login currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
