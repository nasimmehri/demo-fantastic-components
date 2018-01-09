import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Pagination, Row, Col, Panel} from 'fantastic-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {State, Store} from '@sambego/storybook-state';
const store = new Store({
  current: 7
});

const storePrimary = new Store({
  current: 7
});

const storeSecondary = new Store({
  current: 7
});

const storeInfo = new Store({
  current: 7
});

const storeWarning = new Store({
  current: 7
});
const storeDanger = new Store({
  current: 7
});
const storeSuccess = new Store({
  current: 7
});
const storeDefault = new Store({
  current: 14
});
const PaginationStory = (storiesOf('Pagination', module)
    .add(
      'Selected Examples',
      () =>
        <Router>
          <div>
            <Panel header={'Default example'}>
              <Row>
                <Col lg6 md6 sm12>
                  <State store={store}>
                    <Pagination
                      total={11}
                      current={store.get('current')}
                      visiblepages={3}
                      titles={{
                        first: 'first',
                        prev: '\u00AB',
                        prevSet: '...',
                        nextSet: '...',
                        next: '\u00BB',
                        last: 'last'
                      }}
                      onPageChanged={(newPage) => {
                        store.set({
                          current: newPage
                        });
                      }}
                    />
                  </State>
                </Col>
              </Row>


            </Panel>
            <br/>
            <Panel header={'Theme example'}>
              <Row>
                <Col lg6 md6 sm12>
                  <State store={storePrimary}>
                    <Pagination
                      total={11}
                      current={storePrimary.get('current')}
                      visiblePages={3}
                      primary
                      titles={{
                        first: 'first',
                        prev: '\u00AB',
                        prevSet: '...',
                        nextSet: '...',
                        next: '\u00BB',
                        last: 'last'
                      }}
                      onPageChanged={(newPage) => {
                        storePrimary.set({
                          current: newPage
                        });
                      }}
                    />
                  </State>
                </Col>
                <Col lg6 md6 sm12>
                  <State store={storeSecondary}>
                    <Pagination
                      total={11}
                      current={storeSecondary.get('current')}
                      visiblePages={3}
                      secondary
                      titles={{
                        first: 'first',
                        prev: '\u00AB',
                        prevSet: '...',
                        nextSet: '...',
                        next: '\u00BB',
                        last: 'last'
                      }}
                      onPageChanged={(newPage) => {
                        storeSecondary.set({
                          current: newPage
                        });
                      }}
                    />
                  </State>
                </Col>
                <Col lg6 md6 sm12>
                  <State store={storeInfo}>
                    <Pagination
                      total={11}
                      current={storeInfo.get('current')}
                      visiblePages={3}
                      titles={{
                        first: 'first',
                        prev: '\u00AB',
                        prevSet: '...',
                        nextSet: '...',
                        next: '\u00BB',
                        last: 'last'
                      }}
                      info
                      onPageChanged={(newPage) => {
                        storeInfo.set({
                          current: newPage
                        });
                      }}
                    />
                  </State>
                </Col>
                <Col lg6 md6 sm12>
                  <State store={storeWarning}>
                    <Pagination
                      total={11}
                      current={storeWarning.get('current')}
                      visiblePages={3}
                      titles={{
                        first: 'first',
                        prev: '\u00AB',
                        prevSet: '...',
                        nextSet: '...',
                        next: '\u00BB',
                        last: 'last'
                      }}
                      warning
                      onPageChanged={(newPage) => {
                        storeWarning.set({
                          current: newPage
                        });
                      }}
                    />
                  </State>
                </Col>
                <Col lg6 md6 sm12>
                  <State store={storeDanger}>
                  <Pagination
                    total={11}
                    current={storeDanger.get('current')}
                    visiblePages={3}
                    titles={{
                      first: 'first',
                      prev: '\u00AB',
                      prevSet: '...',
                      nextSet: '...',
                      next: '\u00BB',
                      last: 'last'
                    }}
                    danger
                    onPageChanged={(newPage) => {
                      storeDanger.set({
                        current: newPage
                      });
                    }}
                  />
                  </State>
                </Col>
                <Col lg6 md6 sm12>
                  <State store={storeSuccess}>
                  <Pagination
                    total={11}
                    current={storeSuccess.get('current')}
                    visiblePages={3}
                    titles={{
                      first: 'first',
                      prev: '\u00AB',
                      prevSet: '...',
                      nextSet: '...',
                      next: '\u00BB',
                      last: 'last'
                    }}
                    success
                    onPageChanged={(newPage) => {
                      storeSuccess.set({
                        current: newPage
                      });
                    }}
                  />
                  </State>
                </Col>
              </Row>


            </Panel>
            <br/>
            <Panel header={'visiblePages : 8 '}>
              <Row>
                <Col lg6 md6 sm12>
                  <State store={storeDefault}>
                  <Pagination
                    total={30}
                    current={storeDefault.get('current')}
                    visiblePages={8}
                    titles={{
                      first: 'first',
                      prev: '\u00AB',
                      prevSet: '...',
                      nextSet: '...',
                      next: '\u00BB',
                      last: 'last'
                    }}
                    onPageChanged={(newPage) => {
                      storeDefault.set({
                        current: newPage
                      });
                    }}
                  />
                  </State>
                </Col>
              </Row>


            </Panel>
          </div>
        </Router>
    )

);

export default  PaginationStory;