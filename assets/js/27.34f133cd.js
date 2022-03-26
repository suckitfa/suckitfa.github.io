(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{431:function(t,a,s){t.exports=s.p+"assets/img/image-callstack.dea6a823.png"},547:function(t,a,s){"use strict";s.r(a);var n=s(34),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"为什么是单线程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么是单线程"}},[t._v("#")]),t._v(" 为什么是单线程？")]),t._v(" "),n("p",[t._v("js的发明的初衷就是作为客户端的脚本进行简单的校验，与用户交互，操作DOM。决定了只能是单线程。H5中允许开启web worker子线程，不可以操作DOM，受控于主线程。")]),t._v(" "),n("h3",{attrs:{id:"任务队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),n("p",[t._v("one thread == one call stack == one thing at a time\n主线程之外，有一个任务队列，只要异步任务有了运行结果，就在任务队列中放置一个事件。任务队列是一个事件队列 （可以看成是消息队列）\n主线程不断的从 “任务队列” 中读取事件，这个过程是循环不断的。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mutiply")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("square")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mutiply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("printSquare")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" squared "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("square")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("squared"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:s(431),alt:"image-20220110224318922"}})]),t._v(" "),n("h4",{attrs:{id:"what-happens-when-things-are-slow-like-fetching-data-network-image-loading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-when-things-are-slow-like-fetching-data-network-image-loading"}},[t._v("#")]),t._v(" what happens when things are slow? like fetching data, network, image loading")]),t._v(" "),n("h2",{attrs:{id:"异步常见的场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异步常见的场景"}},[t._v("#")]),t._v(" 异步常见的场景")]),t._v(" "),n("ol",[n("li",[t._v("网络 ajax fetch")]),t._v(" "),n("li",[t._v("IO readFile readdir")]),t._v(" "),n("li",[t._v("定时函数 setTimeout/setInterval")])])])}),[],!1,null,null,null);a.default=e.exports}}]);