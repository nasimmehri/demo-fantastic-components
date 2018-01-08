import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Collapsible, Row, Col, Panel} from 'fantastic-components';
const tabs = [
  {title: 'Tab 1', content: (<div> Contetnt 1</div>)},
  {
    title: 'Tab 2', content: (<div> Content 2</div>)
  },
  {
    title: 'Tab 3', content: (<div> Content 3</div>)
  }
];
const CollapsibleStory = (storiesOf('Collapsible', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Row>
            <Col lg6>
              <Panel header={'Simple example,transitionTime :400'}>
                <Collapsible trigger="Start here" transitionTime={400}>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} primary>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} secondary>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} warning>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} info>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} danger>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>
                <br/>
                <Collapsible trigger="Start here" transitionTime={400} success>
                  <p>This is the collapsible content. It can be any element or React component you like.</p>
                  <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'transitionTime :400'}>
                <Collapsible trigger="Start here" transitionTime={200}>
                  <br/>
                  <Container>
                    <Collapsible trigger="Start here" transitionTime={400}>
                      <Container>
                        <p>This is the collapsible content. It can be any element or React component you like.</p>
                        <p>It can even be another Collapsible component. Check out the next section!</p>
                        <Collapsible trigger="Start here" transitionTime={400}>
                          <p>This is the collapsible content. It can be any element or React component you like.</p>
                          <p>It can even be another Collapsible component. Check out the next section!</p>
                        </Collapsible>
                      </Container>

                    </Collapsible>
                    <br/>
                    <Collapsible trigger="Start here" transitionTime={400}>
                      <p>This is the collapsible content. It can be any element or React component you like.</p>
                      <p>It can even be another Collapsible component. Check out the next section!</p>
                    </Collapsible>
                    <br/>
                    <Collapsible trigger="Start here" transitionTime={400}>
                      <p>This is the collapsible content. It can be any element or React component you like.</p>
                      <p>It can even be another Collapsible component. Check out the next section!</p>
                    </Collapsible>
                  </Container>

                </Collapsible>
              </Panel>
            </Col>
          </Row>


        </div>
    )

);

export default  CollapsibleStory;