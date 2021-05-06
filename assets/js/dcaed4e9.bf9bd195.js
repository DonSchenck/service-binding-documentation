(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[403],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,o(o({ref:n},l),{},{components:t})):i.createElement(g,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7858:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o={sidebar_position:3},c={unversionedId:"creating-service-bindings/custom-path-injection",id:"creating-service-bindings/custom-path-injection",isDocsHomePage:!1,title:"Custom Path Injection",description:"Containers Path",source:"@site/docs/creating-service-bindings/custom-path-injection.md",sourceDirName:"creating-service-bindings",slug:"/creating-service-bindings/custom-path-injection",permalink:"/service-binding-documentation/docs/creating-service-bindings/custom-path-injection",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/creating-service-bindings/custom-path-injection.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Advanced Binding Options",permalink:"/service-binding-documentation/docs/creating-service-bindings/binding-options"},next:{title:"Binding with non-podSpec-based application",permalink:"/service-binding-documentation/docs/creating-service-bindings/binding-non-pod-spec"}},p=[{value:"Containers Path",id:"containers-path",children:[]},{value:"Secret Path",id:"secret-path",children:[]},{value:"Inject intermediate binding secret reference into a custom location inside application resource",id:"inject-intermediate-binding-secret-reference-into-a-custom-location-inside-application-resource",children:[]}],s={toc:p};function l(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"containers-path"},"Containers Path"),(0,r.kt)("p",null,"If your application is using a custom resource and containers path should bind\nat a custom location, SBO provides an API to achieve that.  Here is an example\nCR with containers in a custom location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: "stable.example.com/v1"\nkind: AppConfig\nmetadata:\n    name: example-appconfig\nspec:\n    containers:\n    - name: hello-world\n      image: yusufkaratoprak/kubernetes-gosample:latest\n      ports:\n      - containerPort: 8090\n')),(0,r.kt)("p",null,"In the above CR, the containers path is at ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.containers"),".  You can specify\nthis path in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingRequest")," config at\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.application.bindingPath.containersPath"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps.openshift.io/v1alpha1\nkind: ServiceBindingRequest\nmetadata:\n    name: binding-request\nspec:\n    namePrefix: qiye111\n    application:\n        name: example-appconfig\n        group: stable.example.com\n        version: v1\n        resource: appconfigs\n        bindingPath:\n            containersPath: spec.containers\n    services:\n      - group: postgresql.baiju.dev\n        version: v1alpha1\n        kind: Database\n        name: example-db\n        id: zzz\n        namePrefix: qiye\n")),(0,r.kt)("p",null,"After reconciliation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.containers")," is going to be updated with\n",(0,r.kt)("inlineCode",{parentName:"p"},"envFrom")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"secretRef")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: stable.example.com/v1\nkind: AppConfig\nmetadata:\n    name: example-appconfig\nspec:\n  containers:\n  - env:\n    - name: ServiceBindingOperatorChangeTriggerEnvVar\n      value: "31793"\n    envFrom:\n    - secretRef:\n        name: binding-request\n    image: yusufkaratoprak/kubernetes-gosample:latest\n    name: hello-world\n    ports:\n    - containerPort: 8090\n    resources: {}\n')),(0,r.kt)("h2",{id:"secret-path"},"Secret Path"),(0,r.kt)("p",null,"If your application is using a custom resource and secret path should bind at a\ncustom location, SBO provides an API to achieve that.  Here is an example CR\nwith secret in a custom location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: "stable.example.com/v1"\nkind: AppConfig\nmetadata:\n    name: example-appconfig\nspec:\n    secret: some-value-72ddc0c540ab3a290e138726940591debf14c581\n')),(0,r.kt)("p",null,"In the above CR, the secret path is at ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.secret"),".  You can specify\nthis path in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingRequest")," config at\n",(0,r.kt)("inlineCode",{parentName:"p"},"spec.application.bindingPath.secretPath"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: apps.openshift.io/v1alpha1\nkind: ServiceBindingRequest\nmetadata:\n    name: binding-request\nspec:\n    namePrefix: qiye111\n    application:\n        name: example-appconfig\n        group: stable.example.com\n        version: v1\n        resource: appconfigs\n        bindingPath:\n            secretPath: spec.secret\n    services:\n      - group: postgresql.baiju.dev\n        version: v1alpha1\n        kind: Database\n        name: example-db\n        id: zzz\n        namePrefix: qiye\n")),(0,r.kt)("p",null,"After reconciliation, the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.secret")," is going to be updated with\n",(0,r.kt)("inlineCode",{parentName:"p"},"binding-request")," as the value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: "stable.example.com/v1"\nkind: AppConfig\nmetadata:\n    name: example-appconfig\nspec:\n    secret: binding-request-72ddc0c540ab3a290e138726940591debf14c581\n')),(0,r.kt)("h2",{id:"inject-intermediate-binding-secret-reference-into-a-custom-location-inside-application-resource"},"Inject intermediate binding secret reference into a custom location inside application resource"))}l.isMDXComponent=!0}}]);