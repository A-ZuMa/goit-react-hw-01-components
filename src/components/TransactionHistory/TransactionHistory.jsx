import React from 'react';
import clsx from 'clsx';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.TransactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={clsx(
              styles.type,
              item.type === "deposit" && styles.green,
              item.type === "withdrawal" && styles.red,
            )}>{item.type}</td>
            <td className={styles.TransactionAmmount}>{item.amount}</td>
            <td className={styles.TransactionCurrency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};