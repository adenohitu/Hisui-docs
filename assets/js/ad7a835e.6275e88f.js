"use strict";(self.webpackChunkhisui_document=self.webpackChunkhisui_document||[]).push([[899],{2112:function(t,e,o){o.r(e),o.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return p}});var a=o(3117),i=o(102),r=(o(7294),o(3905)),n=o(7825),d=(o(7435),["components"]),s={sidebar_position:11,title:"\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\u4eee\u60f3\u30de\u30b7\u30f3\uff08Docker\uff09"},c=void 0,k={unversionedId:"tutorial/docker-judge",id:"tutorial/docker-judge",title:"\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\u4eee\u60f3\u30de\u30b7\u30f3\uff08Docker\uff09",description:"\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306eDocker\u30b3\u30f3\u30c6\u30ca\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/docs/tutorial/docker-judge.mdx",sourceDirName:"tutorial",slug:"/tutorial/docker-judge",permalink:"/Hisui-docs/docs/tutorial/docker-judge",draft:!1,editUrl:"https://github.com/adenohitu/Hisui-docs/blob/main/docs/tutorial/docker-judge.mdx",tags:[],version:"current",lastUpdatedBy:"Adenohitu",lastUpdatedAt:1658481982,formattedLastUpdatedAt:"2022/7/22",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\u4eee\u60f3\u30de\u30b7\u30f3\uff08Docker\uff09"},sidebar:"sidebar",previous:{title:"\u30b9\u30cb\u30da\u30c3\u30c8\uff08\u30ab\u30b9\u30bf\u30e0\u88dc\u5b8c\u6a5f\u80fd\uff09",permalink:"/Hisui-docs/docs/tutorial/snippet"},next:{title:"\u30ed\u30fc\u30ab\u30eb\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\uff08\u958b\u767a\u4e2d\uff09",permalink:"/Hisui-docs/docs/tutorial/local-judge"}},u={},p=[{value:"Docker Desktop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",id:"docker-desktop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"Docker\u30b3\u30f3\u30c6\u30ca(adenohitu/hisui-judge-docker)\u3092\u8d77\u52d5\u3059\u308b",id:"docker\u30b3\u30f3\u30c6\u30caadenohituhisui-judge-docker\u3092\u8d77\u52d5\u3059\u308b",level:3},{value:"1. Docker\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002",id:"1-docker\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u307e\u3059",level:4},{value:"2. Docker\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002",id:"2-docker\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u307e\u3059",level:4},{value:"3.\u30b8\u30e3\u30c3\u30b8\u30e2\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059\u3002",id:"3\u30b8\u30e3\u30c3\u30b8\u30e2\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059",level:4}],l={toc:p};function m(t){var e=t.components,s=(0,i.Z)(t,d);return(0,r.kt)("wrapper",(0,a.Z)({},l,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u30b3\u30fc\u30c9\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306eDocker\u30b3\u30f3\u30c6\u30ca\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Docker\u4ee5\u5916\u306e\u4eee\u60f3\u74b0\u5883\u3078\u306e\u5bfe\u5fdc"),"\u73fe\u5728\u3001Docker\u306e\u307f\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002\u4eca\u5f8cWSL\u306a\u3069\u306e\u4ed6\u306e\u4eee\u60f3\u30de\u30b7\u30f3\u306b\u3082\u5bfe\u5fdc\u3057\u3066\u3044\u304f\u4e88\u5b9a\u3067\u3059\u3002"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u3053\u306e\u6a5f\u80fd\u306f\u3001\u73fe\u5728\u958b\u767a\u4e2d\u3067\u3059\u3002\u5229\u7528\u3059\u308b\u969b\u306f\u3001\u6700\u65b0\u306e\u6ce8\u610f\u3092\u6255\u3063\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u3001",(0,r.kt)("strong",{parentName:"p"},"\u65e2\u5b58\u306eDocker\u306e\u74b0\u5883\u306b\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027"),"\u304c\u3042\u308a\u307e\u3059\u3002\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044",(0,r.kt)("br",{parentName:"p"}),"\n","\u307e\u305f\u73fe\u5728C++\u3068Python3\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u3059\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u73fe\u5728\u3001\u5b9f\u884c\u6642\u9593\u3001\u30e1\u30e2\u30ea\u306f\u4eee\u306e\u5024\u3092\u8868\u793a\u3055\u305b\u3066\u3044\u3066\u3001\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u3066\u3044\u307e\u305b\u3093"))),(0,r.kt)("h3",{id:"docker-desktop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"},"Docker Desktop\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Docker Desktop\u306b\u3064\u3044\u3066"),"Docker Desktop\u306e\u30e9\u30a4\u30bb\u30f3\u30b9\u5f62\u614b\u306b\u3064\u3044\u3066\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://www.docker.com/pricing/"},"https://www.docker.com/pricing/")),"\u3064\u304e\u306eURL\u304b\u3089\u3001OS\u306b\u5408\u3063\u305f\u3082\u306e\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop/"},"https://www.docker.com/products/docker-desktop/")),(0,r.kt)("p",null,"\u3053\u306e\u753b\u9762\u304c\u51fa\u305f\u3089\u6e96\u5099\u5b8c\u4e86\u3067\u3059\u3002\ud83d\udc4d"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(3437).Z,alt:"user data",width:"500"})),(0,r.kt)("h3",{id:"docker\u30b3\u30f3\u30c6\u30caadenohituhisui-judge-docker\u3092\u8d77\u52d5\u3059\u308b"},"Docker\u30b3\u30f3\u30c6\u30ca(adenohitu/hisui-judge-docker)\u3092\u8d77\u52d5\u3059\u308b"),(0,r.kt)("p",null,"\u30b8\u30e3\u30c3\u30b8\u306b\u4f7f\u3046\u4eee\u60f3\u30de\u30b7\u30f3\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"Hisui\u3092\u8d77\u52d5\u3057\u3001\u53f3\u306e\u30d0\u30fc\u306e\u30a2\u30a4\u30b3\u30f3\u3092\u3057\u3066\u8a2d\u5b9a\u30c4\u30fc\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(4979).Z,alt:"user data",width:"500"})),(0,r.kt)("h4",{id:"1-docker\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u307e\u3059"},"1. Docker\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300cDocker\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u72b6\u6cc1\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u300d\u3092\u30af\u30ea\u30c3\u30af",(0,r.kt)("br",{parentName:"p"}),"\n","OK\u3068\u51fa\u3066\u6b21\u3078\u30dc\u30bf\u30f3\u304c\u62bc\u305b\u308b\u3088\u3046\u306b\u306a\u3063\u305f\u3089\u3001\u6210\u529f\u3067\u3059\u3002\ud83d\udc4d"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(9262).Z,alt:"user data",width:"500"})),(0,r.kt)("h4",{id:"2-docker\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u307e\u3059"},"2. Docker\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u300c\u30b8\u30e3\u30c3\u30b8\u30b3\u30f3\u30c6\u30ca\u306e\u8d77\u52d5\u72b6\u6cc1\u3092\u78ba\u8a8d\u3059\u308b\u300d\u3092\u62bc\u3057\u307e\u3059\u3002\n\u3059\u3067\u306b\u8d77\u52d5\u3055\u308c\u3066\u3044\u306a\u3051\u308c\u3070\u3001\u300c\u30b8\u30e3\u30c3\u30b8\u30b3\u30f3\u30c6\u30ca\u3092\u8d77\u52d5\u3059\u308b\u300d\u304c\u8868\u793a\u3055\u308c\u3001\u3053\u308c\u3092\u62bc\u3059\u3068\u30b3\u30f3\u30c6\u30ca\u304c\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(1230).Z,alt:"user data",width:"500"})),(0,r.kt)("p",null,"\u6b21\u306e\u3088\u3046\u306b\u30ea\u30b9\u30c8\u306b\u30b3\u30f3\u30c6\u30ca\u304c\u8868\u793a\u3055\u308c\u308c\u3070\u5b8c\u4e86\u3067\u3059\u3002\u6b21\u3078\u306e\u30dc\u30bf\u30f3\u304c\u62bc\u305b\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002\ud83d\udc4d"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(5024).Z,alt:"user data",width:"500"})),(0,r.kt)("h4",{id:"3\u30b8\u30e3\u30c3\u30b8\u30e2\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059"},"3.\u30b8\u30e3\u30c3\u30b8\u30e2\u30fc\u30c9\u3092\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,r.kt)(n.Z,{mdxType:"Zoom"},(0,r.kt)("img",{src:o(7069).Z,alt:"user data",width:"500"})),(0,r.kt)("p",null,"\u3053\u306e\u8a2d\u5b9a\u5f8c\u3001\u901a\u5e38\u3069\u304a\u308a\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u3068Docker\u30b3\u30f3\u30c6\u30ca\u5185\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3053\u308c\u3067\u8a2d\u5b9a\u306f\u5b8c\u4e86\u3067\u3059\uff01"),"\u304a\u75b2\u308c\u69d8\u3067\u3057\u305f!"))}m.isMDXComponent=!0},3437:function(t,e,o){e.Z=o.p+"assets/images/2-4fbd2736f419c3ce301f40bb0a56459b.png"},4979:function(t,e,o){e.Z=o.p+"assets/images/3-8259ca7b17d4406648e64633c85a0de9.png"},9262:function(t,e,o){e.Z=o.p+"assets/images/4-4ca1ee38afb90813ac23ad8b16e833b0.png"},1230:function(t,e,o){e.Z=o.p+"assets/images/5-36fcba671e63eead7e74be3c1f71812e.png"},5024:function(t,e,o){e.Z=o.p+"assets/images/6-714f1235e35b0b02f637e8cbae0df271.png"},7069:function(t,e,o){e.Z=o.p+"assets/images/2-f8e00c1198b4c731f7a591321b20af6e.png"}}]);