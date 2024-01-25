import styles from './header.module.css';

interface GreetingsProps {
  name: string;
}
const Greetings = ({ name }: GreetingsProps) => {
  return <p className={styles.greetings}>Bem vindo de volta, {name}</p>;
};

export default Greetings;
