(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[280],{3955:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advisors",function(){return t(7024)}])},7024:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return j},default:function(){return g}});var n=t(4051),r=t.n(n),a=t(5893),i=t(7294),l=t(2140),c=t(1607),o=t(2534),d=t(1664),m=function(e){var s,t=e.advisors,n=e.practiceArea;return(0,a.jsx)("div",{className:"min-w-full bg-gray_light_2 font-openSans",children:(0,a.jsx)("div",{className:"flex min-w-full px-4 lg:max-w-full",children:(0,a.jsxs)("div",{className:"flex-col flex-1 px-0 sm:px-8 py-12",children:[(0,a.jsx)("div",{className:"my-6 text-base sm:text-lg text-gray-700",children:"You searched for ".concat(n)}),0===t.length&&(0,a.jsx)("div",{children:"No advisor Found"}),t.length>0&&t.map((function(e){var t,r;return(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row w-full my-6 bg-white rounded-md shadow",children:[(0,a.jsx)("div",{className:"flex-1 flex items-center justify-center p-4 cursor-pointer",children:(0,a.jsx)(d.default,{href:"/advisor/[advisor]/",as:"/advisor/".concat(e.slug),passHref:!0,children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("img",{alt:e.acf.firm_logo.name,src:null!==(s=null===(t=e.acf.firm_logo)||void 0===t||null===(r=t.sizes)||void 0===r?void 0:r.medium)&&void 0!==s?s:"",className:"w-28 md:w-36 lg:w-40 object-contain"})})})}),(0,a.jsxs)("div",{className:"flex-4 px-3 sm:px-8 py-4 border-l border-gray-200 border-solid",children:[(0,a.jsx)("h3",{className:"flex-auto text-lg sm:text-xl mb-2 font-bold font-notoSerif text-blue",children:e.acf.firm_name}),(0,a.jsxs)("div",{className:"pb-4 border-b border-gray-200",children:[(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"text-sm md:text-medium lg:text-base font-semibold",children:"Contact Person:"})," ","\xa0",(0,a.jsx)("span",{className:"text-sm md:text-medium lg:text-base",children:e.acf.contact_person})]}),(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsxs)("span",{className:"text-sm md:text-medium lg:text-base font-semibold",children:[" ","Expertise:"]})," ","\xa0",(0,a.jsx)("span",{className:"text-sm md:text-medium lg:text-base",children:n})]}),(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"text-sm md:text-medium lg:text-base font-semibold",children:"City:"})," ","\xa0",(0,a.jsx)("span",{className:"text-sm md:text-medium lg:text-base",children:e.acf.citys})]}),(0,a.jsxs)("div",{className:"mt-6",children:[(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"font-semibold",children:"Telephone:"})," \xa0",(0,a.jsx)("span",{className:"cursor-pointer hover:underline",children:e.acf.phone_number})]}),(0,a.jsxs)("div",{className:"text-sm",children:[(0,a.jsx)("span",{className:"font-semibold",children:"Email:"})," \xa0",(0,a.jsx)("span",{className:"cursor-pointer hover:underline",children:e.acf.email})]})]})]}),(0,a.jsx)("div",{className:"flex justify-end my-2",children:(0,a.jsxs)("button",{className:"border-none text-primary border-b border-solid group border-current inline-block bg-transparent pointer pb-0.5 custom-transition hover:text-grey_dark_1",children:[(0,a.jsx)(d.default,{href:"/advisor/[advisor]/",as:"/advisor/".concat(e.slug),passHref:!0,children:(0,a.jsx)("a",{target:"_blank",children:"View Profile"})}),(0,a.jsx)("span",{className:"ml-1 custom-transition group-hover:ml-2",children:"\u2192"})]})})]})]},e.id)}))]})})})},u=t(9669),x=t.n(u);function f(e,s,t,n,r,a,i){try{var l=e[a](i),c=l.value}catch(o){return void t(o)}l.done?s(c):Promise.resolve(c).then(n,r)}function h(e){return function(){var s=this,t=arguments;return new Promise((function(n,r){var a=e.apply(s,t);function i(e){f(a,n,r,i,l,"next",e)}function l(e){f(a,n,r,i,l,"throw",e)}i(void 0)}))}}function p(e){return v.apply(this,arguments)}function v(){return(v=h(r().mark((function e(s){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x().get("https://wpbackend.navisa.af/wp-json/wp/v2/abr-advisor/?per_page=20").then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 2:return t=e.sent,n=t.filter((function(e){return e.acf.practice_area.find((function(e){return e.post_title===s}))})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,s,t,n,r,a,i){try{var l=e[a](i),c=l.value}catch(o){return void t(o)}l.done?s(c):Promise.resolve(c).then(n,r)}var j=!0;function g(e){var s=e.areas,t=(0,i.useState)(null),n=t[0],d=t[1],u=(0,i.useState)(!1),x=u[0],f=u[1],h=(0,i.useState)(null),v=h[0],j=h[1],g=(0,i.useState)(null),N=g[0],w=g[1],y=(0,i.useState)(!1),_=y[0],k=y[1],S=(0,i.useState)(""),P=(S[0],S[1],function(){var e,s=(e=r().mark((function e(){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!v||!_){e.next=18;break}return d(""),f(!0),e.prev=4,e.next=7,p(v.label);case 7:s=e.sent,w(s),f(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),d("an error occurred, please try again"),f(!1);case 16:e.next=19;break;case 18:d("Please select an expertise");case 19:case"end":return e.stop()}}),e,null,[[4,12]])})),function(){var s=this,t=arguments;return new Promise((function(n,r){var a=e.apply(s,t);function i(e){b(a,n,r,i,l,"next",e)}function l(e){b(a,n,r,i,l,"throw",e)}i(void 0)}))});return function(){return s.apply(this,arguments)}}());return(0,a.jsxs)(o.Z,{title:"Find an Advisor - Afghanistan Business Referrals (ABR)",descriptionContent:"ABR members represent Afghanistan leading legal, accountancy and financial advisers. Each member is recommended exclusively by jurisdiction and practice area expertise.",canonical:"https://abr.af/advisor/",active:"find an advisor",children:[(0,a.jsx)("div",{className:"min-w-full bg-gray_light_2 font-openSans",children:(0,a.jsx)("div",{className:"pb-7 md:pb-14 pt-12 md:pt-24",children:(0,a.jsxs)("div",{className:"flex flex-col p-4 m-8 mb-0 border border-gray-300 border-solid md:p-12",children:[(0,a.jsx)("h1",{className:"text-2xl font-semibold sm:text-3xl",children:"Find an Advisor"}),(0,a.jsx)("div",{className:"mt-4 text-sm md:text-medium lg:text-base xl:text-lg",children:"Please use the search function below to find the right adviser to meet your needs"}),(0,a.jsxs)("div",{className:"items-center mt-2 flex flex-col md:flex-row",children:[(0,a.jsx)("div",{className:"w-full md:w-64",children:(0,a.jsx)(l.ZP,{value:v,onChange:function(e){j(e),k(!0),w(null),d("")},options:s,isClearable:!0,menuPlacement:"auto",isSearchable:!0})}),(0,a.jsx)("div",{className:"w-full md:w-max mt-4 flex items-center justify-center text-white bg-gray-700 md:mt-0 sm:ml-4",children:(0,a.jsxs)("button",{onClick:P,className:"flex items-center justify-items-center px-8 py-1.5 outline-none border-none focus:outline-none",children:[(0,a.jsx)("span",{className:"".concat(x?"mr-4":"mr-0"),children:"Search"}),(0,a.jsx)("span",{className:"flex items-center justify-center",children:x&&(0,a.jsx)(c.Z,{type:"Oval",color:"#fff",height:20,width:20})})]})})]}),(0,a.jsx)("div",{className:"text-primary text-medium mt-2",children:n})]})})}),N&&(0,a.jsx)(m,{advisors:N,isClicked:_,practiceArea:v.label})]})}}},function(e){e.O(0,[649,140,534,774,888,179],(function(){return s=3955,e(e.s=s);var s}));var s=e.O();_N_E=s}]);