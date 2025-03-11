import classNames from 'classnames';

export const CategoryButton = ({ category, onClick, activeClass }) => (
  <a
    key={category.id}
    data-cy="Category"
    className={classNames('button', 'mr-2', 'my-1', activeClass)}
    href="#/"
    onClick={() => onClick(category.id)}
  >
    {category.title}
  </a>
);
