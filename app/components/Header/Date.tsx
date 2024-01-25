import { FormatDate } from '@/utils/dateUtils';
import styles from './header.module.css';

const Date = () => {
  const formattedDate = FormatDate();
  return <p className={styles.date}>{formattedDate}</p>;
};

export default Date;
