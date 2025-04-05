import PropTypes from 'prop-types';
import Item from './Item';
export default function FriendsList({ data }) {
  return (
    <section className="friends">
      <ul className="friend-list">
        {data.map(({ id, isOnline, name, avatar }) => (
          <Item key={id} isOnline={isOnline} name={name} avatar={avatar} />
        ))}
      </ul>
    </section>
  );
}
FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
      avatar: PropTypes.string,
    })
  ),
};
