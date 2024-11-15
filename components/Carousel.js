import { useState } from 'react';
import BlogImage from './BlogImage';

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div style={{ position: 'relative', width: '100%' }}>
			{/* Image Display */}
			<div>
				<BlogImage
					src={images[currentIndex].src}
					alt={` ${images[currentIndex].alt}`}
					width={400}
					height={400}
				/>
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={prevImage}
				style={{
					position: 'absolute',
					top: '50%',
					left: '10px',
					transform: 'translateY(-50%)',
					background: 'rgba(0,0,0,0.5)',
					color: '#fff',
					border: 'none',
					borderRadius: '50%',
					padding: '10px',
					cursor: 'pointer',
				}}
			>
				❮
			</button>
			<button
				onClick={nextImage}
				style={{
					position: 'absolute',
					top: '50%',
					right: '10px',
					transform: 'translateY(-50%)',
					background: 'rgba(0,0,0,0.5)',
					color: '#fff',
					border: 'none',
					borderRadius: '50%',
					padding: '10px',
					cursor: 'pointer',
				}}
			>
				❯
			</button>
		</div>
	);
};

export default Carousel;
