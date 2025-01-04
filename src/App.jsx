
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ItemList from './components/ItemList';
import ReCaptcha from './components/ReCaptcha';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [textCaptchaVerified, setTextCaptchaVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
     if (textCaptchaVerified) {
       fetchItems();
       navigate('/items');
     }
  }, [textCaptchaVerified, navigate]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const onTextCaptchaVerify = (isVerified) => {
    setTextCaptchaVerified(isVerified);
  };

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div>
      {!textCaptchaVerified ? (
        <div className="captcha-container">
          <h2>Confirm You're Human to View Our Products</h2>
          <div className="captcha-section">
            <ReCaptcha onVerify={onTextCaptchaVerify} />
          </div>
        </div>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <div className="app">
            <h1>Welcome to Your Favorite MarketPlace</h1>
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {loading ? (
              <p>Loading...</p>
            ) : filteredItems.length === 0 ? (
              <p>No items match your search.</p>
            ) : (
              <>
                <ItemList items={paginatedItems} setItems={(updatedPageItems) => {
                  const updatedItems = [
                    ...filteredItems.slice(0, (currentPage - 1) * itemsPerPage),
                    ...updatedPageItems,
                    ...filteredItems.slice(currentPage * itemsPerPage),
                  ];
                  setFilteredItems(updatedItems);
                  setItems(updatedItems);
                }} />
                <div className="pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={index + 1 === currentPage ? 'active' : ''}
                      onClick={() => setCurrentPage(index + 1)}
                      aria-label={`Go to page ${index + 1}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </DndProvider>
      )}
    </div>
  );
};

export default App;