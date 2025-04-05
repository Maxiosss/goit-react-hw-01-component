export default function Item({ type, amount, currency }) {
  return (
    <table className="transaction-history">
      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    </table>
  );
}
