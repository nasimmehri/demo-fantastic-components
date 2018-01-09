import React from 'react';
import {storiesOf} from '@storybook/react';
import { Row, Col, Panel} from 'fantastic-components';
import styled from 'styled-components';
const Div = styled.div`    
        height:20px; 
        text-align:center;
        margin:5px;
        background-color:#eeeeee;`;
const ColStory = (storiesOf('Grid System', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Grid system'}>
            <Row>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
              <Col lg1 md2 sm3><Div>lg1 md2 sm3</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>
              <Col lg2 md3 sm6><Div>lg2 md3 sm6</Div></Col>

            </Row>
            <br/>
            <Row>
              <Col lg3 md4 sm6><Div>lg3 md4 sm6</Div></Col>
              <Col lg3 md4 sm6><Div>lg3 md4 sm6</Div></Col>
              <Col lg3 md4 sm6><Div>lg3 md4 sm6</Div></Col>
              <Col lg3 md4 sm6><Div>lg3 md4 sm6</Div></Col>

            </Row>
            <br/>
            <Row>
              <Col lg4 md6 sm12><Div>lg4 md6 sm12</Div></Col>
              <Col lg4 md6 sm12><Div>lg4 md6 sm12</Div></Col>
              <Col lg4 md6 sm12><Div>lg4 md6 sm12</Div></Col>

            </Row>
          </Panel>
          <br/>
          <Panel header={'Col lg'}>
            <Row>
              <Col lg12><Div>Col lg 12</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg6><Div>Col lg 6</Div></Col>
              <Col lg6><Div>Col lg 6</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg4><Div>Col lg 4</Div></Col>
              <Col lg4><Div>Col lg 4</Div></Col>
              <Col lg4><Div>Col lg 4</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg3><Div>Col lg 3</Div></Col>
              <Col lg3><Div>Col lg 3</Div></Col>
              <Col lg3><Div>Col lg 3</Div></Col>
              <Col lg3><Div>Col lg 3</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg2><Div>Col lg 2</Div></Col>
              <Col lg2><Div>Col lg 2</Div></Col>
              <Col lg2><Div>Col lg 2</Div></Col>
              <Col lg2><Div>Col lg 2</Div></Col>
              <Col lg2><Div>Col lg 2</Div></Col>
              <Col lg2><Div>Col lg 2</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
              <Col lg1><Div>Col lg 1</Div></Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Col md'}>
            <Row>
              <Col md12><Div>Col md 12</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col md6><Div>Col md 6</Div></Col>
              <Col md6><Div>Col md 6</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col md4><Div>Col md 4</Div></Col>
              <Col md4><Div>Col md 4</Div></Col>
              <Col md4><Div>Col md 4</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col md3><Div>Col md 3</Div></Col>
              <Col md3><Div>Col md 3</Div></Col>
              <Col md3><Div>Col md 3</Div></Col>
              <Col md3><Div>Col md 3</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col md2><Div>Col md 2</Div></Col>
              <Col md2><Div>Col md 2</Div></Col>
              <Col md2><Div>Col md 2</Div></Col>
              <Col md2><Div>Col md 2</Div></Col>
              <Col md2><Div>Col md 2</Div></Col>
              <Col md2><Div>Col md 2</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
              <Col md1><Div>Col md 1</Div></Col>
            </Row>
          </Panel>
          <br/>
          <Panel header={'Col sm'}>
            <Row>
              <Col  sm12><Div>Col sm 12</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col sm6><Div>Col sm 6</Div></Col>
              <Col sm6><Div>Col sm 6</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col sm4><Div>Col sm 4</Div></Col>
              <Col sm4><Div>Col sm 4</Div></Col>
              <Col sm4><Div>Col sm 4</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col sm3><Div>Col sm 3</Div></Col>
              <Col sm3><Div>Col sm 3</Div></Col>
              <Col sm3><Div>Col sm 3</Div></Col>
              <Col sm3><Div>Col sm 3</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col sm2><Div>Col sm 2</Div></Col>
              <Col sm2><Div>Col sm 2</Div></Col>
              <Col sm2><Div>Col sm 2</Div></Col>
              <Col sm2><Div>Col sm 2</Div></Col>
              <Col sm2><Div>Col sm 2</Div></Col>
              <Col sm2><Div>Col sm 2</Div></Col>
            </Row>
            <br/>
            <Row>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
              <Col sm1><Div>Col sm 1</Div></Col>
            </Row>
          </Panel>
        </div>
    )

);

export default  ColStory;