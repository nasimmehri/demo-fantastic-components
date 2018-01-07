import React from 'react';
import {storiesOf} from '@storybook/react';

import {Slider, List, Row, Col, Panel} from 'fantastic-components';
const items = [
  {id: 1, content: (<div style={{backgroundColor: 'lightgray', height: 200}}> Contetnt 1</div>)},
  {id: 2, content: (<div style={{backgroundColor: 'gray', height: 200}}> Content 2</div>)},
  {id: 3, content: (<div style={{backgroundColor: 'darkgray', height: 200}}> Content 3</div>)}];
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
            <Col lg6>
              <Panel header={'AutoPlay interval:5s'}>
                <Slider autoPlay interval={5000} items={items}/>
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'dot'}>
                <Slider items={items} dots/>
              </Panel>
            </Col>
          </Row>

          <br/>


        </div>
    )

);

export default  SlideShowStory;