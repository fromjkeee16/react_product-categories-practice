import classNames from 'classnames';
import { CategoryButton } from './CategoryButton';

export const CategoriesFilter = ({
  categories,
  selectedCategories,
  onCategoryClear,
  onCategoryClick,
}) => (
  <div className="panel-block is-flex-wrap-wrap">
    <a
      href="#/"
      data-cy="AllCategories"
      className={classNames('button', 'is-success', 'mr-6', {
        'is-outlined': selectedCategories.length,
      })}
      onClick={onCategoryClear}
    >
      All
    </a>

    {categories.map(category => (
      <CategoryButton
        onClick={() => onCategoryClick(category.id)}
        activeClass={{ 'is-info': selectedCategories.includes(category.id) }}
        category={category}
      />
    ))}
  </div>
);
