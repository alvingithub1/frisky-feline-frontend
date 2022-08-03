import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
// import Carousel from 'react-multi-carousel';

export class CatIndex extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { activeIndex: 0 };
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  //   this.goToIndex = this.goToIndex.bind(this);
  //   this.onExiting = this.onExiting.bind(this);
  //   this.onExited = this.onExited.bind(this);
  // }

  // onExiting() {
  //   this.animating = true;
  // }

  // onExited() {
  //   this.animating = false;
  // }

  // next() {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === this.props.cats.length - 1 ? 0 : this.state.activeIndex + 1;
  //   this.setState({ activeIndex: nextIndex });
  // }

  // previous() {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === 0 ? this.props.cats.length - 1 : this.state.activeIndex - 1;
  //   this.setState({ activeIndex: nextIndex });
  // }

  // goToIndex(newIndex) {
  //   if (this.animating) return;
  //   this.setState({ activeIndex: newIndex });
  // }


  render() {
    // console.log(this.props.cats)
    // let { cats } = this.props
    // const { activeIndex } = this.state;

    // const slides = cats.map((cat) => {
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={cat.id}
    //     >
    //       <img src={cat.src} alt={cat.altText} />
    //       <CarouselCaption captionText={cat.name} captionHeader={cat.age} />
    //     </CarouselItem>
    //   );
    // });

    return (
      <>
      <h2>Find your purrfect match</h2>
      <div>
        {this.props.cats &&  this.props.cats.map(cat => {
          return(
            <Card key={cat.id}>
            <CardImg top width="100%" src={cat.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{cat.name}</CardTitle>
              <CardSubtitle>{cat.age}</CardSubtitle>
              <NavLink to={`/catshow/${cat.id}`}>
                <Button>More info here</Button>
              </NavLink>
            </CardBody>
          </Card>
          )
        })}
      </div>
      </>
      // <Carousel
      //   activeIndex={activeIndex}
      //   next={this.next}
      //   previous={this.previous}
      // >
      //   <CarouselIndicators cats={cats} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
      //   {slides}
      //   <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
      //   <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      // </Carousel>

    )
  }
}

export default CatIndex