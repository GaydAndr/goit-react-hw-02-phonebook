import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

export const Statistics = ({ title, statisticsData }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}> {title}</h2>}
      

      <ul className={s.statList}>
        {statisticsData.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{
              backgroundColor: `rgba(${item.percentage}, ${item.percentage}, 170, 0.6)`,
            }}
          >
            <span className={s}>{item.label}</span>
            <span className={s}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
