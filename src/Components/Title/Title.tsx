import styles from './Title.module.css';


interface TitleProps{
    title:string;
}


export const Title=({title}:TitleProps)=>{

    return(<h1 className={styles.title}>{title}</h1>)
}