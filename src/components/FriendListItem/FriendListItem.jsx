import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatarUrl, name, status }) => {
  return (
    <li className={styles.item}>
      <span className={styles[status]}></span>
      <img
        className={styles.avatar}
        src={avatarUrl}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};