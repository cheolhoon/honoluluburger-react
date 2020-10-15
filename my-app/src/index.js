import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Grid, Image, Form, Button, List, Menu } from 'semantic-ui-react';

class HonoluluBurgerLogo extends React.Component {
  render() {
    return (
        <Image src="https://dekkagency.com/honoluluburgerco/wp-content/uploads/2018/06/honolulu-burger-co.png"
               alt="logo"
               centered/>
    )
  }
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Grid container centered>
            <Menu.Item>HOME</Menu.Item>
            <Dropdown.item text='MENUS'>
              <Dropdown.Menu>
                <Dropdown.Item>Order Takeout</Dropdown.Item>
                <Dropdown.Item>Japanese Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.item>
            <Menu.Item>ABOUT</Menu.Item>
            <Menu.Item>LOCATION</Menu.Item>
            <Menu.Item>SPECIALS</Menu.Item>
            <Menu.Item>MERCHANDISE</Menu.Item>
            <Menu.Item>THE BUZZ</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image
            src="https://scontent.fhnl1-1.fna.fbcdn.net/v/t1.0-9/36428315_2018658134812184_3604994462188568576_o.jpg?_nc_cat=102&_nc_sid=dd9801&_nc_ohc=_s1WdqUyMIgAX8WUFL1&_nc_ht=scontent.fhnl1-1.fna&oh=f3e1b8a830b2ef966a8126407fe6e183&oe=5FAE820B"
            alt="" fluid/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='middlemenu'>
          <Grid container columns={3}>
            <Grid.Column>
              <List>
                <List.Item>
                  <Image src="https://honoluluburgerco.com/wp-content/uploads/2018/06/HBC-takeout-icon.png"
                         alt="takeout-icon" centered/>
                </List.Item>
                <List.Item>If you can click it you can eat it! Pay online and have your order
                  ready when you arrive!
                </List.Item>
                <Form>
                  <Form.Input>
                    <Button>ORDER TAKEOUT</Button>
                  </Form.Input>
                </Form>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <Image src="https://honoluluburgerco.com/wp-content/uploads/2018/06/HBC-truck-icon.png"
                         alt="truck-icon" centered/>
                </List.Item>
                <List.Item>Check out our pop-up menu, times and locations. Enjoy one of our
                  burgers at a Local Farmer's Market or Downtown on your lunch break!
                </List.Item>
                <Form>
                  <Form.Input>
                    <Button>FOOD TRUCK</Button>
                  </Form.Input>
                </Form>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item>
                  <Image src="https://honoluluburgerco.com/wp-content/uploads/2018/06/HBC-burger-icon.png"
                         alt="burger-icon" centered/>
                </List.Item>
                <List.Item>We are always putting out new specials and promotions for big and
                  small cravings. Check our Specials and Instagram page for the latest deals.
                </List.Item>
                <Form>
                  <Form.Input>
                    <Button>SPECIAL</Button>
                  </Form.Input>
                </Form>
              </List>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Menu borderless className='footermenu'>
          <Menu.Item>
            <Image
                src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/121366495_104291714742295_1986660493820093494_n.jpg?_nc_cat=109&_nc_sid=8ae9d6&_nc_ohc=2Ts-ZZysZgcAX-4p8EL&_nc_ht=scontent-iad3-1.cdninstagram.com&oh=2bdcde4631755eb30bbebf423d11bc9d&oe=5FAEB956"
                width="150px" alt=""/>
          </Menu.Item>
          <Menu.Item>
            <Image
                src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/120973712_3287826494606031_7745300155584556544_n.jpg?_nc_cat=110&_nc_sid=8ae9d6&_nc_ohc=ryYFIGEFeiYAX--j1hB&_nc_ht=scontent-iad3-1.cdninstagram.com&oh=d967973bc786d0c3964fd8ef99ce2bf7&oe=5FAEBBB9"
                width="150px" alt=""/>
          </Menu.Item>
          <Menu.Item>
            <Image
                src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/120844151_981031925698990_1902316528678192751_n.jpg?_nc_cat=105&_nc_sid=8ae9d6&_nc_ohc=xP0qnMVvKLMAX-_-hjv&_nc_ht=scontent-iad3-1.cdninstagram.com&oh=f8770c6bc2e12b2cf88a727dc1edf815&oe=5FAE4D61"
                width="150px" alt=""/>
          </Menu.Item>
          <Menu.Item>
            <Image
                src="https://scontent-iad3-1.cdninstagram.com/v/t51.29350-15/119993067_760503727857081_8621889021097275721_n.jpg?_nc_cat=104&_nc_sid=8ae9d6&_nc_ohc=mj1zyXtlnJkAX9Xc98X&_nc_ht=scontent-iad3-1.cdninstagram.com&oh=b486caa2267a5241be430d3e7179e47c&oe=5FAC71D8"
                width="150px" alt=""/>
          </Menu.Item>
        </Menu>
    )
  }
}

class HonoluluBurger extends React.Component {

  render() {
    return (
        <div>
          <HonoluluBurgerLogo/>
          <TopMenu/>
          <FullWidthImage/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<HonoluluBurger/>, document.getElementById('root'));
