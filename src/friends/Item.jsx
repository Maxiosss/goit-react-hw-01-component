export default function Item({avatar, name, isOnline}) {
  return (
    <li className="item">
      <div
        className="status"
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
        }}
      >
        {isOnline}
      </div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
