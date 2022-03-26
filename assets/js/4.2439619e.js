(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(s,a,t){s.exports=t.p+"assets/img/image-20220208192721660.c5540482.png"},486:function(s,a,t){s.exports=t.p+"assets/img/image-20220209141945535.4b29543d.png"},487:function(s,a,t){s.exports=t.p+"assets/img/image-20220209092631640.6b5ec712.png"},488:function(s,a,t){s.exports=t.p+"assets/img/image-20220208193558399.77bf7ac0.png"},489:function(s,a,t){s.exports=t.p+"assets/img/image-20220208193701208.21ba6b60.png"},490:function(s,a,t){s.exports=t.p+"assets/img/image-20220208193815045.1d886503.png"},491:function(s,a,t){s.exports=t.p+"assets/img/image-20220208205955117.b08950a3.png"},492:function(s,a,t){s.exports=t.p+"assets/img/image-20220208205057979.ecd4a287.png"},493:function(s,a,t){s.exports=t.p+"assets/img/image-20220209143911244.18185616.png"},494:function(s,a,t){s.exports=t.p+"assets/img/image-20220209144024511.6bf671f3.png"},495:function(s,a,t){s.exports=t.p+"assets/img/image-20220209145456643.e9bc3441.png"},496:function(s,a,t){s.exports=t.p+"assets/img/image-20220208202345287.bf483b2f.png"},497:function(s,a,t){s.exports=t.p+"assets/img/image-20220209140039394.cdb7bf43.png"},498:function(s,a,t){s.exports=t.p+"assets/img/image-20220208212543392.76a0b38b.png"},499:function(s,a,t){s.exports=t.p+"assets/img/image-20220209140809516.a76749de.png"},500:function(s,a,t){s.exports=t.p+"assets/img/image-20220208212319424.9c1c366f.png"},501:function(s,a,t){s.exports=t.p+"assets/img/image-20220209141550846.5e270f8e.png"},502:function(s,a,t){s.exports=t.p+"assets/img/image-20220208210240604.d188cc56.png"},503:function(s,a,t){s.exports=t.p+"assets/img/image-20220214201459600.d38aa561.png"},631:function(s,a,t){"use strict";t.r(a);var n=t(34),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("p",[n("strong",[s._v("Docker是容器技术的一种优秀实现。")])]),s._v(" "),n("ul",[n("li",[s._v("容器技术至隔离应用程序的运行时环境但容器 之间可以共享同一个操作系统。")])]),s._v(" "),n("p",[n("strong",[s._v("运行时环境指运行依赖的各种库以及配置。")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(485),alt:"image-20220208192721660"}})]),s._v(" "),n("h3",{attrs:{id:"docker的基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本概念"}},[s._v("#")]),s._v(" Docker的基本概念")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("docker看成一个编译器")])]),s._v(" "),n("li",[n("p",[s._v("dockerfile 看成image的源代码")])]),s._v(" "),n("li",[n("p",[s._v("container 运行起来的程序")])]),s._v(" "),n("li",[n("p",[s._v("image 理解为可执行程序")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地所有的镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结合git仓库的概念来理解")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# repository 镜像的仓库源， 可认为是程序")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tag 镜像的标签： 用于区别同仓库的不同版本, 认为程序的不同版本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# image id 用于标识镜像")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("img",{attrs:{src:t(486),alt:"image-20220209141945535"}})])])]),s._v(" "),n("p",[n("strong",[s._v("我们编写dockerfile交给docker编译执行生成image, image运行后成为container")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(487),alt:"image-20220209092631640"}})]),s._v(" "),n("h3",{attrs:{id:"docker的工作原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的工作原理"}},[s._v("#")]),s._v(" Docker的工作原理")]),s._v(" "),n("ol",[n("li",[s._v("docker build")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(488),alt:"image-20220208193558399"}})]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("docker run")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(489),alt:"image-20220208193701208"}})]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("docker pull")])]),s._v(" "),n("p",[s._v("docker pull命令从docker hub中下载别人写好的程序， 类似于App Store， Docker Registry是本地的程序。")]),s._v(" "),n("p",[n("img",{attrs:{src:t(490),alt:"image-20220208193815045"}})]),s._v(" "),n("h3",{attrs:{id:"docker中的底层实现原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker中的底层实现原理"}},[s._v("#")]),s._v(" Docker中的底层实现原理")]),s._v(" "),n("ul",[n("li",[s._v("NameSpace")])]),s._v(" "),n("p",[s._v("Linux中PID, IPC, 网络等资源是全局的， NameSpace技术可将这些全局资源隔离。")]),s._v(" "),n("ul",[n("li",[s._v("Control Groups")])]),s._v(" "),n("p",[s._v("控制应用对物理机资源的访问")]),s._v(" "),n("h3",{attrs:{id:"docker-hub的介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub的介绍"}},[s._v("#")]),s._v(" "),n("strong",[s._v("Docker Hub的介绍")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(491),alt:"image-20220208205955117"}})]),s._v(" "),n("ul",[n("li",[s._v("https://hub.docker.com/")])]),s._v(" "),n("p",[s._v("Docker hub就像苹果的APP Store， 这里维护者常用的镜像。除了下载常用的镜像，自己也可以发布镜像。")]),s._v(" "),n("h3",{attrs:{id:"docker的基本使用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的基本使用命令"}},[s._v("#")]),s._v(" Docker的基本使用命令")]),s._v(" "),n("p",[n("strong",[s._v("Docker Hub查看与安装镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在Docker Hub 中查看mysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search mysql\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装mysql")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("删除容器与镜像")])]),s._v(" "),n("blockquote",[n("p",[s._v("一般我们用id来标识不同的容器与不同的镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" container_id/container_name\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi image_name/image_id \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("查看本地镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看Dokcer 安装好的images")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(492),alt:"image-20220208205057979"}})]),s._v(" "),n("p",[n("strong",[s._v("进入镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动images , 此时，iamges ---\x3e container")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it centos:latest /bin/bash\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -i 表示交互式的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -t 表示开启一个新的终端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 表示后台运行")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("启动, 停止，重启容器")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新进入容器,退出后会让容器暂停运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" attach container_name/container_id\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec 退出后不会暂停容器的运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it container_id /bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it centos:latest /bin/bash\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop container_name/container_id\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新启动运行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart container_name/container_id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("strong",[s._v("更新镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将镜像跑起来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it centos:centos7 /bin/bash\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装go的环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /user/local\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该工具用于获取golang的安装包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/go/go1.13.5.linux-amd64.tar.gz "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取golang的安装包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzf go1.13.5.linux-amd64.tar.gz -C /usr/local "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压tar文件到 /user/local")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为golang添加系统环境变量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将以下带export的语句加入到 /ect/profile文件中 (不带 #)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export GO111MODULE=on")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export GOROOT=/usr/local/go ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export GOPATH=/home/gopath")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export PATH=$PATH:$GOROOT/bin:$GOPATH/bin")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行以下命令,home文件夹下，创建go开发文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" home\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" gopath\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 让 /ect/profile生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令, 修改golang代理")]),s._v("\ngo "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.cn,direct\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试golang 环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/gopath\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" hello.go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  fmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello centos golang!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("go run hello.go\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(493),alt:"image-20220209143911244"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(494),alt:"image-20220209144024511"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(495),alt:"image-20220209145456643"}})]),s._v(" "),n("p",[n("strong",[s._v("容器的导入与导出")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker export container_id > 文件名.tar")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 0a4a0a0acdad "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" centos.tar\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" docker/ubantu.tar "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" -test/ubuntu:v1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("查看Docker运行状态")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(496),alt:"image-20220208202345287"}})]),s._v(" "),n("p",[n("strong",[s._v("容器转为镜像")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commmit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"centos with git"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("容器打包成镜像文件存在本地&本地加载镜像文件")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将容器打包成镜像文件下载到本地")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save -o docker.tar xiaohu/centos:git\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -o 表示输出，后面紧跟文件名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用如下命令 ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" container_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 文件名.tar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载本地镜像文件到docker")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load -i docker.tar\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用命令 docker import")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - test/centos:v1.0\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test/centos:v1.0 给docker指定文件路径和tag")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[n("img",{attrs:{src:t(497),alt:"image-20220209140039394"}})]),s._v(" "),n("p",[n("strong",[s._v("查看容器运行的日志")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" logs -f image_id\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + c 终止日志输出")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(498),alt:"image-20220208212543392"}})]),s._v(" "),n("p",[n("strong",[s._v("查看容器的运行进程")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" container_id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("计算机本地端口的映射")])]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull training/webapp\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -P traning/webapp python app.py\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示所有的运行镜像")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看端口配置")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" port container_id\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("img",{attrs:{src:t(499),alt:"image-20220209140809516"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(500),alt:"image-20220208212319424"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(501),alt:"image-20220209141550846"}})]),s._v(" "),n("h3",{attrs:{id:"docker的应用举例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker的应用举例"}},[s._v("#")]),s._v(" Docker的应用举例")]),s._v(" "),n("blockquote",[n("p",[s._v("开发环境的打包，减少相关人员重复搭建环境，同时提供跨平台的快速部署。")])]),s._v(" "),n("p",[n("strong",[s._v("利用Docker创建一个Flask开发的Python环境")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(502),alt:"image-20220208210240604"}})]),s._v(" "),n("h3",{attrs:{id:"dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile"}},[s._v("#")]),s._v(" Dockerfile")]),s._v(" "),n("p",[s._v("可以将dockerfile看成是docker的批处理命令，类似于Linux的shell文件， 或者windows的bat文件")]),s._v(" "),n("p",[n("strong",[s._v("以配置一个Nginx为例")])]),s._v(" "),n("p",[s._v("创建文件夹dockerfiletest&文件dockerfile")]),s._v(" "),n("p",[s._v("文件结构目录如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:t(503),alt:"image-20220214201459600"}})]),s._v(" "),n("p",[n("code",[s._v("dockerfile")]),s._v("文件内容")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("FROM nginx\nRUN "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'这是一个本地创建的一个nginx镜像'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/share/nginx/html/index.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("shell命令")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t nginx:v3 "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"docker-machine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-machine"}},[s._v("#")]),s._v(" docker machine")]),s._v(" "),n("h3",{attrs:{id:"docker-compose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" docker compose")]),s._v(" "),n("h3",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("知乎小灰： https://zhuanlan.zhihu.com/p/187505981")]),s._v(" "),n("li",[s._v("官方文档:  https://docs.docker.com/")]),s._v(" "),n("li",[s._v("https://docs.docker.com/engine/reference/builder/")]),s._v(" "),n("li",[s._v("https://docs.docker.com/develop/develop-images/dockerfile_best-practices/")]),s._v(" "),n("li",[s._v("https://www.runoob.com/docker/docker-container-usage.html")]),s._v(" "),n("li",[s._v("Docker绿皮书: http://docs.nigeerhuo.com/docker/#%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%86%99%E8%BF%99%E6%9C%AC%E4%B9%A6%EF%BC%9F")])])])}),[],!1,null,null,null);a.default=e.exports}}]);