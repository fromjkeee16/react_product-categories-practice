import classNames from 'classnames';
import { UserButton } from './UserButton';

export const UsersFilter = ({ users, onUserClick, selectedUser }) => (
  <p className="panel-tabs has-text-weight-bold">
    <a
      data-cy="FilterAllUsers"
      href="#/"
      onClick={() => onUserClick('')}
      className={classNames({
        'is-active': !selectedUser,
      })}
    >
      All
    </a>

    {users.map(user => (
      <UserButton
        key={user.id}
        onClick={() => onUserClick(user.id)}
        activeClass={{ 'is-active': user.id === selectedUser }}
      >
        {user.name}
      </UserButton>
    ))}
  </p>
);
