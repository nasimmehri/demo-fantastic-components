import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {Container, Search, Row, Col, Panel} from 'fantastic-components';

let items = [
  {
    value: 'Java',
    id: '1'
  },
  {
    value: 'Javascript',
    id: '2'
  },
  {
    value: 'C#',
    id: '3'
  },
  {
    value: 'PHP',
    id: '4'
  },
  {
    value: 'Pascal',
    id: '5'
  },
  {
    value: 'Roby',
    id: '6'
  },
];

const SearchStory = (storiesOf('Search', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Default example'}>
            <Col lg4 md6 sm12>
              <Search label={'Default Search list'}
                      suggestionList={items}
                      onSuggestionClick={action('onSuggestionClick')}
                      onValueChanged={action('onValueChanged')}
                      onKeyPress={action('onKeyPress')}
                      onSearch={action('onSearch')}
                      />
            </Col>
          </Panel>
          <br/>
          <Panel header={'Example'}>
            <Row>

              <Col lg4 md6 sm12>
                <Search label={'Primary Search list'}
                        primary
                        suggestionList={items}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
              <Col lg4 md6 sm12>
                <Search label={'Secondary Search list'}
                        secondary
                        suggestionList={items}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
              <Col lg4 md6 sm12>
                <Search label={'Danger Search list'}
                        danger
                        suggestionList={items}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
              <Col lg4 md6 sm12>
                <Search label={'Info Search list'}
                        info
                        suggestionList={items}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
              <Col lg4 md6 sm12>
                <Search label={'Success Search list'}
                        success
                        suggestionList={items}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
              <Col lg4 md6 sm12>
                <Search label={'Warning Search list'}
                        warning
                        suggestionList={items}
                        onSuggestionClick={action('onSuggestionClick')}
                        onValueChanged={action('onValueChanged')}
                        onKeyPress={action('onKeyPress')}
                        onSearch={action('onSearch')}/>
              </Col>
            </Row>
          </Panel>
        </div>
    )

);

export default  SearchStory;