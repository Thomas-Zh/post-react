(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(66)},36:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(28),l=n.n(c),s=(n(36),n(7)),i=n(8),r=n(10),u=n(9),p=n(11),d=(n(37),n(13)),h=n(12),m=n(3),b=n(15),g=n.n(b),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={posts:[],currentPage:1,postsPerPage:2},n.handleClick=n.handleClick.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){this.setState({currentPage:e.target.id})}},{key:"componentDidMount",value:function(){var e=this;g.a.get("https://secure-dusk-80764.herokuapp.com/posts/show").then(function(t){e.setState({posts:t.data.reverse()})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){for(var e=this,t={borderStyle:"solid",fontSize:"1em",width:"30%"},n={color:"#F7F8F9",float:"left",padding:"8px"},a=this.state,c=a.posts,l=a.currentPage,s=a.postsPerPage,i=[],r=1;r<=Math.ceil(c.length/s);r++)i.push(r);var u=i.map(function(t){return o.a.createElement("li",{key:t,id:t,onClick:e.handleClick,style:n},t)}),p=c.map(function(e,n){return n===2*(l-1)||n===2*(l-1)+1?o.a.createElement("div",{key:n,style:t},o.a.createElement("div",null,e.title),o.a.createElement("div",null,e.content)):null});return o.a.createElement("div",{style:{paddingLeft:"10%",paddingTop:"5%",color:"#F7F8F9"}},o.a.createElement("section",{id:"posts",style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},p),o.a.createElement("ul",{id:"pagination",style:{display:"inline-block",listStyle:"none",marginTop:"10%"}},u))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Edit Post"))}}]),t}(a.Component),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={title:"",content:""},n.onChangePostTitle=n.onChangePostTitle.bind(Object(m.a)(Object(m.a)(n))),n.onChangePostContent=n.onChangePostContent.bind(Object(m.a)(Object(m.a)(n))),n.onSubmit=n.onSubmit.bind(Object(m.a)(Object(m.a)(n))),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChangePostTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangePostContent",value:function(e){this.setState({content:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,content:this.state.content};g.a.post("https://secure-dusk-80764.herokuapp.com/posts/create",t).then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)}),alert("post submitted"),this.setState({title:"",content:""})}},{key:"render",value:function(){return o.a.createElement("div",{style:{paddingLeft:"10%",paddingTop:"5%",color:"#F7F8F9"}},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",{className:"new-post",style:{display:"flex",flexDirection:"column",width:"50%"}},o.a.createElement("label",null,"Title: "),o.a.createElement("input",{type:"text",className:"new-post-title",value:this.state.title,onChange:this.onChangePostTitle}),o.a.createElement("label",null,"Content:"),o.a.createElement("textarea",{className:"new-post-content",value:this.state.content,onChange:this.onChangePostContent}),o.a.createElement("input",{type:"submit",value:"Create Post",className:"create-post",style:{background:"none",color:"#F7F8F9"}}))))}}]),t}(a.Component),E=(n(57),function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{basename:"/post-react"},o.a.createElement("div",{style:{paddingLeft:"10%",paddingTop:"5%",color:"#F7F8F9"}},o.a.createElement("div",{className:"Container"},o.a.createElement("h2",null,"Message Board")),o.a.createElement(d.b,{to:"/"},o.a.createElement("button",{style:{background:"none",color:"#F7F8F9"}},"home")),o.a.createElement(d.b,{to:"/posts/show"},o.a.createElement("button",{style:{background:"none",color:"#F7F8F9"}},"show posts")),o.a.createElement(d.b,{to:"/posts/create"},o.a.createElement("button",{style:{background:"none",color:"#F7F8F9"}},"create posts")),o.a.createElement("div",{style:{width:"50%"}},o.a.createElement("h6",null,"Hi! Welcome to Message Board! To create new post, click 'create posts' button and type in your message. To see posts, click 'show posts' button."))),o.a.createElement(h.a,{path:"/posts/show",component:f}),o.a.createElement(h.a,{path:"/posts/create",component:v}),o.a.createElement(h.a,{path:"/posts/edit",component:y}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.8df8732a.chunk.js.map