(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(16),a=n.n(i),j=(n(43),n(44),n(5)),s=n(20),l=n(1);var o=function(){var e=Object(j.f)();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"btnCon",children:Object(l.jsxs)("div",{className:"d-grid gap-2 container",children:[Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.push("./ViewOrder")},children:" View Order"}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.push("./PlaceOrder")},children:" Place Order"}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.push("./CancelOrder")},children:" Cancel Order"})]})})]})},h=n(8),d=n(35),u={color:"orange"};var O=function(){var e=Object(j.f)(),t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("https://order-pizza-api.herokuapp.com/api/orders").then((function(e){console.log(e.json),e.json().then((function(e){console.log("result",e),i(e)}))}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Orders List"}),Object(l.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,variant:"warning",style:u,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Order ID#"}),Object(l.jsx)("th",{children:"Crust"}),Object(l.jsx)("th",{children:"Flavour"}),Object(l.jsx)("th",{children:"Time Stamp"})]})}),Object(l.jsx)("tbody",{children:r.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.Order_ID}),Object(l.jsx)("td",{children:e.Crust}),Object(l.jsx)("td",{children:e.Flavor}),Object(l.jsx)("td",{children:e.Timestamp})]})}))})]}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.goBack()},children:" Go Back "})]})};var b=function(){var e=Object(j.f)(),t=Object(c.useState)(""),n=Object(h.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)(""),o=Object(h.a)(a,2),d=o[0],u=o[1],O=Object(c.useState)(""),b=Object(h.a)(O,2),x=b[0],f=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"What do you Like? "}),Object(l.jsx)("label",{for:"cars",children:"Crust:"}),Object(l.jsxs)("select",{name:"crust",onChange:function(e){i(e.target.value)},children:[Object(l.jsx)("option",{value:"Select",selected:!0,children:" Select "}),Object(l.jsx)("option",{value:"STUFFED",children:"Stuffed"}),Object(l.jsx)("option",{value:"CRACKER",children:"Cracker"}),Object(l.jsx)("option",{value:"THIN",children:"Thin"})]}),Object(l.jsx)("label",{for:"flavor",children:"Flavor:"}),Object(l.jsxs)("select",{name:"flavor",onChange:function(e){u(e.target.value)},children:[Object(l.jsx)("option",{value:"Select",selected:!0,children:" Select "}),Object(l.jsx)("option",{value:"FAJITA",children:"Fajita"}),Object(l.jsx)("option",{value:"CHEESE",children:"Cheese"}),Object(l.jsx)("option",{value:"VEGGIE",children:"Veggie"})]}),Object(l.jsx)("label",{for:"size",children:"Size:"}),Object(l.jsxs)("select",{name:"size",onChange:function(e){f(e.target.value)},children:[Object(l.jsx)("option",{value:"Select",selected:!0,children:" Select "}),Object(l.jsx)("option",{value:"S",children:"Small"}),Object(l.jsx)("option",{value:"M",children:"Medium"}),Object(l.jsx)("option",{value:"L",children:"Large"})]}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){if(console.log(r,d,x),""===r||""===d||""===x)alert("please select appropriate options");else{var e={Flavor:d,Crust:r,Size:x,Table_No:9},t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzExNzE5MTksIm5iZiI6MTYzMTE3MTkxOSwianRpIjoiMmRjM2MwZWYtYWZlNy00Y2QwLWIyNTMtM2RlMWM4MTRlYzRiIiwiZXhwIjoxNjMxMTcyODE5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.S6t5pUBgCjIwJ3FJr8ifG3itxmb06Rux7aG4Yf9ZE0U")},body:JSON.stringify(e)};fetch("https://order-pizza-api.herokuapp.com/api/orders",t).then((function(e){201===e.status&&alert("Your order has been registered")}))}},children:"Click here"}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.goBack()},children:" Go Back "})]})},x={color:"orange"};var f=function(){var e=Object(j.f)(),t=Object(c.useState)([]),n=Object(h.a)(t,2),r=n[0],i=n[1];return Object(c.useEffect)((function(){fetch("https://order-pizza-api.herokuapp.com/api/orders",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Cancel Orders List"}),Object(l.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,variant:"warning",style:x,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Order ID#"}),Object(l.jsx)("th",{children:"Crust"}),Object(l.jsx)("th",{children:"Flavour"}),Object(l.jsx)("th",{children:"Size"}),Object(l.jsx)("th",{children:"Time Stamp"}),Object(l.jsx)("th",{})]})}),Object(l.jsx)("tbody",{children:r.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.Order_ID}),Object(l.jsx)("td",{children:e.Crust}),Object(l.jsx)("td",{children:e.Flavor}),Object(l.jsx)("td",{children:e.Size}),Object(l.jsx)("td",{children:e.Timestamp}),Object(l.jsx)("td",{children:Object(l.jsx)(s.a,{variant:"outline-warning",size:"md",onClick:function(){return t=e.Order_ID,void fetch("https://order-pizza-api.herokuapp.com/api/orders/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&alert("Cancelled successfully"),window.location.reload()}));var t},children:"Cancel Order"})})]},t)}))})]}),Object(l.jsx)(s.a,{variant:"outline-warning",size:"lg",onClick:function(){return e.goBack()},children:" Go Back "})]})},A=n(17),m=n(56),p=n(55),g=n(57);n(50);var z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(A.a,{children:[Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{bg:"dark",variant:"dark",children:Object(l.jsxs)(p.a,{children:[Object(l.jsxs)(m.a.Brand,{href:"https://rida-jamil.github.io/Pizza-App/",children:[" ",Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"})," Pizzeria "]}),Object(l.jsx)(g.a,{className:"me-auto",children:Object(l.jsx)(g.a.Link,{as:A.b,to:"/Home",children:" Start Here "})})]})})}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/Home",children:Object(l.jsx)(o,{})}),Object(l.jsx)(j.a,{path:"/ViewOrder",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/PlaceOrder",children:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{path:"/CancelOrder",children:Object(l.jsx)(f,{})})]})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(z,{})}),document.getElementById("root")),v()}},[[53,1,2]]]);
//# sourceMappingURL=main.9e0e4183.chunk.js.map