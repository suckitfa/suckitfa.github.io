(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{426:function(t,s,a){t.exports=a.p+"assets/img/js-context.ac37980e.png"},532:function(t,s,a){"use strict";a.r(s);var n=a(34),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"浏览器执行js的机制床"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浏览器执行js的机制床"}},[t._v("#")]),t._v(" 浏览器执行js的机制床")]),t._v(" "),n("p",[t._v("执行上下文 + 调用栈\n"),n("strong",[t._v("变量提升")]),t._v("： 声明和赋值操作\n所谓的变量提升是指，在JavaScript代码执行过程中，JavaScript引擎把变量的声明部分和函数的声明部分提到开头的行为。变量提升后，会给变量设置默认值undefined;")]),t._v(" "),n("h3",{attrs:{id:"javascript的执行流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript的执行流程"}},[t._v("#")]),t._v(" javascript的执行流程")]),t._v(" "),n("p",[t._v("加载代码阶段--\x3e编译阶段 ---\x3e 执行阶段")]),t._v(" "),n("h3",{attrs:{id:"编译阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译阶段"}},[t._v("#")]),t._v(" 编译阶段")]),t._v(" "),n("p",[n("strong",[t._v("编译代码，创建")])]),t._v(" "),n("ol",[n("li",[t._v("执行上下文")])]),t._v(" "),n("ul",[n("li",[t._v("变量环境(this,变量，对象及其函数)")]),t._v(" "),n("li",[t._v("词法环境 (支持块级作用域 let const， 根据作用域块，在词法环境内部维护这一个栈结构)\n先在词法环境中查找，然后在变量环境中查找，只要找到就停止查找。")])]),t._v(" "),n("blockquote",[n("p",[t._v("块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript引擎也就同时支持了变量提升和块级作用域了")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("可执行代码")])]),t._v(" "),n("h3",{attrs:{id:"编译成执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译成执行上下文"}},[t._v("#")]),t._v(" 编译成执行上下文")]),t._v(" "),n("ol",[n("li",[t._v("全局")]),t._v(" "),n("li",[t._v("函数")]),t._v(" "),n("li",[t._v("eval")])]),t._v(" "),n("p",[t._v("调用栈：用来管理函数之间的调用关系\n调用一个函数fn，为其创建执行上下文，并压入栈顶，执行fn的代码，执行完毕后，将函数的执行上下文从栈中弹出")]),t._v(" "),n("p",[t._v("作用域：控制着变量和函数的课访问范围和生命周期\n全局作用域\n函数作用域\n块级作用域")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("作用域链\n执行上下文")]),t._v(" "),n("ul",[n("li",[t._v("变量环境")]),t._v(" "),n("li",[t._v("词法环境")])]),t._v(" "),n("p",[t._v("可执行代码")]),t._v(" "),n("p",[t._v("其实在每个执行上下文的变量环境中，都包含了一个外部引用，用来指向外部的执行上下文，我们把这个外部引用称为outer。如果在当前的变量环境中没有查找到，那么 JavaScript 引擎会继续在 outer 所指向的执行上下文中查找。")]),t._v(" "),n("p",[n("strong",[t._v("作用域链是由词法作用域决定的")]),t._v("。 词法作用域：就是指作用域由代码的声明文位置决定的，词法作用域是静态作用域，通过它能欧预测代码在执行过程中如何查找标识符。")]),t._v(" "),n("p",[t._v("作用域链是通过词法作用域来确定的，而词法作用域反映了代码的结构。")]),t._v(" "),n("blockquote",[n("p",[t._v("也就是看在哪里定义的")])]),t._v(" "),n("p",[t._v("函数执行完毕，销毁指向上下文。\n闭包保留着对其上下文的引用。")]),t._v(" "),n("p",[t._v("this和作用域链式两套不同的机制。")]),t._v(" "),n("p",[t._v("执行上下文：变量环境（outer) 词法环境 this")]),t._v(" "),n("p",[n("img",{attrs:{src:a(426),alt:"image-20211102194652646"}})]),t._v(" "),n("h3",{attrs:{id:"有两种this"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#有两种this"}},[t._v("#")]),t._v(" 有两种this")]),t._v(" "),n("ul",[n("li",[t._v("全局上下文中的this")]),t._v(" "),n("li",[t._v("函数的this")])]),t._v(" "),n("blockquote",[n("p",[t._v("call\n对象.函数")])]),t._v(" "),n("ul",[n("li",[t._v("eval中的this")])]),t._v(" "),n("h3",{attrs:{id:"this的设计缺陷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this的设计缺陷"}},[t._v("#")]),t._v(" this的设计缺陷")]),t._v(" "),n("ol",[n("li",[t._v("嵌套函数中的this不会从外层函数中继承")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myObj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("showThis")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmyObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("showThis")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[t._v("普通函数的this默认指向window;")])]),t._v(" "),n("p",[t._v("箭头函数不会创建其自身的执行上下文，其this取决于外部的函数。")])])}),[],!1,null,null,null);s.default=r.exports}}]);