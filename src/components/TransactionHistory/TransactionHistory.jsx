import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const TransactionHistory  = ({transactionsData}) => {
  return (
  <table className={s.transactionHistory} border="1" cellspacing="0">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody align="center">
      {transactionsData.map(item => (
        <tr key={item.id} style={{paddingLeft: 10}}>
          <td>{item.type}</td>
          <td>{item.amount }</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    
    </tbody>
  </table>
  );
};

TransactionHistory.prototype = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};