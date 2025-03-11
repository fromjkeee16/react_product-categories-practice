import classNames from 'classnames';

export const UserButton = ({ children, onClick, activeClass = {} }) => (
  <a
    data-cy="FilterUser"
    href="#/"
    onClick={onClick}
    className={classNames(activeClass)}
  >
    {children}
  </a>
);
