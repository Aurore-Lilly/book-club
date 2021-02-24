(this["webpackJsonpbook-club"]=this["webpackJsonpbook-club"]||[]).push([[0],{46:function(e,t,n){"use strict";n.r(t);var a,o,i,r,c,d,s,l,m,p,h,b,j,f,g,x,u,w,O,v,y,k,_,C=n(1),I=n.n(C),N=n(26),F=n.n(N),z=n(13),L=n(4),S=n(3),H=[{title:"Favorite read",link:"/fav"},{title:"Inspiration",link:"/inspi"},{title:"Quotes",link:"/quote"}],T=n(9),q=Object(S.c)(T.b)(a||(a=Object(L.a)(["\n  background: ",";\n  white-space: nowrap;\n  outline: none;\n  border:none;\n  min-width: 100px;\n  max-width: 250px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.3s;\n  display: flex;\n  font-weight: 400;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  border-radius: ",";\n\n  &:hover {\n    transform: translateY(-4px);\n  }\n"])),(function(e){return e.primary?"rgb(7,46,110)":"#CD853F"}),(function(e){return e.big?"16px 60px":"14px 28px"}),(function(e){e.primary;return"#fff"}),(function(e){return e.big?"18px":"14px"}),(function(e){return e.round?"50px":"0px"})),E=n(31),M=n(2),B=S.c.div(o||(o=Object(L.a)(["\n  position:fixed;\n  z-index:999;\n  width:100%;\n  height:100%;\n  background: #cd853f;\n  display:grid;\n  align-items:center;\n  left:0;\n  transition:0.3s ease-in-out;\n  opacity:",";\n  top: ",";\n"])),(function(e){return e.isOpen?"1":"0"}),(function(e){return e.isOpen?"0":"-100%"})),A=S.c.div(i||(i=Object(L.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor:pointer;\n  outline: none;\n"]))),R=Object(S.c)(E.a)(r||(r=Object(L.a)(["\n  color:rgb(7,46,110);\n  z-index: 20;\n"]))),D=S.c.div(c||(c=Object(L.a)([""]))),G=S.c.div(d||(d=Object(L.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4,80px);\n  justify-content: center;\n\n  @media screen and (max-width: 480px){\n    grid-template-rows: repeat(4,60px);\n  }\n"]))),P=Object(S.c)(T.b)(s||(s=Object(L.a)(["\n  display: flex;\n  color:#fff;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color:#fff;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n\n  &:hover {\n    color:rgb(7,46,110);\n    transform: translateY(-4px);\n  }\n"]))),V=S.c.div(l||(l=Object(L.a)(["\ndisplay:flex;\njustify-content:center;\n"]))),Y=function(e){var t=e.isOpen,n=e.toggle;return Object(M.jsxs)(B,{isOpen:t,onClick:n,children:[Object(M.jsx)(A,{onClick:n,children:Object(M.jsx)(R,{})}),Object(M.jsxs)(D,{children:[Object(M.jsx)(G,{children:H.map((function(e,t){return Object(M.jsxs)(P,{to:e.link,children:[" ",e.title]},t)}))}),Object(M.jsx)(V,{children:Object(M.jsx)(q,{primary:"true",round:"true",big:"true",to:"/contact",children:"Recommend a book"})})]})]})},J=n(5),W=n(32),K=S.c.nav.withConfig({displayName:"Navbar__Nav",componentId:"sc-1vpgdcm-0"})(["height:60px;display:flex;background:transparent;justify-content:space-between;padding:1rem 2rem;z-index:100;position:fixed;width:100%;"]),Q=Object(S.b)(m||(m=Object(L.a)(["\n  color: #fff;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  text-decoration: none;\n  text-shadow: 0px 0px 20px rgba(0,0,0,1);\n\n  &:hover{\n    transform: translateY(-2px);\n  }\n"]))),U=Object(S.c)(T.b).withConfig({displayName:"Navbar__Logo",componentId:"sc-1vpgdcm-1"})([""," font-weight:bold;padding:.3rem;letter-spacing:2px;color:#f2f2f2;text-shadow:5px 5px 10px rgba(0,0,0,1);"],Q),X=Object(S.c)(W.a).withConfig({displayName:"Navbar__MenuBars",componentId:"sc-1vpgdcm-2"})(["display:none;color:#fff;background-color:rgb(7,46,110);padding:5px;border-radius:20%;@media screen and (max-width:768px){display:block;background-size:contain;height:40px;width:40px;cursor:pointer;position:absolute;top:0;right:0;transform:translate(-50%,25%);}"]),Z=S.c.div.withConfig({displayName:"Navbar__NavMenu",componentId:"sc-1vpgdcm-3"})(["display:flex;align-items:center;margin-right:-48px;@media screen and (max-width:768px){display:none;}"]),$=Object(S.c)(T.b).withConfig({displayName:"Navbar__NavMenuLinks",componentId:"sc-1vpgdcm-4"})(["",""],Q),ee=S.c.div.withConfig({displayName:"Navbar__NavBtn",componentId:"sc-1vpgdcm-5"})(["display:flex;align-items:center;margin-right:24px;@media screen and (max-width:768px){display:none;}"]),te=function(e){var t=e.toggle,n=Object(C.useState)(!1),a=Object(z.a)(n,2),o=a[0],i=a[1],r=Object(J.f)(),c=function(){window.pageYOffset>=60?i(!0):i(!1)};Object(C.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}}),[]);var d={backgroundColor:o||"/"!==r.pathname?"#CD853F":"transparent",transition:"0.4s"};return Object(M.jsxs)(K,{style:d,children:[Object(M.jsx)(U,{to:"/",children:"BOOK HEMISPHERE"}),Object(M.jsx)(X,{onClick:t}),Object(M.jsx)(Z,{children:H.map((function(e,t){return Object(M.jsx)($,{to:e.link,children:e.title},t)}))}),Object(M.jsx)(ee,{children:Object(M.jsx)(q,{to:"/contact",primary:"true",children:"Recommend a book"})})]})},ne=n(12),ae=n(18),oe=S.c.section.withConfig({displayName:"Footer__Section",componentId:"urjuhj-0"})(["background:#000d1a;color:#fff;width:100%;min-height:600px;padding:3rem calc((100vw - 1300px) / 2);"]),ie=S.c.div.withConfig({displayName:"Footer__Container",componentId:"urjuhj-1"})(["height:100%;width:100%;padding:4rem 0rem;"]),re=S.c.div.withConfig({displayName:"Footer__FooterTop",componentId:"urjuhj-2"})(["display:flex;flex-direction:row;padding:4rem 0rem;@media screen and (max-width:768px){flex-direction:column;}"]),ce=S.c.div.withConfig({displayName:"Footer__Contact",componentId:"urjuhj-3"})(["width:50%;display:flex;justify-content:flex-end;align-items:center;@media screen and (max-width:768px){width:100%;justify-content:flex-start;}"]),de=S.c.div.withConfig({displayName:"Footer__Quote",componentId:"urjuhj-4"})(["flex:1;padding:2rem 1.5rem;h3{font-weight:600;font-size:clamp(2rem,7vw,3rem);line-height:1.8;}"]),se=S.c.div.withConfig({displayName:"Footer__FooterBottom",componentId:"urjuhj-5"})(["display:flex;padding:2rem 0rem;@media screen and (max-width:768px){flex-direction:column;}"]),le=Object(S.b)(p||(p=Object(L.a)(["\n  font-size: clamp(1rem, 6vw, 2rem);\n  margin-right: 1.5rem;\n  color: #cd853f;\n"]))),me=S.c.div.withConfig({displayName:"Footer__SocialIcons",componentId:"urjuhj-6"})(["display:flex;width:50%;@media screen and (max-width:768px){margin-bottom:2rem;width:100%;}"]),pe=Object(S.c)(ae.b).withConfig({displayName:"Footer__Instagram",componentId:"urjuhj-7"})(["",""],le),he=Object(S.c)(ae.c).withConfig({displayName:"Footer__LinkedIn",componentId:"urjuhj-8"})(["",""],le),be=Object(S.c)(ae.a).withConfig({displayName:"Footer__GitHub",componentId:"urjuhj-9"})(["",""],le),je=function(){return Object(M.jsx)(oe,{children:Object(M.jsx)(ie,{children:Object(M.jsx)(re,{children:Object(M.jsxs)(de,{children:[Object(M.jsxs)("h3",{children:[" \u201c I am a part of everything that I have read. \u201d ",Object(M.jsx)("br",{}),"- Theodore Roosevelt "]}),Object(M.jsxs)(se,{children:[Object(M.jsxs)(me,{children:[Object(M.jsx)("a",{href:"//www.",rel:"noopener noreferrer",target:"_blank",children:Object(M.jsx)(pe,{})}),Object(M.jsx)("a",{href:"//www.",rel:"noopener noreferrer",target:"_blank",children:Object(M.jsx)(he,{})}),Object(M.jsx)("a",{href:"//www.",rel:"noopener noreferrer",target:"_blank",children:Object(M.jsx)(be,{})})]}),Object(M.jsx)(ce,{children:Object(M.jsxs)(q,{to:"/books",children:["Let's Chat ",Object(M.jsx)(ne.a,{})," "]})})]})]})})})})},fe=Object(S.a)(h||(h=Object(L.a)(["\n  * {\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n  html, body{\n    overflow-x:hidden\n  }\n"]))),ge=n(25),xe=n(23),ue=n(24),we=S.c.section.withConfig({displayName:"Hero__HeroSection",componentId:"qkvmet-0"})(["height:100vh;max-height:1100px;position:relative;overflow:hidden;"]),Oe=S.c.div.withConfig({displayName:"Hero__HeroWrapper",componentId:"qkvmet-1"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]),ve=S.c.div.withConfig({displayName:"Hero__HeroSlide",componentId:"qkvmet-2"})(["z-index:1;width:100%;height:100%;"]),ye=S.c.div.withConfig({displayName:"Hero__HeroSlider",componentId:"qkvmet-3"})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:'';position:absolute;z-index:2;width:100%;height:100vh;bottom:0vh;left:0;overflow:hidden;opacity:0.5 background:linear-gradient(0deg,rgba(0,0,0.2) 0%,rgba(0,0,0.2) 50%,rgba(0,0,0.6) 100% );}"]),ke=Object(S.c)(ue.b.img).withConfig({displayName:"Hero__HeroImage",componentId:"qkvmet-4"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;"]),_e=S.c.div.withConfig({displayName:"Hero__HeroContent",componentId:"qkvmet-5"})(["position:relative;z-index:10;display:flex;flex-direction:column;align-self:max-width:400px;left:0;background-color:rgba(0,0,0,0.35);justify-content:left;width:calc(100% - 100px);color:#fff;padding:40px;h1{font-size:clamp(1.8rem,5vw,1.8rem);text-transform:uppercase;text-decoration-style:wavy;text-decoration:overline;line-height:3.5rem;text-decoration-color:rgb(7,46,110);font-weight:bold;text-shadow:0px 10px 20px rgba(0,0,0,1);text-align:left;margin-bottom:0.9rem;}h2{font-size:clamp(.9rem.6vw,1.8rem);font-weight:600;margin-bottom:0.8rem;}p{margin-bottom:1.2rem;font-weight:500;text-shadow:0px 0px 20px rgba(0,0,0,0.8);}"]),Ce=Object(S.c)(ne.a).withConfig({displayName:"Hero__Arrow",componentId:"qkvmet-6"})(["margin-left:0.5rem;"]),Ie=S.c.div.withConfig({displayName:"Hero__SliderButtons",componentId:"qkvmet-7"})(["position:absolute;bottom:50px;right:50px;display:flex;z-index:10;"]),Ne=Object(S.b)(b||(b=Object(L.a)(["\n  width:40px;\n  height: 40px;\n  color:#fff;\n  cursor:pointer;\n  background:rgb(7,46,110);\n  border-radius:50px;\n  padding:10px;\n  margin-right: 1rem;\n  user-select:none;\n  transition:0.3s;\n\n  &:hover{\n    background:#cd853f;\n    transform: scale(1.05);\n  }\n"]))),Fe=Object(S.c)(xe.a).withConfig({displayName:"Hero__PrevArrow",componentId:"qkvmet-8"})(["",""],Ne),ze=Object(S.c)(xe.b).withConfig({displayName:"Hero__NextArrow",componentId:"qkvmet-9"})(["",""],Ne),Le=Object(S.c)(q).withConfig({displayName:"Hero___StyledButton",componentId:"qkvmet-10"})(["max-width:180px;"]),Se=function(e){var t=e.slides,n=Object(C.useState)(0),a=Object(z.a)(n,2),o=a[0],i=a[1],r=t.length,c=Object(C.useRef)(null);Object(C.useEffect)((function(){return c.current=setTimeout((function(){i((function(e){return e===r-1?0:e+1}))}),2500),function(){c.current&&clearTimeout(c.current)}}),[o,r]);if(!Array.isArray(t)||t.length<=0)return null;var d={hidden:{opacity:0},visible:{opacity:1,transition:{duration:.8}},exit:{opacity:0}};return Object(M.jsx)(we,{children:Object(M.jsx)(Oe,{children:Object(M.jsxs)(ue.a,{children:[t.map((function(e,t){return Object(M.jsx)(ve,{children:t===o&&Object(M.jsxs)(ye,{children:[Object(M.jsx)(ke,{src:e.image,alt:e.alt,initial:"hidden",animate:"visible",exit:"exit",variant:d}),Object(M.jsxs)(_e,{children:[Object(M.jsx)("h1",{"data-aos":"fade-down","data-aos-duration":"600",children:e.title}),Object(M.jsx)("h2",{"data-aos":"fade-down","data-aos-duration":"600","data-aos-delay":"200",children:e.author}),Object(M.jsx)("p",{"data-aos":"fade-down","data-aos-duration":"600","data-aos-delay":"300",children:e.genre}),Object(M.jsxs)(Le,{"data-aos":"zoom-out","data-aos-duration":"600","data-aos-delay":"400",to:e.path,primary:"true",children:[e.label,Object(M.jsx)(Ce,{})]})]})]})},t)})),Object(M.jsxs)(Ie,{children:[Object(M.jsx)(Fe,{onClick:function(){c.current&&clearTimeout(c.current),i(0===o?r-1:o-1),console.log(o)}}),Object(M.jsx)(ze,{onClick:function(){c.current&&clearTimeout(c.current),i(o===r-1?0:o+1),console.log(o)}})]})]})})})},He=S.c.section(j||(j=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 4rem 0rem;\n"]))),Te=S.c.div(f||(f=Object(L.a)(["\n  padding: 3rem calc((100vw - 1300px) / 2);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 800px;\n\n  @media screen and (max-width: 768px){\n    grid-template-columns: 1fr;\n  }\n"]))),qe=S.c.div(g||(g=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  line-height: 1.4;\n  padding: 1rem 2rem;\n  order: ",";\n\n  h1{\n    margin-bottom: 1rem;\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n  p {\n    margin-bottom: 2rem;\n  }\n"])),(function(e){return e.reverse?"2":"1"})),Ee=S.c.div(x||(x=Object(L.a)(["\n  padding: 1rem 2rem;\n  order ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (max-width:768px) {\n    //On mobile screen, the test always comes first\n    order: ",";\n  }\n\n  img{\n    width:100%;\n    height: 100%;\n    object-fit: cover;\n\n    @media screen and (max-width: 768px){\n      width:90%;\n      height: 90%;\n    }\n  }\n"])),(function(e){return e.reverse?"1":"2"}),(function(e){return e.reverse?"2":"1"})),Me=function(e){var t=e.heading,n=e.paragraphOne,a=e.paragraphTwo,o=e.buttonLabel,i=e.reverse,r=e.image,c=e.delay;return Object(M.jsx)(He,{children:Object(M.jsxs)(Te,{children:[Object(M.jsxs)(qe,{reverse:i,"data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true","data-aos-delay":c,"data-aos-anchor-placement":"center-bottom",children:[Object(M.jsx)("h1",{children:t}),Object(M.jsx)("p",{children:n}),Object(M.jsx)("p",{children:a}),Object(M.jsx)(q,{to:"/books",primary:"true",children:o})]}),Object(M.jsx)(Ee,{reverse:i,children:Object(M.jsx)("img",{src:r,alt:"books",reverse:i,"data-aos":"zoom-out","data-aos-duration":"1000","data-aos-once":"true","data-aos-delay":c,"data-aos-anchor-placement":"center-bottom"})})]})})},Be=n.p+"static/media/bookOne.e580179b.jpg",Ae=n.p+"static/media/bookTwo.936c6e17.jpg",Re=S.c.section.withConfig({displayName:"Favs__Section",componentId:"sc-2mwja2-0"})(["width:100%;height:100%;padding:10rem calc((100vw - 1300px) / 2 );"]),De=S.c.div.withConfig({displayName:"Favs__Container",componentId:"sc-2mwja2-1"})(["height:100%;width:100%;padding:2rem 1rem;"]),Ge=S.c.div.withConfig({displayName:"Favs__Heading",componentId:"sc-2mwja2-2"})(["font-size:1.5rem;padding:2rem 1rem;margin-bottom:40px;@media screen and (max-width:768px){text-align:start;}"]),Pe=S.c.div.withConfig({displayName:"Favs__InfoRow",componentId:"sc-2mwja2-3"})(["display:flex;flex-direction:row;padding-left:1rem 0 rem;@media screen and (max-width:768px){flex-direction:column;}"]),Ve=S.c.div.withConfig({displayName:"Favs__InfoWrap",componentId:"sc-2mwja2-4"})(["padding:0rem 1rem;min-height:550px;height:100%;h2{margin-bottom:1rem;font-weight:400;}@media screen and (max-width:768px){margin-bottom:1rem;}"]),Ye=S.c.img.withConfig({displayName:"Favs__Image",componentId:"sc-2mwja2-5"})(["width:100%;height:100%;max-width:600px;max-height:400px;object-fit:cover;margin-bottom:1rem"]),Je=Object(S.c)(Ye).withConfig({displayName:"Favs___StyledImage",componentId:"sc-2mwja2-6"})(["margin-top:120px;@media screen and (max-width:768px){margin-top:0px;}"]),We=Object(S.c)(ne.a).withConfig({displayName:"Favs__Arrow",componentId:"sc-2mwja2-7"})(["margin-left:10px;"]),Ke=Object(S.c)(T.b).withConfig({displayName:"Favs__InfoLink",componentId:"sc-2mwja2-8"})(["display:flex;align-items:center;text-decoration:none;color:#072E6E;width:180px;transition:0.3s;&:hover{transform:translateY(-3px);}"]),Qe=function(){return Object(M.jsx)(Re,{children:Object(M.jsxs)(De,{children:[Object(M.jsx)(Ge,{children:Object(M.jsx)("h1",{"data-aos":"fade-right","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom",children:"View this week's book club picks:"})}),Object(M.jsxs)(Pe,{children:[Object(M.jsxs)(Ve,{children:[Object(M.jsx)(Ye,{src:Be,alt:"books","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom"}),Object(M.jsx)("h2",{"data-aos":"fade-right","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom",children:"Strong female voice"}),Object(M.jsxs)(Ke,{to:"/books","data-aos":"fade-right","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom",children:[Object(M.jsx)("p",{children:"View Summary"}),Object(M.jsx)(We,{})]})]}),Object(M.jsxs)(Ve,{children:[Object(M.jsx)(Je,{src:Ae,alt:"books","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom"}),Object(M.jsx)("h2",{"data-aos":"fade-right","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom",children:"Looking for a romance novel?"}),Object(M.jsxs)(Ke,{to:"/books","data-aos":"fade-right","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom",children:[Object(M.jsx)("p",{children:"View Summary"}),Object(M.jsx)(We,{})]})]})]})]})})},Ue=n.p+"static/media/femaleOne.fc37ba20.jpg",Xe=n.p+"static/media/femaleTwo.c3aeae41.jpg",Ze={heading:"Explore some of my favorite stories",paragraphOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",paragraphTwo:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",buttonLabel:"View Books",image:Ue,reverse:!1,delay:100},$e={heading:"Stories written by strong women",paragraphOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",paragraphTwo:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",buttonLabel:"View Books",image:Xe,reverse:!0,delay:300},et=n.p+"static/media/bookThree.f5bf058c.jpg",tt=n.p+"static/media/bookFour.dbc388b2.jpg",nt=n.p+"static/media/bookFive.4dfeebd9.jpg",at=n.p+"static/media/bookSix.d85222e4.jpg",ot=n.p+"static/media/bookEight.a778ff81.jpg",it=[{title:"Untamed",author:"Glennon Doyle",genre:"Memoir",path:"/fav",label:"List of Favs",image:Be,alt:"Favorite books"},{title:"The Light We Lost",author:"Jill Santopolo",genre:"Fiction, Romance novel",path:"/fav",label:"List of Favs",image:Ae,alt:"Favorite books"},{title:"Becoming",author:"Michelle Obama",genre:"Memoir",path:"/fav",label:"List of Favs",image:et,alt:"Favorite books"},{title:"Such A Fun Age",author:"Kiley Reid",genre:"Novel",path:"/fav",label:"List of Favs",image:tt,alt:"Favorite books"},{title:"The Gift Of Imperfection",author:"Bren\xe9 Brown",genre:"Self-help",path:"/fav",label:"List of Favs",image:nt,alt:"Favorite books"},{title:"13 Things Mentally Strong People Do",author:"Amy Morin",genre:"Self-help",path:"/fav",label:"List of Favs",image:at,alt:"Favorite books"},{title:"Group",author:"Christie Tate",genre:"Memoir",path:"/fav",label:"List of Favs",image:ot,alt:"Favorite books"}],rt=S.c.section(u||(u=Object(L.a)(["\n  background: #000d1a;\n  padding: 12rem 0rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),ct=S.c.div(w||(w=Object(L.a)(["\n  background: #fff;\n  padding: 3rem 2rem;\n  position: relative;\n"]))),dt=S.c.div(O||(O=Object(L.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n"]))),st=S.c.div(v||(v=Object(L.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0px -15px;\n  justify-content: flex-start;\n  padding: 1rem;\n"]))),lt=S.c.div(y||(y=Object(L.a)(["\n  flex: 0 0 50%;\n\n\n  @media screen and (max-width:768px){\n    flex: 0 0 100%;\n    max-width: 100%;\n    margin-top: 250px;\n  }\n\n  h1{\n    margin-bottom: 2rem;\n    font-size: 2rem;\n  }\n  p{\n    margin-bottom: 1rem;\n    line-height: 1.8;\n    text-align: justify;\n  }\n"]))),mt=S.c.div(k||(k=Object(L.a)(["\n  position: absolute;\n  top: -80px;\n  right: 0;\n  max-width: 850px;\n  height: 140%;\n  width:45%;\n  padding-left: 1rem;\n\n  @media screen and (max-width: 768px){\n    height: 320px;\n    top: -65px;\n    width: 80%;\n    margin: 0 auto;\n    left: 0;\n  }\n"]))),pt=S.c.img(_||(_=Object(L.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),ht=function(){return Object(M.jsx)(rt,{children:Object(M.jsx)(ct,{children:Object(M.jsxs)(dt,{children:[Object(M.jsx)(st,{children:Object(M.jsxs)(lt,{children:[Object(M.jsx)("h1",{"data-aos":"fade-down","data-aos-duration":"1000","data-aos-ancho-placement":"center-bottom",children:"- Glennon Doyle"}),Object(M.jsx)("p",{"data-aos":"fade-down","data-aos-duration":"1000","data-aos-ancho-placement":"center-bottom","data-aos-delay":"200",children:"\" I watched Tabitha gnawing that steak in the zoo dirt and thought: day after day this wild animal chases dirty pink bunnies down the well-worn, narrow path they cleared for her. Never looking left or right. Never catching that damn bunny, settling instead for a store bought steak and the distracted approval of sweaty strangers. Obeying the zookeeper's every command, just like Minnie, the Lab she's been trained to believe she is. Unaware that if she remembered her wildness __ just for a moment __ she could tear those zookeepers to shreds. \""}),Object(M.jsx)(q,{to:"/books","data-aos":"fade-down","data-aos-duration":"1000","data-aos-ancho-placement":"center-bottom","data-aos-delay":"400",children:"Learn More"})]})}),Object(M.jsx)(mt,{children:Object(M.jsx)(pt,{src:et,"data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true","data-aos-ancho-placement":"center-bottom"})})]})})})},bt=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Se,{slides:it}),Object(M.jsx)(Me,Object(ge.a)({},Ze)),Object(M.jsx)(Qe,{}),Object(M.jsx)(ht,{}),Object(M.jsx)(Me,Object(ge.a)({},$e))]})},jt=function(){return Object(M.jsx)(ht,{})},ft=function(){return Object(M.jsx)(Se,{slides:it})},gt=function(){return Object(M.jsx)(Qe,{})},xt=n(33),ut=n.n(xt);n(45);var wt=function(){var e=Object(C.useState)(!1),t=Object(z.a)(e,2),n=t[0],a=t[1],o=Object(J.f)(),i=function(){a(!n)};return Object(C.useLayoutEffect)((function(){window.scrollTo(0,0)}),[o.pathname]),Object(C.useEffect)((function(){ut.a.init({})}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fe,{}),Object(M.jsx)(te,{toggle:i}),Object(M.jsx)(Y,{isOpen:n,toggle:i}),Object(M.jsxs)(J.c,{children:[Object(M.jsx)(J.a,{path:"/",component:bt}),Object(M.jsx)(J.a,{path:"/quote",component:jt}),Object(M.jsx)(J.a,{path:"/fav",component:ft}),Object(M.jsx)(J.a,{path:"/inspi",component:gt})]}),Object(M.jsx)(je,{})]})},Ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))};F.a.render(Object(M.jsx)(I.a.StrictMode,{children:Object(M.jsx)(T.a,{children:Object(M.jsx)(wt,{})})}),document.getElementById("root")),Ot()}},[[46,1,2]]]);
//# sourceMappingURL=main.5ddab7b5.chunk.js.map