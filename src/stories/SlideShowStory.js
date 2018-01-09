import React from 'react';
import {storiesOf} from '@storybook/react';
import {Slider, Row, Col, Panel,Image} from 'fantastic-components';
import wideslider1 from '../assets/images/slideshow/800x300/wideslider1.jpg';
import wideslider2 from '../assets/images/slideshow/800x300/wideslider2.jpg';
import wideslider3 from '../assets/images/slideshow/800x300/wideslider3.jpg';
import wideslider4 from '../assets/images/slideshow/800x300/wideslider4.jpg';
import smallslider1 from '../assets/images/slideshow/300x400/smallslider1.jpg';
import smallslider2 from '../assets/images/slideshow/300x400/smallslider2.jpg';
import smallslider3 from '../assets/images/slideshow/300x400/smallslider3.jpg';
import smallslider4 from '../assets/images/slideshow/300x400/smallslider4.jpg';



const items = [
  {id: 1, content: ( <Image src={wideslider1} style={{width:'100%'}}/>)},
  {id: 2, content: ( <Image src={wideslider2} style={{width:'100%'}}/>)},
  {id: 3, content: (<Image src={wideslider3} style={{width:'100%'}}/>)},
  {id: 4, content: (<Image src={wideslider4} style={{width:'100%'}}/>)}];

const itemsSmall = [
  {id: 1, content: ( <Image src={smallslider1} style={{width:'100%'}}/>)},
  {id: 2, content: ( <Image src={smallslider2} style={{width:'100%'}}/>)},
  {id: 3, content: (<Image src={smallslider3} style={{width:'100%'}}/>)},
  {id: 4, content: (<Image src={smallslider4} style={{width:'100%'}}/>)}];
const SlideShowStory = (storiesOf('SlideShow', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple example'}>
            <Slider items={items}/>
          </Panel>
          <br/>
          <Row>
            <Col lg9>
              <Panel header={'AutoPlay interval:5s'}>
                <Slider autoPlay interval={5000} items={items}/>
              </Panel>
            </Col>
            <Col lg3>
              <Panel header={'Dots props'}>
                <Slider items={itemsSmall} dots/>
              </Panel>
            </Col>
          </Row>
        </div>
    )

);

export default  SlideShowStory;