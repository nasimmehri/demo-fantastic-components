import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, Modal, Row, Col, Panel, Button, DrawerIcon, Drawer} from 'fantastic-components';
import {State, Store} from '@sambego/storybook-state';
const store = new Store({
  showNav: true
});
const storePrimary = new Store({
  showNav: true
});
const storeSecodary = new Store({
  showNav: true
});
const storeSuccess = new Store({
  showNav: true
});
const storeDanger = new Store({
  showNav: true
});
const storeInfo = new Store({
  showNav: true
});
const storeWarning = new Store({
  showNav: true
});
const DrawerStory = (storiesOf('Drawer', module)

    .add(
      'Default Example',
      () =>
        <div>

          <State store={store}>
            <Drawer
              showNav={store.get('showNav')}
              onHideNav={() => store.set({showNav: !store.get('showNav')})}
              title="Hello World"
              primary={store.get('primary')}
            />

          </State>
          <DrawerIcon onClick={() => store.set({showNav: !store.get('showNav')})} openFromRight={true}/>

        </div>
    )
    .add(
      'Primary Example',
      () =>
        <div>

          <State store={storePrimary}>
            <Drawer
              showNav={storePrimary.get('showNav')}
              onHideNav={() => storePrimary.set({showNav: !storePrimary.get('showNav')})}
              title="Hello World"
              primary
            />

          </State>
          <DrawerIcon onClick={() => storePrimary.set({showNav: !storePrimary.get('showNav')})} openFromRight={true}
                      primary/>
        </div>
    )
    .add(
      'Secondary Example',
      () =>
        <div>

          <State store={storeSecodary}>
            <Drawer
              showNav={storeSecodary.get('showNav')}
              onHideNav={() => storeSecodary.set({showNav: !storeSecodary.get('showNav')})}
              title="Hello World"
              secondary
            />

          </State>
          <DrawerIcon onClick={() => storeSecodary.set({showNav: !storeSecodary.get('showNav')})} openFromRight={true}
                      secondary/>
        </div>
    )
    .add(
      'Success Example',
      () =>
        <div>
          <State store={storeSuccess}>
            <Drawer
              showNav={storeSuccess.get('showNav')}
              onHideNav={() => storeSuccess.set({showNav: !storeSuccess.get('showNav')})}
              title="Hello World"
              success
            />

          </State>
          <DrawerIcon onClick={() => storeSuccess.set({showNav: !storeSuccess.get('showNav')})} openFromRight={true}
                      success/>
        </div>
    )
    .add(
      'Danger Example',
      () =>
        <div>
          <State store={storeDanger}>
            <Drawer
              showNav={storeDanger.get('showNav')}
              onHideNav={() => storeDanger.set({showNav: !storeDanger.get('showNav')})}
              title="Hello World"
              danger
            />

          </State>
          <DrawerIcon onClick={() => storeDanger.set({showNav: !storeDanger.get('showNav')})} openFromRight={true}
                      danger/>
        </div>
    )
    .add(
      'Info Example',
      () =>
        <div>
          <State store={storeInfo}>
            <Drawer
              showNav={storeInfo.get('showNav')}
              onHideNav={() => storeInfo.set({showNav: !storeInfo.get('showNav')})}
              title="Hello World"
              info
            />

          </State>
          <DrawerIcon onClick={() => storeInfo.set({showNav: !storeInfo.get('showNav')})} openFromRight={true} info/>
        </div>
    )
    .add(
      'Warning Example',
      () =>
        <div>
          <State store={storeWarning}>
            <Drawer
              showNav={storeWarning.get('showNav')}
              onHideNav={() => storeWarning.set({showNav: !storeWarning.get('showNav')})}
              title="Hello World"
              warning
            />

          </State>
          <DrawerIcon onClick={() => storeWarning.set({showNav: !storeWarning.get('showNav')})} openFromRight={true}
                      warning/>
        </div>
    )
);

export default DrawerStory;