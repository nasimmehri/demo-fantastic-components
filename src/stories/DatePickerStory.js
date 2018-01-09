import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, DatePicker, Row, Col, Panel} from 'fantastic-components';
import moment from 'moment';

const DatePickerStory = (storiesOf('DatePicker', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Row>
            <Col lg6 md6 sm12 style={{marginBottom: 5}}>
              <Panel header={'Default DatePicker'}>

                <DatePicker date={moment(new Date())}
                            onChange={action('onChange')}
                />

              </Panel>
            </Col>
            <Col lg6 md6 sm12 style={{marginBottom: 5}}>
              <Panel header={'Show time'}>

                <DatePicker date={moment(new Date())}
                            onChange={action('onChange')}
                            showTime/>

              </Panel>
            </Col>
          </Row>
          <Panel header={'Theme Examples'}>
            <Row>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} primary onChange={action('onChange')}/>
              </Col>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} secondary onChange={action('onChange')}/>
              </Col>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} info onChange={action('onChange')}/>
              </Col>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} warning onChange={action('onChange')}/>
              </Col>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} success onChange={action('onChange')}/>
              </Col>
              <Col lg4 md6 sm12 style={{marginBottom: 5}}>
                <DatePicker date={moment(new Date())} danger onChange={action('onChange')}/>
              </Col>
            </Row>


          </Panel>

        </div>
    )

);

export default  DatePickerStory;