import { CategoriesFilter } from './Categories/CategoriesFilter';
import { ResetFiltersButton } from './ResetButton/ResetFilters';
import { SearchBar } from './SearchBar/SearchInput';
import { UsersFilter } from './Users/UsersFilter';

export const ProductFilter = ({
  searchQuery,
  onSearchQueryChange,
  onSearchQueryClear,
  users,
  selectedUserId,
  onUserClick,
  categories,
  selectedCategories,
  onCategoryClear,
  onCategoryClick,
  onFiltersResetClick,
}) => (
  <nav className="panel">
    <p className="panel-heading">Filters</p>

    <UsersFilter
      users={users}
      onUserClick={onUserClick}
      selectedUser={selectedUserId}
    />

    <SearchBar
      query={searchQuery}
      onQueryChange={onSearchQueryChange}
      onQueryClear={onSearchQueryClear}
    />

    <CategoriesFilter
      categories={categories}
      selectedCategories={selectedCategories}
      onCategoryClear={onCategoryClear}
      onCategoryClick={onCategoryClick}
    />

    <ResetFiltersButton handler={onFiltersResetClick}>
      Reset all filters
    </ResetFiltersButton>
  </nav>
);
