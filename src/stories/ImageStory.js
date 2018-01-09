import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Row, Col, Panel, Image} from 'fantastic-components';
import image from '../assets/images/img.jpg';


const ImagesStory = (storiesOf('Image', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Simple example'}>
            <Image src={image}/>
          </Panel>
          <br/>
          <Panel header={'Type example'}>
            <Row>
              <Col lg4> <div><Image src={image} ImageType="rounded"/><br/> ImageType:rounded</div></Col>
              <Col lg4> <div><Image src={image} ImageType="circle"/><br/> ImageType:circle</div></Col>
              <Col lg4> <div> <Image src={image} ImageType="thumbnail"/><br/>ImageType:thumbnail</div></Col>
            </Row>
          </Panel>
        </div>
    )

);

export default  ImagesStory;