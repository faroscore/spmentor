import React from 'react';

// MODULES
import AddBook from '../containers/AddBook.jsx';
import Filter from '../containers/Filter.jsx';
import Library from '../containers/Library.jsx';

// STYLES
import "../../styles/main.sass";

const App = () => (
    <div className="flex">
        <div>
            <AddBook/>
            <Filter/>
            <button
                className="btn"
                onClick={() => {
                    localStorage.clear();
                    location.reload()
                }}>
                Очистить список
            </button>
        </div>
        <Library/>
    </div>

)
export default App;