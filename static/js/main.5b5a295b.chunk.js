(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={stats:"Statistic_stats__1kpdZ",value:"Statistic_value__nNKwZ",type:"Statistic_type__23Pcw"}},,,function(e,t,n){e.exports={Controls:"Feedback_Controls__1t0Xj",Statistic:"Feedback_Statistic__3aTZ8"}},,function(e,t,n){e.exports={Section:"Section_Section__3T2DE"}},function(e,t,n){e.exports={buttons:"FeedbackOptions_buttons__1SSsK"}},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(6),i=n.n(o),r=(n(15),n(3)),l=n(5),u=n.n(l),b=n(7),j=n.n(b),d=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{className:j.a.Section,children:[t&&Object(c.jsx)("h2",{children:t}),n]})},O=n(8),f=n.n(O),p=function(e){var t=e.options,n=e.onLeaveFeedback;return console.log(t),t.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{name:e,className:f.a.buttons,type:"button",onClick:n,children:e})},e)}))},h=n(2),x=n.n(h),v=function(e){return console.log(e),Object.keys(e).map((function(t){return Object(c.jsx)("div",{className:x.a.stats,children:Object(c.jsxs)("span",{className:x.a.type,children:["positivePercentage"===t?"POSITIVE PERCENTAGE":t.toUpperCase(),":",Object(c.jsxs)("span",{className:x.a.value,children:[e[t],"positivePercentage"===t&&"%"]})]})},t)}))},g=n(9),_=n.n(g),S=function(e){var t=e.message;return Object(c.jsx)("p",{className:_.a.Notification,children:t})},k=0,m=0;function N(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(0),i=Object(r.a)(o,2),l=i[0],b=i[1],j=Object(s.useState)(0),O=Object(r.a)(j,2),f=O[0],h=O[1];console.log(n,l,f,m,k);var x=function(){m+=1},g=function(){k=Math.round(n/m*100)};return console.log(n,l,f,m,k),Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{title:"Please leave feedback",className:"Section",children:Object(c.jsx)("div",{className:u.a.Controls,children:Object(c.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1})),console.log("good"+n);break;case"neutral":b((function(e){return e+1})),console.log("neutral"+l);break;case"bad":h((function(e){return e+1})),console.log("bad"+f);break;default:return}x(),g()}})})}),Object(c.jsx)("div",{className:u.a.Statistic,children:Object(c.jsxs)(d,{title:"Statistic",className:"Section",children:[!m&&Object(c.jsx)(S,{message:"No feedback given"}),m&&Object(c.jsx)(v,{good:n,neutral:l,bad:f,total:m,positivePercentage:k})]})})]})}var w=function(){return Object(c.jsx)(N,{})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.5b5a295b.chunk.js.map