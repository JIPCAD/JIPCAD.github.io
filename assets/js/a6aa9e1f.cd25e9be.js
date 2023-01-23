"use strict";(self.webpackChunkjipcad=self.webpackChunkjipcad||[]).push([[3089],{9527:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(7294),n=a(6010),r=a(7165),s=a(8746);const i="sidebar_2-wG",m="sidebarItemTitle_2x3I",o="sidebarItemList_GFWq",c="sidebarItem_2f4k",d="sidebarItemLink_1UTh",g="sidebarItemLinkActive_2RDx";var p=a(1614);function u({sidebar:e}){return 0===e.items.length?null:l.createElement("nav",{className:(0,n.Z)(i,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},e.title),l.createElement("ul",{className:o},e.items.map((e=>l.createElement("li",{key:e.permalink,className:c},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}const E=function(e){const{sidebar:t,toc:a,children:s,...i}=e,m=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(u,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},3265:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),n=a(6832),r=a(9527),s=a(6914),i=a(8746),m=a(1614);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(i.Z,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(i.Z,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(7320);const d=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:m}}=(0,n.Z)(),{blogDescription:d,blogTitle:g,permalink:p}=t,u="/"===p?m:g;return l.createElement(r.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((({content:e})=>l.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:e.metadata.truncated},l.createElement(e,null)))),l.createElement(o,{metadata:t}))}},6914:(e,t,a)=>{a.d(t,{Z:()=>N});var l=a(7294),n=a(6010),r=a(3905),s=a(1614),i=a(8746),m=a(1402),o=a(7320),c=a(6492),d=a(1807);const g="blogPostTitle_izSS",p="blogPostData_1FW0",u="blogPostDetailsFull_jJB8";var E=a(9800);const h="image_24Ua";const b=function({author:e}){const{name:t,title:a,url:n,imageURL:r}=e;return l.createElement("div",{className:"avatar margin-bottom--sm"},r&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:h,src:r,alt:t})),t&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},t))),a&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},v="authorCol_3HOp";function _({authors:e,assets:t}){return 0===e.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},e.map(((e,a)=>l.createElement("div",{className:(0,n.Z)("col col--6",v),key:a},l.createElement(b,{author:{...e,imageURL:t.authorsImageUrls[a]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.C)(),{children:h,frontMatter:b,assets:v,metadata:N,truncated:Z,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:T,tags:w,readingTime:I,title:L,editUrl:M,authors:U}=N,x=v.image??b.image,y=!f&&Z,C=w.length>0;return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},f?L:l.createElement(i.Z,{itemProp:"url",to:T},L)),l.createElement("div",{className:(0,n.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(_,{authors:U,assets:v}))})(),x&&l.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.Zo,{components:c.Z},h)),(C||Z)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[u]:f})},C&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":y})},l.createElement(E.Z,{tags:w})),f&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:M})),y&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":C})},l.createElement(i.Z,{to:N.permalink,"aria-label":`Read more about ${L}`},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},1807:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7294),n=a(1614),r=a(7462),s=a(6010);const i="iconEdit_3pti",m=({className:e,...t})=>l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,e),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));var o=a(7320);function c({editUrl:e}){return l.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:o.kM.common.editThisPage},l.createElement(m,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},621:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(8746);const s="tag_2bI9",i="tagRegular_2Xdf",m="tagWithCount_31_D";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s,{[i]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},9800:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010),r=a(1614),s=a(621);const i="tags_2dzd",m="tag_1uDS";function o({tags:e}){return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>l.createElement("li",{key:t,className:m},l.createElement(s.Z,{name:e,permalink:t}))))))}}}]);