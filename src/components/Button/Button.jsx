import { Ellipsis } from 'lucide-react';
import { getStyles } from '@/shared/lib/getStyles';
import styles from './Button.module.scss';

export const Button = (props) => {
  const {
    className,
    children,
    color = 'primary',
    circle,
    cta,
    loading,
    ...otherProps
  } = props;

  const mode = {
    [styles.circle]: circle,
    [styles.cta]: cta,
  };

  const additional = [
    className,
    styles[color],
  ];

  return (
    <button
      className={getStyles(styles.button, mode, additional)}
      {...otherProps}
    >
      {!cta && <div className={styles.underLine} />}
      {loading ? <Ellipsis className={styles.waiting} /> : children}
    </button>
  );
};
