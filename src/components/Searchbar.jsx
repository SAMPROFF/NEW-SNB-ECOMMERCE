import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useCart } from '../ContextFolder/CartContext';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { dispatch } = useCart(); // Adjust destructuring if needed

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch({
        type: 'SEARCH_PRODUCT',
        payload: debouncedQuery,
      });
    }
  }, [dispatch, debouncedQuery]);

  return (
    <form className="form-search">
      <div className="form-group">
        <span>
          <FaSearch className="search-icon" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Searchbar;
