import { ButtonHTMLAttributes } from 'react';
import styles from './customButton.module.css';
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'cancel' | 'danger';
}

const CustomButton = ({
  children,
  variant = 'default',
  ...props
}: CustomButtonProps) => {
  const className = `${styles.customButton} ${styles[variant]}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
