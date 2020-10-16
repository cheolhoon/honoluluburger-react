import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Grid, Image, Form, Button, List, Menu, Icon } from 'semantic-ui-react';

class HonoluluBurgerLogo extends React.Component {
  render() {
    return (
        <div className="top-background">
          <Image src="https://dekkagency.com/honoluluburgerco/wp-content/uploads/2018/06/honolulu-burger-co.png"
                 width="170px" alt="logo"
                 centered/>
        </div>
    )
  }
}

class TopMenu extends React.Component {
  render() {
    return (

        <div className="topmenu">
          <Menu borderless className="ui borderless menu">
            <Grid container centered>
              <Menu.Item color='orange'>HOME</Menu.Item>
              <Dropdown item text='MENUS'>
                <Dropdown.Menu>
                  <Dropdown.Item>Order Takeout</Dropdown.Item>
                  <Dropdown.Item>Japanese Menu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>ABOUT</Menu.Item>
              <Menu.Item>LOCATION</Menu.Item>
              <Menu.Item>SPECIALS</Menu.Item>
              <Menu.Item>MERCHANDISE</Menu.Item>
              <Menu.Item>THE BUZZ</Menu.Item>
            </Grid>
          </Menu>
        </div>
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
                    <Button color='orange'>ORDER TAKEOUT</Button>
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
                    <Button color='orange'>FOOD TRUCK</Button>
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
                <List.Item color='black'>We are always putting out new specials and promotions for big and
                  small cravings. Check our Specials and Instagram page for the latest deals.
                </List.Item>
                <Form>
                  <Form.Input>
                    <Button color='orange'>SPECIAL</Button>
                  </Form.Input>
                </Form>
              </List>
            </Grid.Column>
          </Grid>
        </Menu>
    )
  }
}

class FooterImage extends React.Component {
  render() {
    return (
        <Image
            src="https://i.ibb.co/0t4qWcP/burger.png"
            alt="" fluid/>
    )
  }
}

class FooterButton extends React.Component {
  render() {
    return (

        <Menu container borderless className='footerbutton'>
          <Grid container centered>
            <List>
              <Form>
                <Form.Input>
                  <Button color='gray' position="right">Load More...</Button>
                  <Button color='light blue'>
                    <Menu.Item>
                      <Icon name="instagram icon"/>Follow on Instagram
                    </Menu.Item>
                  </Button>
                </Form.Input>
              </Form>
            </List>
          </Grid>
        </Menu>

    )
  }
}

class FooterLocation extends React.Component {
  render() {
    return (
        <Menu container borderless className='footerlocation'>
          <Grid container centered>
            <List>
              <List.Item>LOCATION</List.Item>
              <List.Item>1295 S. Beretania St. Honolulu, HI 96814</List.Item>
              <List.Item>Sun-Tues: 11am-6pm</List.Item>
              <List.Item>Wed-Sat: 11am-8pm</List.Item>
              <List.Item>Free Parking off Beretania Street</List.Item>
            </List>
          </Grid>
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
          <FooterImage/>
          <FooterButton/>
          <FooterLocation/>
        </div>
    );
  }
}

ReactDOM.render(<HonoluluBurger/>, document.getElementById('root'));
