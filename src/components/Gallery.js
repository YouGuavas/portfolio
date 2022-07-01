import '../styles/Gallery.module.scss';
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
            return (
                <button type="button" onClick={() => handleArrowClick(direction)} className={`gallery-arrow gallery-icon arrow-${direction}`}>
                    <SVG icon={direction} viewBox="6 0 12 24"/>
                </button>
            )
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
        <div className={`gallery ${isFullScreen ? 'fullscreen-modal' : ''}`}>
            <div className={`gallery-main-container`}>
                {renderArrows('left')}
                {
                    items.map((item, index) => {
                        return <img style={{ transform: `translate3d(${-currentImage * 100}%, 0, 0)` }} alt={item.alt || 'Main project'} className='gallery-main' height='450px' width='450px' src={item.original} key={index} />
                    })
                }
                {renderArrows('right')}
                <button type="button"
                className="gallery-icon gallery-fullscreen"
                onClick={handleFullScreen}
                aria-label="Open Fullscreen">
                    <SVG strokeWidth={2} icon={`${!isFullScreen ? 'maximize' : 'minimize'}`}/>
                </button>
            </div>
            <div className="gallery-thumbnails">
            {props.items.map((item, index) => {
                return <img style={{ transform: `translate3d(${-currentImage * 75}%, 0, 0)` }} alt={item.alt || 'Project thumbnail'} onClick={() => setCurrentImage(index)} className={`gallery-thumbnail gallery-icon ${(index === currentImage ? 'thumbnail-active' : '')}`} height='75px' width='75px' key={index} src={item.thumbnail} />
            })}
            </div>
        </div>
    )
}