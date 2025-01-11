import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/blog.module.scss';
import SelfieImage from './SelfieImage';

const Collapsible = function(props) {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const contentRef = useRef(null); // Ref for the collapsible content

	// Toggle the collapsed state
	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed);
	};

	useEffect(() => {
		setIsCollapsed(false);
	}, []);
	return (
		<div
			className={`${styles.collapsibleContainer} ${styles.absoluteBlogging} ${
				props.orientation === 'center'
					? 'center'
					: props.orientation === 'left'
					? 'left'
					: 'right'
			}`}
		>
			{/* The collapsible title */}
			<h2
				className={`${styles.blogTitle} my-title collapsible-title`}
				onClick={toggleCollapse}
			>
				{props.image ? (
					<SelfieImage
						alt={`A text bubble icon indicating text ownership.`}
						height={50}
						width={50}
						src={props.image.src}
					/>
				) : null}
				{props.title}
			</h2>

			{/* Content with smooth height transition */}
			<div
				ref={contentRef}
				style={{
					maxHeight: isCollapsed
						? '0px'
						: `${contentRef.current?.scrollHeight}px`,
					overflow: 'hidden',
					transition: 'max-height 0.4s ease',
				}}
			>
				{props.children}
			</div>
		</div>
	);
}


export {Collapsible}