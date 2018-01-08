import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, TagEditor, Row, Col, Panel} from 'fantastic-components';
import {State, Store} from '@sambego/storybook-state';

const storeTag = new Store({
  suggestionList: [
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
  ],
  tags: []
});


const TagEditorStory = (storiesOf('TagEditor', module)
    .add(
      'Selected Examples',
      () =>
        <div>
          <Panel header={'Default example'}>
            <Col lg4 md6 sm12>
              <State store={storeTag}>
              <TagEditor label={'Default Search list'}
                         suggestionList={storeTag.get('suggestionList')}
                         tags={storeTag.get('tags')}
                         value={''}
                         onChangeTag={(value, tags) =>  {
                           let arraytags = [];
                           for (let i = 0; i < tags.length; i++) {
                             let obj = {
                               id: tags[i].id,
                               value: tags[i].value
                             };
                             arraytags.push(obj);
                           }
                           storeTag.set({
                             suggestionList: value,
                             tags: arraytags
                           });

                         }}
                         onSuggestionClick={action('onSuggestionClick')}
                         onValueChanged={action('onValueChanged')}
                         onKeyPress={action('onKeyPress')}
                         onSearch={action('onSearch')}
                       />
              </State>
            </Col>

          </Panel>

        </div>
    )

);

export default  TagEditorStory;