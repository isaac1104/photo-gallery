import React from 'react';
import FadeIn from 'react-lazyload-fadein';

const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

const CustomImageComponent = ({ index, onClick, photo, margin }) => {
  const sx = (100 - ((30 / photo.width) * 100)) / 100;
  const sy = (100 - ((30 / photo.height) * 100)) / 100;
  return (
    <div style={{ margin, width: photo.width, ...cont }} className={!photo.selected ? 'not-selected' : ''}>
      <FadeIn>
        {onload => (
          <img {...photo} onClick={(e) => onClick(e, { index, photo })} onLoad={onload} />
        )}
      </FadeIn>
    </div>
  );
};

export default CustomImageComponent;
