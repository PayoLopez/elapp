import styles from './Date.module.css';

interface DatePropos{
    handleChange: ()=> void;
    type: 'date';
    
}


export const Date = ({handleChange,type}:DatePropos)=>{

    return(<input type={type} className={styles.date} onChange={handleChange}/>)

}