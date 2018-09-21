import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.js';
import './static/iconfont/iconfont';
/**
 * PWA progressive web application
 * https协议的服务器上
 * registerServiceWorker就是为react项目注册了一个service worker，
 * 用来做资源的缓存，这样你下次访问时，就可以更快的获取资源。而且因为资源被缓存，
 * 所以即使在离线的情况下也可以访问应用（此时使用的资源是之前缓存的资源）。
 * 注意，registerServiceWorker注册的service worker 
 * 只在生产环境中生效（process.env.NODE_ENV === ‘production’） 
 */
// import registerServiceWorker from './registerServiceWorker';

//jsx语法中，如果我们要使用自己创建的组件；首字母要大写；
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
