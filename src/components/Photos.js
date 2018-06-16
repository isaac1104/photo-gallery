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
       { src: 'https://i.imgur.com/8KOXCt3.jpg', width: 1, height: 1 },
       { src: 'https://i.imgur.com/DrWVpyC.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/gKXx75Z.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/9CPlSKZ.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/4DN3VUd.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/m5paRzc.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/8miEWQO.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/aWTvPon.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/uoeMJRt.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/kqWs9My.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/35fxDB6.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/Oau11JE.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/jPLN4ib.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/fv4svCm.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/cyZ3Ypw.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/GBb2dDI.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/XsKweYj.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/AZFCSsk.jpg', width: 1, height: 1 },
       { src: 'https://i.imgur.com/KNcnspQ.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/US2NnFA.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/xAX8GUU.jpg', width: 1, height: 1 },
       { src: 'https://i.imgur.com/WwkeWa4.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/MJ2cB1k.jpg', width: 1, height: 1 },
       { src: 'https://i.imgur.com/lIpURVJ.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/QfUWVQ8.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/96Tqhdg.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/B3X9ZFd.jpg', width: 3, height: 4 },
       { src: 'https://i.imgur.com/ZqoQ3ar.png', width: 3, height: 4 },
       { src: 'https://i.imgur.com/rSCb5j9.jpg', width: 4, height: 3 },
       { src: 'https://i.imgur.com/nycf4TN.jpg', width: 3, height: 4 }
    ];

    return (
      <Fragment>
        <Gallery
          photos={PHOTO_SET}
          columns={/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 3 : 5}
          margin={3}
          onClick={this.openLightbox.bind(this)}
          ImageComponent={CustomImageComponent}
        />
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
