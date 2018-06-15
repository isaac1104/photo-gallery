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
  return (
    <div style={{ margin, width: photo.width, ...cont }}>
      <FadeIn height={600}>
        {onload => (
          <img {...photo} onClick={(e) => onClick(e, { index, photo })} onLoad={onload} alt='thumbnail' />
        )}
      </FadeIn>
    </div>
  );
};

export default CustomImageComponent;
