import styles from '../../styles/work.module.scss';
import CheckoutButton from './CheckoutButton';

import { useContext } from 'react';
import { MyContext } from '../../components/Layout';

const Product = function (props) {
	const { theme, setTheme } = useContext(MyContext);
	return (
		<div className={`${styles.card} ${theme}`}>
			<div className={styles.backgroundImageContainer}></div>

			<div
				className={`${styles.contentContainer} my-text-mustard grid grid-cols-2 place-items-center text-center`}
			>
				<h4 className="col-span-2">{props.product.name}</h4>
				<div className={`col-span-2 ${styles.productDescription}`}>
					<p>{`$${props.product.price / 100}`}</p>
					<p>{props.product.description}</p>
				</div>
				{/*<CheckoutButton priceId={props.product.price} />*/}
			</div>
		</div>
	);
};

export { Product };
