import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/blog.module.scss';

export default function Collapsible(props) {
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
		<div className={`${styles.collapsibleContainer}`}>
			{/* The collapsible title */}
			<h2
				className={`${styles.blogTitle} my-title collapsible-title`}
				onClick={toggleCollapse}
			>
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
