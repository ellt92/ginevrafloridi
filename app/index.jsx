import { render, h, Component } from "preact";
import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import * as S from "styling";
import { extendObservable } from "mobx";
import { Provider, inject, observer } from "mobx-react";

import "preact/devtools";

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
                  <S.NavItem>
                    <NavLink exact activeClassName="selected" to="/">
                      Home
                    </NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <NavLink exact activeClassName="selected" to="/research">
                      Research
                    </NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <NavLink exact activeClassName="selected" to="/teaching">
                      Teaching
                    </NavLink>
                  </S.NavItem>
                  <S.NavItem>
                    <NavLink exact activeClassName="selected" to="/contact">
                      Contact
                    </NavLink>
                  </S.NavItem>
                </S.Nav>
              </S.NavContainer>
            </S.Container>
          </S.Banner>
          <S.Container>
            <S.PageContent>
              <Route exact path="/" component={Home} />
              <Route path="/research" component={Research} />
              <Route path="/teaching" component={Teaching} />
              <Route path="/contact" component={Contact} />
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
  }
  getData(id) {
    if (this.props.data[this.id]) return null;
    const url = `/blob/${this.id}`;
    fetch(url)
      .then(response => response.blob())
      .then(response => {
        var reader = new FileReader();
        reader.onload = () => {
          this.props.data[this.id] = reader.result;
        };
        reader.readAsText(response);
      });
  }
  createMarkup() {
    return { __html: this.props.data[this.id] };
  }
  render() {
    if (!this.props.data[this.id]) return <div />;
    return this.renderMain();
  }
}

@inject("data")
@observer
class Home extends ComponentWithData {
  constructor(props) {
    super(props);
    this.id = "homepage";
  }
  componentWillMount() {
    this.getData();
  }
  renderMain() {
    return (
      <div>
        <S.Img src="https://i.imgur.com/aCgIj79.jpg" />
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}

@inject("data")
@observer
class Research extends ComponentWithData {
  constructor(props) {
    super(props);
    this.id = "research";
  }
  componentWillMount() {
    this.getData("research");
  }
  renderMain() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}

@inject("data")
@observer
class Teaching extends ComponentWithData {
  constructor(props) {
    super(props);
    this.id = "teaching";
  }
  componentWillMount() {
    this.getData("teaching");
  }
  renderMain() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}

@inject("data")
@observer
class Contact extends ComponentWithData {
  constructor(props) {
    super(props);
    this.id = "contact";
  }
  componentWillMount() {
    this.getData("contact");
  }
  renderMain() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}

class Data {
  constructor() {
    extendObservable(this, {
      homepage: undefined,
      research: undefined,
      teaching: undefined,
      contact: undefined
    });
  }
}

const data = new Data();

render(
  <Provider data={data}>
    <App />
  </Provider>,
  document.getElementById("root")
);
