import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export const FriendList = ({friendsData}) => {
  return (
    <ul className={s.friendList}>
      {friendsData.map(item => (
        <li key={item.id} className={s.item} >
          <span className={item.isOnline
            ? s.online
            : s.offline}></span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt={item.name }
            width="48" />
          <p className={s.name}>{item.name }</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};