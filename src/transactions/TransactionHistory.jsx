import PropTypes from 'prop-types';
import Item from './Item';
export default function TransactionHistory({ transaction }) {
  return (
    <section className="transactions">
      <ul className="transaction-list">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
        </table>
        {transaction.map(({ id, type, amount, currency }) => (
          <Item key={id} type={type} amount={amount} currency={currency} />
        ))}
      </ul>
    </section>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
