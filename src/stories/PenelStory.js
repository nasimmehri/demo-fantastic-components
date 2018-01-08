import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Row, Col, Panel} from 'fantastic-components';
let lorem=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Quis eleifend quam adipiscing vitae. Sit amet justo donec enim diam vulputate ut pharetra sit. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Neque gravida in fermentum et sollicitudin ac orci phasellus. Quam adipiscing vitae proin sagittis. Velit scelerisque in dictum non consectetur a. Pulvinar etiam non quam lacus. Auctor eu augue ut lectus arcu bibendum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Eu feugiat pretium nibh ipsum consequat nisl. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Semper quis lectus nulla at volutpat. Et malesuada fames ac turpis egestas integer eget aliquet. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Bibendum arcu vitae elementum curabitur vitae nunc. At auctor urna nunc id cursus metus. Nisi porta lorem mollis aliquam ut porttitor leo a.`;
const ButtonStory = (storiesOf('Panel', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Row>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example default'}
                     footer={'Simple example default'}

              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example primary'}
                     footer={'Simple example primary'}
                     primary
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example secondary'}
                     footer={'Simple example secondary'}
                     secondary
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example warning'}
                     footer={'Simple example warning'}
                     warning
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example info'}
                     footer={'Simple example info'}
                     info
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example success'}
                     footer={'Simple example success'}
                     success
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Simple example danger'}
                     footer={'Simple example danger'}
                     danger
              >
                {lorem}
              </Panel>
            </Col>
            <Col lg6 style={{marginBottom:20}}>
              <Panel header={'Without Footer'}
                     danger
              >
                {lorem}
              </Panel>
            </Col>
          </Row>

        </div>
    )

);

export default  ButtonStory;