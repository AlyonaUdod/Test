(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){e.exports=a(349)},190:function(e,t,a){},314:function(e,t,a){},349:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(44),i=a.n(r),c=(a(190),a(52)),l=a.n(c),o=a(171),g=a(97),m=a(147),u=a(148),h=a(149),p=a(172),d=a(150),f=a(173),y=a(366),v=a(360),E=a(359),x=a(364),w=a(362),M=a(365),b=a(361),k=a(358),S=a(363),I=function(e){var t=e.email,a=e.text,n=e.id;return s.a.createElement("div",null,s.a.createElement(S.a,null,s.a.createElement(y.a,{as:"h4"},t),s.a.createElement("p",{style:{fontSize:"17px"}},a),s.a.createElement("span",{style:{color:"grey"}},"message id:  ",n)))},C=a(357),L=function(e){var t=e.email,a=e.text,n=e.handlerChange,r=e.postMessage,i=e.handleKeyDown;return s.a.createElement(E.a,{onSubmit:r},s.a.createElement(E.a.Field,null,s.a.createElement("input",{placeholder:"Email",type:"text",value:t,onChange:n,name:"email"})),s.a.createElement(E.a.Field,null,s.a.createElement(C.a,{placeholder:"Text",type:"text",value:a,onChange:n,name:"text",onKeyDown:i})),s.a.createElement(x.a,{positive:!0,type:"submit"},"Submit"))},D=(a(314),a(53)),j=a.n(D),B=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={messages:null,messagesLength:0,error:"",page:1,email:"",text:"",messageId:"",singleMessage:null,seachError:""},a.handlerChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.handleKeyDown=function(e){13===e.keyCode&&a.postMessage(e)},a.getAllMessages=function(){j.a.get("/api/messages").then(function(e){return a.setState({messagesLength:Math.ceil(e.data.length/10)})}).catch(function(e){return a.setState({error:e})})},a.getMessagesByPage=function(){j.a.get("/api/messages/list/".concat(a.state.page)).then(function(e){return a.setState({messages:e.data})}).catch(function(e){return a.setState({error:e})})},a.postMessage=function(e){e.preventDefault();var t={email:a.state.email,text:a.state.text};a.sendMessageToDb(t)},a.sendMessageToDb=function(e){j.a.post("/api/messages/",e).then(function(e){return a.checkMessagesLength(e.data)}).catch(function(){return a.setState({error:"Validation faild! Your email isn't correct or message length more then 100 symbols, try again."})})},a.checkMessagesLength=function(){var e=Object(g.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.messages.length<10)){e.next=4;break}a.setState(function(e){return{messages:[].concat(Object(o.a)(e.messages),[t]),email:"",text:"",error:""}}),e.next=7;break;case 4:return e.next=6,a.setState(function(e){return{email:"",text:"",error:"",page:e.page===e.messagesLength?e.page+1:1===e.page?Math.floor(e.messagesLength+1):e.messagesLength,messagesLength:10===e.messages.length?Math.floor(e.messagesLength+1):e.messagesLength}});case 6:a.getMessagesByPage();case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.showNewPage=function(){var e=Object(g.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.persist(),"pageItem"!==t.target.type){e.next=6;break}return e.next=4,a.setState({page:+t.target.text});case 4:e.next=16;break;case 6:if("nextItem"!==t.target.type){e.next=12;break}if(!(a.state.page<a.state.messagesLength)){e.next=10;break}return e.next=10,a.setState(function(e){return{page:e.page+1}});case 10:e.next=16;break;case 12:if("prevItem"!==t.target.type){e.next=16;break}if(!(a.state.page>1)){e.next=16;break}return e.next=16,a.setState(function(e){return{page:e.page-1}});case 16:a.getMessagesByPage();case 17:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.getMessageById=function(){a.state.messageId&&j.a.get("/api/messages/single/".concat(a.state.messageId)).then(function(e){return a.setState({singleMessage:[e.data],seachError:""})}).catch(function(){return a.setState({seachError:"Sorry, can't find message with this ID, try again."})})},a.removeSingleMessage=function(){a.setState({singleMessage:null,messageId:"",seachError:""})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getAllMessages(),this.getMessagesByPage(this.state.page)}},{key:"render",value:function(){var e=this.state,t=e.page,a=e.messages,n=e.error,r=e.email,i=e.text,c=e.messagesLength,l=e.messageId,o=e.singleMessage,g=e.seachError;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"main-title"},s.a.createElement(y.a,{as:"h2",content:"Test DB2 Limited"})),s.a.createElement("div",{className:"pagin-wrap"},s.a.createElement(v.a,{activePage:t,firstItem:null,lastItem:null,pointing:!0,secondary:!0,onClick:this.showNewPage,totalPages:c})),s.a.createElement("div",{className:"seach-wrapper"},s.a.createElement(E.a,{style:{display:"flex",alignItems:"center",justyfyContent:"space-evenly"}},s.a.createElement(E.a.Field,{style:{marginTop:"1rem"}},s.a.createElement("input",{value:l,placeholder:"Get Message By ID",name:"messageId",onChange:this.handlerChange})),s.a.createElement(x.a,{positive:!0,type:"submit",onClick:this.getMessageById},"Seach"),s.a.createElement(x.a,{negative:!0,onClick:this.removeSingleMessage},"Reset")),s.a.createElement(w.a,{style:{color:"red",textAlign:"center"}},g)),s.a.createElement("div",{className:"message-wrapper"},null===a?s.a.createElement(M.a,{style:{padding:"13.8rem 0"}},s.a.createElement(b.a,{active:!0,inverted:!0},s.a.createElement(k.a,{inverted:!0}," Loading ..."))):o||0===a.length?o?o.map(function(e){return s.a.createElement(I,{key:e._id,id:e._id,email:e.email,text:e.text})}):s.a.createElement("div",{style:{color:"red",textAlign:"center"}}," No messages yet"):a.map(function(e){return s.a.createElement(I,{key:e._id,id:e._id,email:e.email,text:e.text})}),s.a.createElement(w.a,{className:"error"},n)),s.a.createElement("div",{className:"form-wrapper"},s.a.createElement(L,{email:r,text:i,handlerChange:this.handlerChange,handleKeyDown:this.handleKeyDown,postMessage:this.postMessage})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(348);i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[185,1,2]]]);
//# sourceMappingURL=main.b13718bc.chunk.js.map