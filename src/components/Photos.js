import React, { Component, Fragment } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import CustomImageComponent from './CustomImageComponent';

class Photos extends Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const PHOTO_SET = [
       { src: '/photos/IMG_0719.jpg', width: 1, height: 1 },
       { src: '/photos/IMG_0748.JPG', width: 3, height: 4 },
       { src: '/photos/IMG_0829.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_0830.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_0926.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_1808.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_0930.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_1064.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_1409.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_1065.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_2090.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_1812.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_2095.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_2206.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_2211.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_2279.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_2387.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_2633.jpg', width: 1, height: 1 },
       { src: '/photos/IMG_2610.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_3037.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_3681.jpg', width: 1, height: 1 },
       { src: '/photos/IMG_4479.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_3719.jpg', width: 1, height: 1 },
       { src: '/photos/IMG_4044.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_4524.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_4926.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_5049.jpg', width: 3, height: 4 },
       { src: '/photos/IMG_5051.png', width: 3, height: 4 },
       { src: '/photos/IMG_5059.jpg', width: 4, height: 3 },
       { src: '/photos/IMG_E1756.jpg', width: 3, height: 4 }
    ];

    return (
      <Fragment>
        <Gallery photos={PHOTO_SET} columns={5} margin={3} onClick={this.openLightbox.bind(this)} ImageComponent={CustomImageComponent} />
        <Lightbox images={PHOTO_SET}
          onClose={this.closeLightbox.bind(this)}
          onClickPrev={this.gotoPrevious.bind(this)}
          onClickNext={this.gotoNext.bind(this)}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </Fragment>
    );
  }
}

export default Photos;
