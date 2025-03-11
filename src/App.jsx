/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

import { ProductTable } from './components/ProductTable/Table';
import { ProductFilter } from './components/ProductFilter/Filter';
import { prepareGoods } from './functions';

// #region Map data
const categories = categoriesFromServer.map(category => ({
  ...category,
  owner: usersFromServer.find(user => user.id === category.ownerId),
}));

const products = productsFromServer.map(product => {
  const category = categories.find(cat => cat.id === product.categoryId);
  const user = usersFromServer.find(usr => usr.id === category.ownerId);

  return { ...product, category, user };
});
// #endregion

const filterUsers = [...usersFromServer];
const tableFields = [
  { id: 1, name: 'ID' },
  { id: 2, name: 'Product' },
  { id: 3, name: 'Category' },
  { id: 4, name: 'User' },
];

export const App = () => {
  const [query, setQuery] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [reversed, setReversed] = useState(false);

  const sanitizedQuery = query.trim().toLowerCase();

  const visibleProducts = prepareGoods(
    products,
    sanitizedQuery,
    selectedUserId,
    selectedCategories,
    sortBy,
    reversed,
  );

  // #region Handlers
  const handleUserSelect = user => {
    setSelectedUserId(user);
  };

  const handleCategorySelect = category => {
    setSelectedCategories(prev => {
      if (!prev.includes(category)) {
        return [...prev, category];
      }

      return prev.toSpliced(prev.indexOf(category), 1);
    });
  };

  const handleCategoryClear = () => {
    setSelectedCategories([]);
  };

  const handleSearchChange = event => {
    setQuery(event.target.value);
  };

  const handleSearchClear = () => {
    setQuery('');
  };

  const handleFiltersClear = () => {
    handleCategoryClear();
    handleUserSelect('');
    handleSearchClear();
  };

  const handleSortField = field => {
    if (sortBy !== field) {
      setSortBy(field);
      setReversed(false);

      return;
    }

    if (!reversed) {
      setReversed(true);

      return;
    }

    setSortBy('');
    setReversed(false);
  };

  // #endregion

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <ProductFilter
            users={filterUsers}
            selectedUserId={selectedUserId}
            onUserClick={handleUserSelect}
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryClick={handleCategorySelect}
            onCategoryClear={handleCategoryClear}
            searchQuery={query}
            onSearchQueryChange={handleSearchChange}
            onSearchQueryClear={handleSearchClear}
            onFiltersResetClick={handleFiltersClear}
          />
        </div>

        <div className="box table-container">
          {visibleProducts.length ? (
            <ProductTable
              products={visibleProducts}
              headFields={tableFields}
              onHeadFieldClick={handleSortField}
              fieldToSort={sortBy}
              fieldOrderReversed={reversed}
            />
          ) : (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
