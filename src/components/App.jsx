import { Profile } from "./Profile/Profile";
import { Statistics } from "./StatisticsList/StatisticsList";
import { FriendList } from "./FriendList/FriendList";

import user from '../data/user'
import data from '../data/data'
import friends from '../data/friends'
import transactions from '../data/transactions'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile profileData={user} />
      <Statistics title="Upload stats" statisticsData={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory transactionsData={transactions} />
    </>
  );
};
