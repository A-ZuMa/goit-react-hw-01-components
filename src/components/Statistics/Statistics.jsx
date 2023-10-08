import React from 'react';
import styles from './Statistics.module.css';

export const Statistics = ({
  title,
  stats,
})=> {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label} </span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function getRandomColor() {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }