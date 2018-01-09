import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Modal, Row, Col, Panel, Button} from 'fantastic-components';
import {State, Store} from '@sambego/storybook-state';
const store = new Store({
  isOpen: false
});
const storePrimary = new Store({
  isOpen: false
});
const storeSecondary = new Store({
  isOpen: false
});
const storeInfo = new Store({
  isOpen: false
});
const storeDanger = new Store({
  isOpen: false
});
const storeSuccess = new Store({
  isOpen: false
});
const storeWarning = new Store({
  isOpen: false
});
const storeMaxWith = new Store({
  isOpen: false
});
const storeNoFooter = new Store({
  isOpen: false
});
const storeButtons = new Store({
  isOpen: false
});

let lorem=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Quis eleifend quam adipiscing vitae. Sit amet justo donec enim diam vulputate ut pharetra sit. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Neque gravida in fermentum et sollicitudin ac orci phasellus. Quam adipiscing vitae proin sagittis. Velit scelerisque in dictum non consectetur a. Pulvinar etiam non quam lacus. Auctor eu augue ut lectus arcu bibendum. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Eu feugiat pretium nibh ipsum consequat nisl. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Semper quis lectus nulla at volutpat. Et malesuada fames ac turpis egestas integer eget aliquet. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Bibendum arcu vitae elementum curabitur vitae nunc. At auctor urna nunc id cursus metus. Nisi porta lorem mollis aliquam ut porttitor leo a.`;
let lorem2=`Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Pretium lectus quam id leo in vitae turpis. Eget velit aliquet sagittis id consectetur purus ut faucibus. Leo in vitae turpis massa sed. Felis eget nunc lobortis mattis. Gravida rutrum quisque non tellus. Justo donec enim diam vulputate ut. Urna et pharetra pharetra massa massa ultricies. In mollis nunc sed id semper. Amet luctus venenatis lectus magna fringilla. Condimentum mattis pellentesque id nibh tortor id. Leo in vitae turpis massa sed elementum tempus egestas. Tellus mauris a diam maecenas sed enim ut sem. Massa vitae tortor condimentum lacinia. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Adipiscing diam donec adipiscing tristique risus. Faucibus in ornare quam viverra orci sagittis. Est lorem ipsum dolor sit amet consectetur adipiscing. Duis ut diam quam nulla porttitor.`
const ModalStory = (storiesOf('Modal', module)
    .add(
      'Examples',
      () =>
        <Container>
          <Row>
            <State store={storeButtons}>
              <Modal isOpen={storeButtons.get('isOpen')}
                     title={'Modal With Buttons in Footer'}
                     allowClose
                     iconTitle="envelope"
                     Btn1Label={'yes'}
                     Btn2Label={'No'}
                     Btn3Label={'Cancel'}
                     Btn3action={()=> storeButtons.set({isOpen: false})}
                     Btn1Type="primary"
                     Btn2Type="secondary"
                     onClose={() => storeButtons.set({isOpen: !storeButtons.get('isOpen')})}
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}
              </Modal>
            </State>
            <State store={storeNoFooter}>
              <Modal isOpen={storeNoFooter.get('isOpen')}
                     title={'Modal Without Footer'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeNoFooter.set({isOpen: !storeNoFooter.get('isOpen')})}
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}
              </Modal>
            </State>
            <State store={store}>
              <Modal isOpen={store.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => store.set({isOpen: !store.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}
              </Modal>
            </State>
            <State store={storePrimary}>
              <Modal isOpen={storePrimary.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storePrimary.set({isOpen: !storePrimary.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     primary
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeSecondary}>
              <Modal isOpen={storeSecondary.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeSecondary.set({isOpen: !storeSecondary.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     secondary
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeInfo}>
              <Modal isOpen={storeInfo.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeInfo.set({isOpen: !storeInfo.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     info
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeDanger}>
              <Modal isOpen={storeDanger.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeDanger.set({isOpen: !storeDanger.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     danger
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeSuccess}>
              <Modal isOpen={storeSuccess.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeSuccess.set({isOpen: !storeSuccess.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     success
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeWarning}>
              <Modal isOpen={storeWarning.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     onClose={() => storeWarning.set({isOpen: !storeWarning.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}
                     warning
                     maxWidth={'500px'}

              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <State store={storeMaxWith}>
              <Modal isOpen={storeMaxWith.get('isOpen')}
                     title={'Modal'}
                     allowClose
                     iconTitle="envelope"
                     maxWidth={'700px'}
                     onClose={() => storeMaxWith.set({isOpen: !storeMaxWith.get('isOpen')})}
                     footerChildren={<div><b>footer</b></div>}


              >{lorem} <br/><br/>{lorem2}</Modal>
            </State>
            <Col lg6>
              <Panel header={'Default Modal'}>
                <Button onClick={() => store.set({isOpen: !store.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Primary Modal'}>

                <Button primary onClick={() => storePrimary.set({isOpen: !storePrimary.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Secondary Modal'}>

                <Button secondary onClick={() => storeSecondary.set({isOpen: !storeSecondary.get('isOpen')})}
                        label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Info Modal'}>

                <Button info onClick={() => storeInfo.set({isOpen: !storeInfo.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Danger Modal'}>

                <Button danger onClick={() => storeDanger.set({isOpen: !storeDanger.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Success Modal'}>

                <Button success onClick={() => storeSuccess.set({isOpen: !storeSuccess.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Warning Modal'}>

                <Button warning onClick={() => storeWarning.set({isOpen: !storeWarning.get('isOpen')})} label={'Show'}/>
              </Panel>
              <br/>
            </Col>
            <Col lg6>
              <Panel header={'Modal with maxWithProps:700px'}>

                <Button onClick={() => storeMaxWith.set({isOpen: !storeMaxWith.get('isOpen')})} label={'Show'}/>
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Modal Without Footer'}>

                <Button onClick={() => storeNoFooter.set({isOpen: !storeNoFooter.get('isOpen')})} label={'Show'}/>
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Modal With Buttons in footer'}>

                <Button onClick={() => storeButtons.set({isOpen: !storeButtons.get('isOpen')})} label={'Show'}/>
              </Panel>
            </Col>
          </Row>
        </Container>
    )

);

export default  ModalStory;