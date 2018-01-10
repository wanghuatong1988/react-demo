import React from "react";
import {Router, Route, IndexRoute} from "react-router";

let {App, Main, Info, News, Article, NewsInfo} = '';

App = (lt, cb) => {require.ensure([], require => {cb(null, require('../views').default);}, '/');};
Main = (lt, cb) => {require.ensure([], require => {cb(null, require('../views/main').default);}, 'main');};
Info = (lt, cb) => {require.ensure([], require => {cb(null, require('../views/info').default);}, 'info');};
News = (lt, cb) => {require.ensure([], require => {cb(null, require('../views/news').default);}, 'news');};
NewsInfo = (lt, cb) => {require.ensure([], require => {cb(null, require('../views/newsInfo').default);}, 'news');};
Article = (lt, cb) => {require.ensure([], require => {cb(null, require('../views/article').default);}, 'article');};

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" getComponent={App}>
                    <IndexRoute getComponent={Main} />
                    <Route path="info/:id" getComponent={Info} />
                    <Route path="news" getComponent={News} />
                    <Route path="news/:id" getComponent={NewsInfo} />
                    <Route path="article" getComponent={Article} />
                </Route>
            </Router>
        );
    }
}

export default RouterMap;