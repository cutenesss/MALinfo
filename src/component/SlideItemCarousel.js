import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

class SlideItemCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {data, renderItem, onSnapToItem, itemWidth} = this.props;
    return (
      <Carousel
        data={data}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={itemWidth}
        inactiveSlideOpacity={1}
        renderItem={renderItem}
        inactiveSlideScale={0.85}
        onSnapToItem ={onSnapToItem}
        activeSlideAlignment={'start'}
        slideStyle={{ start: 20 }}
    />
    );
  }
}

export default SlideItemCarousel;