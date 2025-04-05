import user from './data/user';
import Profile from './profile/Profile';
import data from './data/data';
import Statistics from './statistics/Statistic';
import friends from './data/friends';
import FriendsList from './friends/FriendsList';
import transactions from "./data/transactions"
import TransactionHistory from 'transactions/TransactionHistory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList data={friends} />
      <TransactionHistory transaction={ transactions} />
    </div>
  );
}

export default App;
