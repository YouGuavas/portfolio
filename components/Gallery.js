import styles from '../styles/Gallery.module.scss';
import {useState} from 'react';

import SVG from '../utils/SVG';

export function Gallery(props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const items = props.items;

    const handleArrowClick = (direction) => {
        if (direction === 'right') {
            if (currentImage < items.length-1) {
                setCurrentImage(currentImage+1);
            } else {
                setCurrentImage(0);
            }
        } else {
            if (currentImage > 0) {
                setCurrentImage(currentImage-1);
            } else {
                setCurrentImage(items.length-1);
            }
        }
    }

    const renderArrows = (direction) => {
        if (items.length > 1) {
            if (direction === 'right') {
                return (
                    <button type="button" onClick={() => handleArrowClick(direction)} className={`${styles.galleryArrow} ${styles.galleryIcon} ${styles.arrowRight}`}>
                        <SVG icon={direction} viewBox="6 0 12 24"/>
                    </button>
                )
            } else {
                return (
                    <button type="button" onClick={() => handleArrowClick(direction)} className={`${styles.galleryArrow} ${styles.galleryIcon} ${styles.arrowLeft}`}>
                        <SVG icon={direction} viewBox="6 0 12 24"/>
                    </button>
                )
            }
        }
    }

    const handleFullScreen = () => {
        if (isFullScreen) {
            setIsFullScreen(false);
        } else {
            setIsFullScreen(true);
        }
    }
    
    return (
        <div className={`${styles.gallery} ${isFullScreen ? styles.fullscreenModal : ''}`}>
            <div className={`${styles.galleryMainContainer}`}>
                {renderArrows('left')}
                {
                    items.map((item, index) => {
                        return (<img style={{ transform: `translate3d(${(-currentImage * 650) + 100}px, 0, 0)` }} alt={item.alt || 'Main project'} 
                        className={`${styles.galleryMain}`} 
                        height='450px' width='450px' src={item.original} key={index} />)
                    })
                }
                {renderArrows('right')}
                <button type="button"
                className={`${styles.galleryIcon} ${styles.galleryFullscreen}`}
                onClick={handleFullScreen}
                aria-label="Open Fullscreen">
                    <SVG strokeWidth={2} icon={`${!isFullScreen ? 'maximize' : 'minimize'}`}/>
                </button>
            </div>
            <div className={`${styles.galleryThumbnails}`}>
            {props.items.map((item, index) => {
                return <img style={{ transform: `translate3d(${-currentImage * 75}%, 0, 0)` }} alt={item.alt || 'Project thumbnail'} onClick={() => setCurrentImage(index)} className={`${styles.galleryThumbnail} ${styles.galleryIcon} ${(index === currentImage ? styles.thumbnailActive : '')}`} height='75px' width='75px' key={index} src={item.thumbnail} />
            })}
            </div>
        </div>
    )
}