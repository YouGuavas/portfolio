import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import { useContext } from 'react';
import { MyContext } from '@/components/Layout';

export default function SelfieImage(props) {
	const { theme, setTheme } = useContext(MyContext);

	return (
		<div className={`${styles.selfieImageContainer} ${theme}`}>
			<Image
				src={props.src}
				alt={props.alt}
				height={props.height}
				width={props.width}
			/>
		</div>
	);
}
