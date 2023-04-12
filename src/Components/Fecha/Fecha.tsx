import styles from './Fecha.module.css';

type FechaProps = {
  handleChange: any
  type: 'text' | 'date' | 'number'
};

export const Fecha = ({ handleChange, type }:FechaProps) => {
  return <input className={styles.abc} type={type} onChange={handleChange} />;
};
