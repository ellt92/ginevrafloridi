import { render, h, Component } from 'preact';
import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import * as S from 'styling';

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

class Home extends Component {
    render() {
        return (
            <div>
                <S.Img src='https://i.imgur.com/KypHy4z.jpg'/>
                <p>I am a PhD candidate in Demography at the <a href='http://www.lse.ac.uk/'>London School of Economics and Political Science (LSE)</a>. Before my PhD, I completed a BSc in Economics at the <a href='https://www.essex.ac.uk/'>University of Essex</a> and MSc’s in Population and Development and Social Research Methods at the LSE. In 2017, I conducted an Economic and Social Research Council (ESRC) funded research visit at the Graduate School of Public Health at <a href='http://health.snu.ac.kr/en'>Seoul National University in South Korea</a>.</p>
                <p>My <a href='#/research'>research</a> is broadly on individual ageing, with a focus on the interactions between the societal context in which older people live and their participation in socially productive roles. For my PhD thesis, I am using longitudinal survey data to analyse intergenerational transfers of support and participation in paid work and family care among middle-aged and older people in Italy and South Korea.</p>
                <p>My primary methods of analysis include multilevel models, multivariate analysis and causal inference methods. My <a href='#/teaching'>teaching</a> at the LSE also reflects my interest in quantitative social science research methods.</p>
                <p>I am a member of the <a href='http://www.lse.ac.uk/social-policy/research/Research-clusters/ALPHA'>Ageing, Lifecourse and Population Health Analysis - ALPHA</a> group.</p>
                <p>For more information, please <a href='mailto:g.floridi@lse.ac.uk?Subject=Hello'>get in touch</a> or download a copy of <a href='https://drive.google.com/file/d/1UJJkayEwCxR5YIRV2G_Tt-hnwmv2Bq8O/view?usp=sharing'>my CV</a>.</p>
            </div>
        );
    }
}

class Research extends Component {
    render() {
        return (
            <div>
                <h2>Publications</h2>
                <p><a href='https://www.tandfonline.com/doi/full/10.1080/21582041.2018.1448942'>Floridi, G. (2018): Social policies and intergenerational support in Italy and South Korea, Contemporary Social Science, published online: 12/03/2018. DOI: 10.1080/21582041.2018.1448942</a></p>
                <h2>Work in progress</h2>
                <p>Floridi, G.: Family matters: Comparing the predictors of paid work and informal caregiving after age 50 in Italy and South Korea. Submitted to the Journal of Gerontology: Series B (Social Sciences).</p>
                <p>Floridi, G. & Lauderdale, B.: Self-discovery method for supervised measurement: An application to the concept of ‘productive ageing’. In preparation</p>
                <h2>Selected conference presentations</h2>
                <h4>“Family matters: Comparing the predictors of paid work and informal caregiving after age 50 in Italy and South Korea”</h4>
                <ul>
                    <li>Forthcoming: Population Association of America Annual Conference, 26th – 28th April 2018, Denver, United States</li>
                    <li>Forthcoming: European Population Conference, 6th – 9th June 2018, Brussels, Belgium</li>
                </ul>
                <h4>“Working and informal caregiving among older Italian and South Korean parents”</h4>
                <ul>
                    <li>International Population Conference, International Union for the Scientific Study of Population, 29th October – 4th November 2017, Cape Town, South Africa</li>
                </ul>
                <h4>“Social policies and intergenerational support in Italy and South Korea”</h4>
                <ul>
                    <li>International Population Conference, International Union for the Scientific Study of Population, 29th October – 4th November 2017, Cape Town, South Africa</li>
                    <li>British Society for Population Studies Annual Meeting, 6th– 8th September 2017, Liverpool, UK</li>
                    <li>Korean Population Association Bi-annual Meeting, 21st July 2017, Seoul, South Korea</li>
                </ul>
            </div>
        );
    }
}

class Teaching extends Component {
    render() {
        return (
            <div>
                <h3>Guest lecturer</h3>
                <ul>
                    <li>Intermediate quantitative analysis (Postgraduate level) @ <a href='http://www.lse.ac.uk/methodology'>Department of Methodology</a>, LSE</li>
                </ul>
                <h3>Graduate teaching assistant</h3>
                <ul>
                    <li>Causal inference for observational and experimental studies (Postgraduate level) @ <a href='http://www.lse.ac.uk/methodology'>Department of Methodology</a>, LSE</li>
                    <li>Research methods for Social Policy (Undergraduate level) @ <a href='http://www.lse.ac.uk/social-policy'>Department of Social Policy</a>, LSE</li>
                    <li>Intermediate quantitative analysis (Postgraduate level) @ <a href='http://www.lse.ac.uk/methodology'>Department of Methodology</a>, LSE</li>
                </ul>
                <h3>Project officer (advice and support with dissertations)</h3>
                <ul>
                    <li>Executive Masters in Global Management dissertation (Postgraduate level) @ <a href='http://www.lse.ac.uk/management'>Department of Management</a>, LSE</li>
                </ul>
            </div>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <h4>Address:</h4>
                <p>
                    Ginevra Floridi<br/>
                    Department of Social Policy,<br/>
                    2nd Floor, Old Building,<br/>
                    London School of Economics and Political Science,<br/>
                    Houghton Street,<br/>
                    London WC2A 2AE
                </p>
                <h4>Email:</h4>
                <p>g.floridi@lse.ac.uk</p>
                <h4>Twitter:</h4>
                <p>@ginevra_floridi</p>
            </div>
        );
    }
}

render(
        <App/>,
    document.getElementById('root')
);
