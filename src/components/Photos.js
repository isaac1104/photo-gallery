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
       { src: 'https://source.unsplash.com/collection/1673600/800x600', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/2148809/800x799', width: 1, height: 1 },
       { src: 'https://source.unsplash.com/collection/1394721/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/193055/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/1457745/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/1525589/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/332024/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/1717137/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/494266/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/1223439/800x600', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/1819753/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/1410320/800x799', width: 1, height: 1 },
       { src: 'https://source.unsplash.com/collection/2075144/600x799', width: 1, height: 1 },
       { src: 'https://source.unsplash.com/collection/445266/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/395791/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/167880/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/1557812/600x799', width: 3, height: 4 },
       { src: 'https://source.unsplash.com/collection/1242150/800x599', width: 1, height: 1 },
       { src: 'https://source.unsplash.com/collection/573226/800x599', width: 4, height: 3 },
       { src: 'https://source.unsplash.com/collection/577737/800x599', width: 1, height: 1 }
    ];

    return (
      <Fragment>
        <Gallery photos={PHOTO_SET} margin={3} onClick={this.openLightbox.bind(this)} ImageComponent={CustomImageComponent} />
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
