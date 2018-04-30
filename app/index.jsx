import { render, h, Component } from 'preact';
import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import * as S from 'styling';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import 'preact/devtools';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <S.Banner>
                        <S.Container>
                            <S.NavContainer>
                                <h1>Ginevra Floridi</h1>
                                <S.Nav>
                                    <S.NavItem><NavLink exact activeClassName='selected' to='/'>Home</NavLink></S.NavItem>
                                    <S.NavItem><NavLink exact activeClassName='selected' to='/research'>Research</NavLink></S.NavItem>
                                    <S.NavItem><NavLink exact activeClassName='selected' to='/teaching'>Teaching</NavLink></S.NavItem>
                                    <S.NavItem><NavLink exact activeClassName='selected' to='/contact'>Contact</NavLink></S.NavItem>
                                </S.Nav>
                            </S.NavContainer>
                        </S.Container>
                    </S.Banner>
                    <S.Container>
                        <S.PageContent>
                            <Route exact path="/" component={Home}/>
                            <Route path="/research" component={Research}/>
                            <Route path="/teaching" component={Teaching}/>
                            <Route path="/contact" component={Contact}/>
                        </S.PageContent>
                    </S.Container>
                </div>
            </Router>
        );
    }
}

class ComponentWithData extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
    this.renderMain = this.renderMain.bind(this);
    this.state = { data: null };
  }
  getData(id) {
    if (this.state.data) return null;
    const url = `/blob/${id}`;
    fetch(url)
      .then(response => response.blob())
      .then(response => {
        var reader = new FileReader();
        reader.onload = () => {
          this.setState({data: reader.result});
        };
        reader.readAsText(response);
      });
  }
  createMarkup() {
    return { __html: this.state.data };
  }
  render() {
    if (!this.state.data) return (<div></div>);
    return this.renderMain();
  }
}

class Home extends ComponentWithData {
  componentWillMount() {
    this.getData("homepage");
  }
  renderMain() {
    return (
        <div>
          <S.Img src='https://i.imgur.com/KypHy4z.jpg'/>
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </div>
    );
  }
}

class Research extends ComponentWithData {
  componentWillMount() {
    this.getData("research");
  }
  renderMain() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

class Teaching extends ComponentWithData {
  componentWillMount() {
    this.getData("teaching");
  }
  renderMain() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

class Contact extends ComponentWithData {
  componentWillMount() {
    this.getData("contact");
  }
  renderMain() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()}></div>
    );
  }
}

render(
        <App/>,
    document.getElementById('root')
);
