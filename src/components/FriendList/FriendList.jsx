import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendsList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatarUrl={item.avatar}
          name={item.name}
          status={item.isOnline === true ? 'online' : 'offline'}
          variant="error"
        />
      ))}
    </ul>
  );
};