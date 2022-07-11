import styles from '../styles/Blog.module.scss';

export default function BlogImage(props) {
    return (
        <div className={styles.blogImageContainer}>
            <img src={props.src}/>
        </div>
    )
}