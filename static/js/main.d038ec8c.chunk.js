(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__d8REJ",imageGalleryItem:"ImageGallery_imageGalleryItem__14xq4"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1QKJ8",modal:"Modal_modal__2hIEk"}},12:function(e,t,a){e.exports={App:"App_App__1miQl",Loader:"App_Loader__2seaF"}},15:function(e,t,a){e.exports={imageGalleryImage:"ImageGalleryItem_imageGalleryImage__2ZS7C"}},16:function(e,t,a){e.exports={buttonMore:"Button_buttonMore__1QUK2"}},21:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(21),a(13)),s=a(3),l=a(14),u=a.n(l),m=a(8),h=a(5),j=a.n(h),b=a(1);function d(e){var t=e.onSearchImages;return Object(b.jsx)("header",{className:j.a.bar,children:Object(b.jsxs)("form",{onSubmit:t,className:j.a.formSearch,name:"formSearch",children:[Object(b.jsx)("button",{type:"submit",className:j.a.buttonSearch,name:"buttonSearch",children:" "}),Object(b.jsx)("input",{type:"text",name:"inputSearch",className:j.a.inputSearch,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var f=a(15),p=a.n(f);function g(e){var t=e.image,a=e.onShowImageInModal;return Object(b.jsx)("img",{onClick:a,id:t.id,src:t.webformatURL,lowsrc:t.largeImageURL,alt:t.tags,className:p.a.imageGalleryImage})}var O=a(10),_=a.n(O);function S(e){var t=e.imageList,a=e.onShowImageInModal;return Object(b.jsx)("ul",{className:_.a.imageGallery,children:t.map((function(e,t){return Object(b.jsx)("li",{className:_.a.imageGalleryItem,children:Object(b.jsx)(g,{image:e,onShowImageInModal:a})},t)}))})}var x=a(16),v=a.n(x);function y(e){var t=e.onLoadMore;return Object(b.jsx)("button",{onClick:t,type:"button",className:v.a.buttonMore,children:"Load more"})}var I=a(11),w=a.n(I);function M(e){var t=e.url,a=e.closeModal;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}})),Object(b.jsx)("div",{onClick:function(e){"IMG"!==e.target.nodeName&&a()},className:w.a.overlay,children:Object(b.jsx)("div",{className:w.a.modal,children:Object(b.jsx)("img",{src:t,alt:""})})})}var N=a(12),G=a.n(N);a(43);function L(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(1),o=Object(s.a)(c,2),l=o[0],h=o[1],j=Object(n.useState)([]),f=Object(s.a)(j,2),p=f[0],g=f[1],O=Object(n.useState)(!1),_=Object(s.a)(O,2),x=_[0],v=_[1],I=Object(n.useState)(""),w=Object(s.a)(I,2),N=w[0],L=w[1],k=Object(n.useState)(!1),E=Object(s.a)(k,2),B=E[0],A=E[1];Object(n.useEffect)((function(){a&&(A(!0),fetch("https://pixabay.com/api/?key=22659093-928fc585fa86297f1703a77f0&q=".concat(a,"&orientation=horizontal&page=").concat(l,"&per_page=12")).then((function(e){if(e.ok)return e.json()})).then((function(e){if(0===e.hits.length)throw A(!1),new Error;g((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),A(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(){m.b.error("Please input correct picture name")})))}),[a,l]);return Object(b.jsxs)("div",{className:G.a.App,children:[Object(b.jsx)(d,{onSearchImages:function(e){if(e.preventDefault(),""===e.target.elements.inputSearch.value)return Object(m.b)("Please input picture name");r(e.target.elements.inputSearch.value),g([]),h(1),e.target.reset()}}),Object(b.jsx)(S,{imageList:p,onShowImageInModal:function(e){e.preventDefault(),L(e.target.lowsrc),v(!0)}}),B&&Object(b.jsx)("div",{className:G.a.Loader,children:Object(b.jsx)(u.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:50})}),0!==p.length&&Object(b.jsx)(y,{onLoadMore:function(e){h((function(e){return e+1}))}}),x&&Object(b.jsx)(M,{url:N,closeModal:function(){v(!1)}}),Object(b.jsx)(m.a,{})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={bar:"SearchBar_bar__37RaH",formSearch:"SearchBar_formSearch__4ujNs",buttonSearch:"SearchBar_buttonSearch__10RJQ",inputSearch:"SearchBar_inputSearch__3bLUA"}}},[[44,1,2]]]);
//# sourceMappingURL=main.d038ec8c.chunk.js.map