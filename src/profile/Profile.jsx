import PropTypes from 'prop-types';
import "./Profile.css"
export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className='stats__item'>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <div className="vertical-line"></div>
        <li className='stats__item'>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <div className="vertical-line"></div>
        <li className='stats__item'>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    folowers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
};
