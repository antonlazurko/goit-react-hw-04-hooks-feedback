(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={stats:"Statistic_stats__1kpdZ",value:"Statistic_value__nNKwZ",type:"Statistic_type__23Pcw"}},,,function(t,e,n){t.exports={Controls:"Feedback_Controls__1t0Xj",Statistic:"Feedback_Statistic__3aTZ8"}},,function(t,e,n){t.exports={Section:"Section_Section__3T2DE"}},function(t,e,n){t.exports={buttons:"FeedbackOptions_buttons__1SSsK"}},function(t,e,n){},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),i=n(6),o=n.n(i),r=(n(15),n(3)),u=n(5),b=n.n(u),j=n(7),l=n.n(j),d=function(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{className:l.a.Section,children:[e&&Object(c.jsx)("h2",{children:e}),n]})},O=n(8),f=n.n(O),p=function(t){var e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(c.jsx)("div",{children:Object(c.jsx)("button",{name:t,className:f.a.buttons,type:"button",onClick:n,children:t})},t)}))},h=n(2),x=n.n(h),v=function(t){return Object.keys(t).map((function(e){return Object(c.jsx)("div",{className:x.a.stats,children:Object(c.jsxs)("span",{className:x.a.type,children:["positivePercentage"===e?"POSITIVE PERCENTAGE":e.toUpperCase(),":",Object(c.jsxs)("span",{className:x.a.value,children:[t[e],"positivePercentage"===e&&"%"]})]})},e)}))},_=n(9),S=n.n(_),k=function(t){var e=t.message;return Object(c.jsx)("p",{className:S.a.Notification,children:e})};function m(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(0),o=Object(r.a)(i,2),u=o[0],j=o[1],l=Object(a.useState)(0),O=Object(r.a)(l,2),f=O[0],h=O[1],x=function(){return n+u+f},_=function(){return Math.round(n/x()*100)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{title:"Please leave feedback",className:"Section",children:Object(c.jsx)("div",{className:b.a.Controls,children:Object(c.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t.target.name){case"good":s((function(t){return t+1}));break;case"neutral":j((function(t){return t+1}));break;case"bad":h((function(t){return t+1}));break;default:return}x(),_()}})})}),Object(c.jsx)("div",{className:b.a.Statistic,children:Object(c.jsxs)(d,{title:"Statistic",className:"Section",children:[!x()&&Object(c.jsx)(k,{message:"No feedback given"}),x()&&Object(c.jsx)(v,{good:n,neutral:u,bad:f,total:x(),positivePercentage:_()})]})})]})}var N=function(){return Object(c.jsx)(m,{})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.8b19fa0e.chunk.js.map