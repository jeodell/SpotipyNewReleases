(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,a){},107:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(102),a(20)),s=a(69),c=a.n(s),m=a(70),u=a(77),p=a(39),d=a(166),f=a(171),b=a(169),g=Object(d.a)((function(e){var t;return t={albumList:{display:"inline-block",listStyle:"none"},albumContent:{backgroundColor:"#424242",margin:"5px",display:"flex",flexDirection:"column"},albumCover:Object(l.a)({width:"400px",height:"400px"},e.breakpoints.down("md"),{width:"275px",height:"275px"}),description:Object(l.a)({width:"375px",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",gap:"1rem"},e.breakpoints.down("md"),{width:"250px",height:"200px"}),albumTitle:Object(l.a)({fontSize:"1.25rem"},e.breakpoints.down("md"),{fontSize:"1rem"}),artistName:Object(l.a)({fontSize:"1.25rem"},e.breakpoints.down("md"),{fontSize:"1rem"}),releaseDate:Object(l.a)({},e.breakpoints.down("md"),{fontSize:"0.75rem"})},Object(l.a)(t,"releaseDate",{color:"#e0e0e0"}),Object(l.a)(t,"cardButton",{backgroundColor:"#1DB954","&:hover":{backgroundColor:"rgba(30,215,96,0.8)"}}),t}));function h(e){var t=e.artist,a=e.filterDate,n=t.albums.filter((function(e){return e.release_date>=a})),i=g();return 0===n.length?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,n.map((function(e,a){return r.a.createElement("li",{className:i.albumList,key:a},r.a.createElement("div",{className:i.albumContent},r.a.createElement("img",{className:i.albumCover,src:e.images[0].url,title:e.name,alt:e.name}),r.a.createElement("div",{className:i.description},r.a.createElement("div",{className:i.albumTitle},e.name),r.a.createElement("div",{className:i.artistName},t.name),r.a.createElement("div",{className:i.releaseDate},"Release Date: ",e.release_date),r.a.createElement(b.a,{href:e.external_urls.spotify,target:"_blank",rel:"noopener",underline:"none"},r.a.createElement(f.a,{className:i.cardButton,variant:"contained",size:"small"},"Open In Spotify")))))})))}a(107);var x=a(79),j=a.n(x),E=a(15),O=a(177),v=a(178),w=a(137),y=a(80),k=a(172),S=a(173),N=a(176);var D=function(){var e=new Date,t=Object(n.useState)(0),a=Object(p.a)(t,2),i=a[0],o=a[1],s=Object(n.useState)({name:""}),f=Object(p.a)(s,2),b=f[0],g=f[1],x=Object(n.useState)([{name:"",href:"",albums:[]}]),D=Object(p.a)(x,2),C=D[0],F=D[1],z=Object(n.useState)(""),B=Object(p.a)(z,2),M=B[0],L=B[1],A=0===e.getMonth()?e.getFullYear()-1:e.getFullYear()+"-"+("0"+(e.getMonth()-2===0?12:e.getMonth()-2)).slice(-2)+"-"+("0"+e.getDate()).slice(-2),R=Object(n.useState)(A),T=Object(p.a)(R,2),_=T[0],I=T[1];Object(n.useEffect)((function(){J()}),[]);var J=function(){var e=Object(u.a)(c.a.mark((function e(){var t,a,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spotipynewreleasesbackend.herokuapp.com/api/get-user");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,g({name:a.display_name}),e.next=9,fetch("https://spotipynewreleasesbackend.herokuapp.com/api/get-artists");case 9:return n=e.sent,e.next=12,n.json();case 12:r=e.sent,F((function(e){return[].concat(Object(m.a)(e),Object(m.a)(r.artists))})),o(i+r.artists.length);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=b&&C?C.filter((function(e){return""!==e.name&&e.name.toLowerCase().includes(M.toLowerCase())})):[],W=Object(d.a)((function(e){return{user:{marginTop:"25px",marginBottom:"10px"},followedArtists:{marginBottom:"10px"},artistFilter:{marginRight:"10px",marginBottom:"10px"},dateFilter:{marginBottom:"50px"},grid:{gridAutoRows:"1fr"},footer:{padding:e.spacing(5,2),marginTop:"50px",borderTop:"1px solid rgba(240,240,240,0.2)"}}}))(),$=Object(y.a)({palette:{type:"dark"},overrides:{MuiInputLabel:{root:{"&$focused":{color:"#fff"}}},MuiInput:{underline:{"&:after":{borderBottom:"2px solid white"}}}}});return $.typography.h2=Object(l.a)({fontSize:"2.4rem","@media (min-width:600px)":{fontSize:"3.0rem"}},$.breakpoints.up("md"),{fontSize:"4rem"}),$.typography.h3=Object(l.a)({fontSize:"1.5rem","@media (min-width:600px)":{fontSize:"2.5rem"}},$.breakpoints.up("md"),{fontSize:"3.0rem"}),r.a.createElement("div",{className:"App"},0!==i?r.a.createElement(k.a,{theme:$},r.a.createElement(S.a,{maxWidth:"xl"},r.a.createElement(w.a,{variant:"h2",component:"h1",className:W.user},b.name,"'s New Releases"),r.a.createElement(w.a,{variant:"h3",component:"h3",className:W.followedArtists},i," followed artists"),r.a.createElement(v.a,{className:W.artistFilter,label:"Filter by Artist Name",onChange:function(e){L(e.target.value)}}),r.a.createElement(E.a,{utils:j.a},r.a.createElement(O.a,{className:W.dateFilter,disableFuture:!0,label:"Filter by Release Date",value:_,placeholder:_,format:"MM/dd/yyyy",onChange:function(e){return function(e){var t=e.toLocaleDateString().split("/"),a=t[2],n=t[1],r=a+"-"+("0"+t[0]).slice(-2)+"-"+("0"+n).slice(-2);I(r)}(e)}})),r.a.createElement(N.a,{className:W.grid},Y.map((function(e){return r.a.createElement(h,{key:e.name,artist:e,filterDate:_})})))),r.a.createElement("footer",{className:W.footer},r.a.createElement(w.a,{variant:"body2"},"Copyright \xa9 ",(new Date).getFullYear()," Jason O'Dell"))):r.a.createElement(n.Fragment,null,"Loading..."))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root"))},97:function(e,t,a){e.exports=a(135)}},[[97,1,2]]]);
//# sourceMappingURL=main.76e49fa5.chunk.js.map