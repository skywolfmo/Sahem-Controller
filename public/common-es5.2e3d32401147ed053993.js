function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+qrf":function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r("z6cu"),i=r("JIr8"),o=r("tk/3"),a=r("AytR"),s=r("ZmYg"),c=r("fXoL"),u={headers:new o.c({Authorization:"bearer "+localStorage.getItem("loc8r-token")})},h=function(){var t=function(){function t(e,r){_classCallCheck(this,t),this.storage=e,this.httpClient=r,this.api=a.a.api,this.projectUrl="/api/Projects"}return _createClass(t,[{key:"setHeaderAuthToken",value:function(){var t=this.storage.getItem("loc8r-token");t&&u.headers.append("Authorization","bearer "+t)}},{key:"getProjects",value:function(){return this.url=this.api+this.projectUrl,this.httpClient.get(this.url)}},{key:"getProject",value:function(t){return this.url=this.api+this.projectUrl,this.httpClient.get(this.url+"/"+t)}},{key:"createProject",value:function(t){var e=this.storage.getItem("loc8r-token");return u.headers.append("Authorization","BEARER "+e),this.url=this.api+this.projectUrl,this.httpClient.post(this.url,t,u).pipe(Object(i.a)(this.error))}},{key:"createProjectForm",value:function(t){var e=this.storage.getItem("loc8r-token");return u.headers.append("authorization","BEARER "+e),this.url=this.api+this.projectUrl,this.httpClient.post(this.url,t,u).pipe(Object(i.a)(this.error))}},{key:"updateProject",value:function(t){var e=this.storage.getItem("loc8r-token");return u.headers.append("authorization","BEARER "+e),this.url=this.api+this.projectUrl,this.httpClient.put(this.url+"/"+t._id,t,u)}},{key:"deleteProject",value:function(t){var e=this.storage.getItem("loc8r-token");return u.headers.append("authorization","BEARER "+e),this.url=this.api+this.projectUrl,this.httpClient.delete(this.url+"/"+t,u)}},{key:"getCreatorByCategory",value:function(t){return this.url=this.api+this.projectUrl,this.httpClient.get(this.url+"/category/"+t)}},{key:"error",value:function(t){var e;return e=t.error instanceof ErrorEvent?t.error.message:"Error Code: ".concat(t.status,"\nMessage: ").concat(t.message),console.log(e),Object(n.a)(e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Yb(s.a),c.Yb(o.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},mrSG:function(t,e,r){"use strict";function n(t,e,r,n){return new(r||(r=Promise))((function(i,o){function a(t){try{c(n.next(t))}catch(e){o(e)}}function s(t){try{c(n.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))}r.d(e,"a",(function(){return n}))}}]);