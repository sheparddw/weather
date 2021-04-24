(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(19),c=n.n(o),r=(n(26),n(20)),s=n(8),d=n(9),l=n(13),u=n(12),h=n(11),v=n(2),j=function(){function e(){Object(s.a)(this,e)}return Object(d.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,{method:"GET",headers:t})}},{key:"post",value:function(e,t,n){var a=JSON.stringify(n);return fetch(e,{method:"POST",headers:t,body:a})}},{key:"delete",value:function(e,t,n){var a=JSON.stringify(n);return fetch(e,{method:"DELETE",headers:t,body:a})}},{key:"put",value:function(e,t,n){var a=JSON.stringify(n);return fetch(e,{method:"PUT",headers:t,body:a})}}]),e}(),f=(n.p,n(27),n(1)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={coordinates:a.props.coordinates},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){var t=this;this.setState({coordinates:e},(function(){t.saveCoordinates();var n={coordinates:e};t.props.handleSettingsChange(n)}))}},{key:"saveCoordinates",value:function(){window.localStorage.setItem("coordinates",this.state.coordinates)}},{key:"render",value:function(){var e=this,t=this.state.coordinates;return Object(f.jsxs)("div",{className:"Settings",children:[Object(f.jsx)(h.b,{to:"/",children:"<-"}),Object(f.jsx)("h1",{children:"Settings"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){var t="45.5051,-122.6750";e.setState({coordinates:t},(function(){e.handleChange(t)}))},children:"Use Default"}),Object(f.jsx)("h2",{children:"Coordinates:"}),"Todo: add a map here.",Object(f.jsx)("input",{id:"coordinates",value:t,onChange:function(t){var n=t.target.value;e.setState({coordinates:n},(function(){e.handleChange(n)}))}})]})]})}}]),n}(a.Component),b=(n(34),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this,e);var i=window.localStorage.getItem("coordinates")||"45.5051,-122.6750";return a.state={coordinates:i,overviewData:!1,forecastData:!1},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getForecast()}},{key:"componentDidUpdate",value:function(){}},{key:"getForecast",value:function(){var e=this,t=this.state.coordinates;this.callApi("https://api.weather.gov/points/".concat(t),"overviewData").then((function(t){var n,a;return e.callApi(null===(n=e.state.overviewData)||void 0===n||null===(a=n.properties)||void 0===a?void 0:a.forecast,"forecastData")}))}},{key:"callApi",value:function(e,t){var n=this;return(new j).get(e,[]).then((function(e){if(e.ok)return e.json().then((function(e){return n.setState(Object(r.a)({},t,e))}))}))}},{key:"handleSettingsChange",value:function(e){var t=this,n=null===e||void 0===e?void 0:e.coordinates;if(n)return this.setState({coordinates:n},(function(){t.getForecast()}))}},{key:"app",value:function(){var e,t,n,a,i,o,c=this.state.overviewData,r=null===c||void 0===c||null===(e=c.properties)||void 0===e||null===(t=e.relativeLocation)||void 0===t||null===(n=t.properties)||void 0===n?void 0:n.city,s=null===(a=this.state.forecastData)||void 0===a||null===(i=a.properties)||void 0===i||null===(o=i.periods)||void 0===o?void 0:o[0],d="".concat(null===s||void 0===s?void 0:s.name,": ").concat(null===s||void 0===s?void 0:s.detailedForecast),l=null===s||void 0===s?void 0:s.icon;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(h.b,{to:"/settings",children:"Settings"}),Object(f.jsx)("header",{className:"App-header",children:l&&Object(f.jsx)("img",{src:l,className:"icon",alt:"logo"})}),r&&Object(f.jsx)("div",{className:"city",children:Object(f.jsx)("h2",{children:r})}),s&&Object(f.jsx)("div",{className:"report",children:d})]})}},{key:"render",value:function(){return Object(f.jsx)(h.a,{basename:"/weather",children:Object(f.jsxs)(v.c,{children:[Object(f.jsx)(v.a,{path:"/settings",children:Object(f.jsx)(p,{handleSettingsChange:this.handleSettingsChange.bind(this),coordinates:this.state.coordinates})}),Object(f.jsx)(v.a,{path:"/",children:this.app()})]})})}}]),n}(a.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(b,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.3208b215.chunk.js.map