(this.webpackJsonpsnapshare=this.webpackJsonpsnapshare||[]).push([[0],{40:function(e,t,n){e.exports=n(91)},45:function(e,t,n){},46:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},88:function(e,t){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(36),i=n.n(s),r=(n(45),n(39)),c=n(2),l=n(3),m=n(6),u=n(5),h=n(4),d=(n(46),n(47),n(37)),v=n.n(d),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n);var o=(a=t.call(this,e)).props,s=o.joinRoom,i=(o.leaveRoom,a.init_token());return a.state={token:window.location.origin+"?token="+i},s(i),console.log(a.state.token),a}return Object(l.a)(n,[{key:"init_token",value:function(){return Math.random().toString(36).substr(2)}},{key:"render",value:function(){return o.a.createElement("section",{id:"banner",style:{z_index:-1,position:"relative"}},o.a.createElement(v.a,{value:this.state.token,size:512,renderAs:"svg"}))}}]),n}(o.a.Component),f=(n(56),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n);var o=(a=t.call(this,e)).props.socket;return a.socket=o,a}return Object(l.a)(n,[{key:"setSocketListeners",value:function(){this.socket.on("message",(function(e){console.log("message",e.message)})),this.socket.on("message_sent",(function(e){console.log("message_sent",e);var t=e.body.link;t.match(/^http?:\/\//i)&&t.match(/^https?:\/\//i)||(t="http://"+t),window.location=t}))}},{key:"componentDidMount",value:function(){this.setSocketListeners()}},{key:"render",value:function(){return o.a.createElement("div",{className:"bg-img"})}}]),n}(o.a.Component)),k=(n(57),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n);var o=(a=t.call(this,e)).props,s=o.joinRoom,i=o.sendMessage,r=new URLSearchParams(window.location.search).get("token");return s(r),console.log(r),a.state={value:"",token:r},a.sendMessage=i,a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.sendMessage({link:this.state.value},this.state.token)}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form__group field"},o.a.createElement("input",{type:"input",className:"form__field",placeholder:"Name",name:"Link",id:"name",value:this.state.value,onChange:this.handleChange,required:!0}),o.a.createElement("label",{htmlFor:"name",className:"form__label"},"Link")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:"btn",type:"submit"},"Submit"))}}]),n}(o.a.Component)),g=n(38),p=n.n(g),j=window.location.origin,O=p()(j),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var o=new URLSearchParams(window.location.search).get("token");return a.state={ishost:!o,rooms:[]},a.joinRoom=a.joinRoom.bind(Object(m.a)(a)),a.leaveRoom=a.leaveRoom.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"joinRoom",value:function(e){-1===this.state.rooms.indexOf(e)&&this.setState({rooms:[].concat(Object(r.a)(this.state.rooms),[e])},(function(){O.emit("join_room",{token:e})}))}},{key:"leaveRoom",value:function(e){this.setState({rooms:this.state.rooms.filter((function(t){return t!==e}))})}},{key:"sendMessage",value:function(e,t){O.emit("send_message",{token:t,body:e,timeStamp:Date.now()})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},!0===this.state.ishost&&o.a.createElement("div",null,o.a.createElement(f,{socket:O}),o.a.createElement(b,{joinRoom:this.joinRoom,leaveRoom:this.leaveRoom})),!1===this.state.ishost&&o.a.createElement(k,{joinRoom:this.joinRoom,sendMessage:this.sendMessage})))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a5df4a39.chunk.js.map