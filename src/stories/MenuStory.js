import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Container, MenuResponsive, Row, Col, Panel, Menu} from 'fantastic-components';
import {BrowserRouter as Router} from 'react-router-dom';
let mainItems = [
  {
    link: '/home',
    title: 'Home',
    subItems: []
  },
  {
    link: '/about',
    title: 'Contact'
  },
  {
    link: '/about',
    title: 'About',
    subItems: [
      {
        link: '/home',
        title: 'Sub Item 1'
      },
      {
        link: '/home',
        title: 'Sub Item 2'
      },
      {
        link: '/home',
        title: 'Sub Item 3'
      }
    ]
  }
];
const MenuStory = (storiesOf('Menu', module)
    .add(
      'Selected Examples',
      () =>
        <Router>
          <Row>
            <Col lg6>
              <Panel header={'Default Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Default Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Primary Menu'}>

                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  primary
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Primary Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  primary
                />

              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Secondary Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  secondary
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Secondary Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  secondary
                />

              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Warning Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  warning
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Warning Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  warning
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Danger Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  danger
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Danger Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  danger
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Info Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  info
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Info Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  info
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Success Menu'}>
                <Menu
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  success
                />
              </Panel>
            </Col>
            <Col lg6>
              <Panel header={'Success Responsive Menu'}>
                <MenuResponsive
                  mainItems={mainItems}
                  style={{marginBottom: '50px'}}
                  success
                />
              </Panel>
            </Col>
          </Row>
        </Router>
    )

);

export default  MenuStory;