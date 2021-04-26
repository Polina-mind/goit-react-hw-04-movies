(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{37:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),s=a.n(c),i=(a(37),a(4)),o=a(2),u=a(10),h=a(5),l=a.n(h),j=a(11),p=a(12),d=a(13),b=a(16),m=a(15),v=a(14),f=a.n(v),O=a(0),x=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={trendingMovies:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.themoviedb.org/3/trending/movie/week?api_key=4ba31ae74c8b6119033f94598087ffb2");case 2:t=e.sent,this.setState({trendingMovies:t.data.results});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.match,n=this.state.trendingMovies;return console.log(n),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Home"}),Object(O.jsx)("ul",{children:n.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(t.url,"/").concat(e.id),children:e.title})},e.id)}))}),Object(O.jsx)(o.a,{path:"".concat(t.path,"/:movieId"),render:function(t){var n=Number(t.match.params.movieId),r=e.state.trendingMovies.find((function(e){return e.id===n}));return r&&Object(O.jsx)(a,Object(u.a)(Object(u.a)({},t),{},{TrendingMovies:r.movies}))}})]})}}]),a}(n.Component),g=a(17),y=a.n(g),w=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],searchQuery:""},e.handleChange=function(t){e.setState({searchQuery:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.state.searchQuery),!this.state.searchQuery){e.next=6;break}return e.next=4,f.a.get("https://api.themoviedb.org/3/search/movie?api_key=4ba31ae74c8b6119033f94598087ffb2&query=".concat(this.state.searchQuery));case 4:t=e.sent,this.setState({movies:t.data.results});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.movies,n=t.searchQuery;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Movies"}),Object(O.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(O.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(O.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.searchQuery,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search..."})]}),Object(O.jsx)("ul",{children:n&&a.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"".concat(e.props.match.url,"/").concat(t.id),children:t.title})},t.id)}))})]})}}]),a}(n.Component);w.protoTypes={handleSubmit:y.a.func.isRequired,handleChange:y.a.func.isRequired};var k=w,S=function(){return Object(O.jsx)("h1",{children:"404 - page not found"})},_=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:null,title:null,poster_path:null,overview:null,genre_ids:null,release_date:null},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,console.log(this.props.match.params),e.next=4,f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=4ba31ae74c8b6119033f94598087ffb2"));case 4:a=e.sent,this.setState(Object(u.a)({},a.data));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=(e.id,e.title),a=e.poster_path,n=e.overview,r=(e.genre_ids,e.release_date);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:["Movie ",this.props.match.params.movieId]}),Object(O.jsx)("img",{src:a,alt:""}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("p",{children:n})]})}}]),a}(n.Component),N=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movie_id,e.next=3,f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=4ba31ae74c8b6119033f94598087ffb2"));case 3:a=e.sent,this.setState({reviews:a.data}),console.log(a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match,t=this.state.reviews;return console.log(t),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Reviews"}),Object(O.jsx)("ul",{children:t.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(e.url,"/").concat(t.id),children:t.name})},t.id)}))}),Object(O.jsx)(o.a,{path:"".concat(e.path,"/:movieId"),render:function(e){var a=Number(e.match.params.reviewId),n=t.find((function(e){return e.id===a}));return n&&Object(O.jsx)(C,Object(u.a)(Object(u.a)({},e),{},{Reviews:n.movies}))}})]})}}]),a}(n.Component),C=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cast:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movie_id,e.next=3,f.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=4ba31ae74c8b6119033f94598087ffb2"));case 3:a=e.sent,this.setState({cast:a.data}),console.log("response.data",a.data);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match,t=this.state.cast;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Cast"}),Object(O.jsx)("ul",{children:t.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(e.url,"/").concat(t.id),children:t.name})},t.id)}))}),Object(O.jsx)(o.a,{path:"".concat(e.path,"/:movieId/cast"),render:function(e){var a=Number(e.match.params.movie_id),n=t.find((function(e){return e.id===a}));return n&&Object(O.jsx)(N,Object(u.a)(Object(u.a)({},e),{},{CastList:n.movie}))}})]})}}]),a}(n.Component),M=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink--active",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"/movies",className:"NavLink",activeClassName:"NavLink--active",children:"Movies"})})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:x}),Object(O.jsx)(o.a,{exact:!0,path:"/movies",component:k}),Object(O.jsx)(o.a,{exact:!0,path:"/movies/:movie_id",component:_}),Object(O.jsx)(o.a,{path:"/movies/:movie_id/cast",component:C}),Object(O.jsx)(o.a,{path:"/movies/:movie_id/reviews",component:N}),Object(O.jsx)(o.a,{component:S})]})]})};a(66);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(M,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.5c43b2a4.chunk.js.map