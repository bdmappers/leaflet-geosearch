(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/eu0":function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return d}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk");var n=r("/FXl"),a=r("TjRS"),o=r("KUxS"),p=r("yYOO");r("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/providers/openstreetmap.mdx"}});var l={_frontmatter:s},c=a.a;function d(e){var t,r=e.components,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(c,i({},l,d,{components:r,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"openstreetmap-provider"},"OpenStreetMap Provider"),Object(n.b)("p",null,"For more options and configurations, see the ",Object(n.b)("a",i({parentName:"p"},{href:"http://wiki.openstreetmap.org/wiki/Nominatim"}),"OpenStreetMap Nominatim wiki"),"."),Object(n.b)(o.a,{__position:0,__code:'<Map provider="OpenStreetMap" />',__scope:(t={props:d,DefaultLayout:a.a,Playground:o.a,Map:p.a},t.DefaultLayout=a.a,t._frontmatter=s,t),mdxType:"Playground"},Object(n.b)(p.a,{provider:"OpenStreetMap",mdxType:"Map"})),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-js"}),"import { OpenStreetMapProvider } from 'leaflet-geosearch';\n\nconst provider = new OpenStreetMapProvider();\n\n// add to leaflet\nimport { GeoSearchControl } from 'leaflet-geosearch'; import {OpenStreetMapProvider} from \"./index\";\n\nmap.addControl(new GeoSearchControl({\n  provider,\n}));\n")),Object(n.b)("h2",{id:"authentication"},"Authentication"),Object(n.b)("p",null,"Note that OpenStreetMap is open, but not free without limits. They do have a ",Object(n.b)("a",i({parentName:"p"},{href:"https://operations.osmfoundation.org/policies/nominatim"}),"Usage Policy")," just like the other providers. Provide the ",Object(n.b)("inlineCode",{parentName:"p"},"email")," property to opt-in for authenticated requests."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-js"}),"const provider = new OpenStreetMapProvider({\n  params: {\n    email: 'john@example.com', // auth for large number of requests\n  },\n});\n")),Object(n.b)("h2",{id:"optional-parameters"},"Optional parameters"),Object(n.b)("p",null,"OpenStreetMap Nominatim supports a number of ",Object(n.b)("a",i({parentName:"p"},{href:"https://nominatim.org/release-docs/develop/api/Search/#parameters"}),"optional parameters"),". As the api requires those parameters to be added to the url, they can be added to the ",Object(n.b)("inlineCode",{parentName:"p"},"params")," key of the provider."),Object(n.b)("p",null,"All options defined next to the ",Object(n.b)("inlineCode",{parentName:"p"},"params")," key, would have been added to the request body."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-js"}),"const provider = new OpenStreetMapProvider({\n  params: {\n    'accept-language': 'nl', // render results in Dutch\n    'countrycodes': 'nl',    // limit search results to the Netherlands\n  },\n});\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/providers/openstreetmap.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-providers-openstreetmap-mdx-c488ce85d0d2c221fae3.js.map