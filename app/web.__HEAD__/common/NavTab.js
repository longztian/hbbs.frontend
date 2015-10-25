'use strict';

var NavTab = {
  view: function(ctrl, data) {
    return m('nav', {class: 'navtab'}, data.links.map(function(link) {
      var attr = link.uri == data.active ? {class: 'active'} : {href: link.uri, config: m.route};
      return m('a', attr, link.name);
    }));
  }
};

var guestLinks = [
  {uri: "/", name: '首页'},
  {uri: "/login", name: '登录'},
  {uri: "/password", name: '忘记密码'},
  {uri: "/register", name: '注册帐号'},
];

var userLinks = [
  {uri: "/", name: '首页'},
  {uri: "/user", name: '我的账户'},
  {uri: "/pm/inbox", name: '短信'},
  {uri: "/logout", name: '登出'},
];
