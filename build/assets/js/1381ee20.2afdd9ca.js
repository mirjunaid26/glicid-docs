"use strict";(self.webpackChunkhpc_tutorial_website=self.webpackChunkhpc_tutorial_website||[]).push([[1046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:4},i="Secure Shell (SSH)",o={unversionedId:"tutorial-basics/ssh",id:"tutorial-basics/ssh",title:"Secure Shell (SSH)",description:"Secure Shell (SSH) and its Use in HPC",source:"@site/docs/tutorial-basics/ssh.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/ssh",permalink:"/docs/tutorial-basics/ssh",draft:!1,editUrl:"https://mirjunaid26.github.io/docs/tutorial-basics/ssh.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Introduction to Linux in High Performance Computing",permalink:"/docs/tutorial-basics/linux-commands"},next:{title:"How to request access on GLiCID Cluster?",permalink:"/docs/tutorial-basics/request-access"}},l={},p=[{value:"Secure Shell (SSH) and its Use in HPC",id:"secure-shell-ssh-and-its-use-in-hpc",level:2},{value:"Advantages of Using SSH for HPC:",id:"advantages-of-using-ssh-for-hpc",level:3},{value:"Basic SSH Commands for HPC:",id:"basic-ssh-commands-for-hpc",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secure-shell-ssh"},"Secure Shell (SSH)"),(0,r.kt)("h2",{id:"secure-shell-ssh-and-its-use-in-hpc"},"Secure Shell (SSH) and its Use in HPC"),(0,r.kt)("p",null,"Secure Shell (SSH) is a network protocol that provides a secure and encrypted way to establish remote command-line connections between computers over an untrusted network. SSH ensures data integrity, confidentiality, and authentication, making it an essential tool for accessing and managing High-Performance Computing (HPC) systems."),(0,r.kt)("p",null,"HPC environments often consist of clusters or supercomputers with multiple nodes, and SSH enables users to securely log in to these remote machines, execute commands, transfer files, and manage the system without physically being present at the HPC facility. It allows for remote administration, job submission, and monitoring of HPC resources."),(0,r.kt)("h3",{id:"advantages-of-using-ssh-for-hpc"},"Advantages of Using SSH for HPC:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Secure Communication:")," SSH employs strong encryption algorithms to protect data transmitted over the network. This ensures that sensitive information, such as login credentials and command output, remains secure from eavesdropping and unauthorized access.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Remote Access:")," SSH enables users to access and control HPC systems from anywhere with an internet connection. It eliminates the need for physical proximity to the HPC infrastructure, providing flexibility and convenience.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authentication and Authorization:")," SSH supports various authentication methods, such as passwords, public-key cryptography, and two-factor authentication. It ensures that only authorized individuals can access the HPC resources, adding an additional layer of security.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File Transfer:")," SSH includes utilities like SCP (Secure Copy) and SFTP (Secure File Transfer Protocol) that allow users to securely transfer files between local machines and remote HPC systems. This facilitates data exchange for running simulations, analyzing results, and managing input/output files.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tunneling and Port Forwarding:")," SSH can create encrypted tunnels to securely access services running on remote machines, even if they are not directly exposed to the external network. It enables users to access web applications, databases, or other services hosted on HPC clusters through a secure connection."))),(0,r.kt)("h3",{id:"basic-ssh-commands-for-hpc"},"Basic SSH Commands for HPC:"),(0,r.kt)("p",null,"Here are some essential SSH commands used in HPC environments:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh"),": Connects to a remote HPC system using SSH. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh [username]@[hostname]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh username@hpc.example.com"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scp"),": Transfers files securely between local and remote systems using SSH. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"scp [source] [destination]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"scp file.txt username@hpc.example.com:/path/to/destination"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sftp"),": Opens a secure FTP session for interactive file transfers between local and remote systems. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"sftp [username]@[hostname]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"sftp username@hpc.example.com"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh-keygen"),": Generates SSH key pairs for public-key authentication. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen -t [type]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen -t rsa"),"). This command creates a private key (",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa"),") and a corresponding public key (",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh-copy-id"),": Installs the public key on a remote server, enabling passwordless SSH login. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-copy-id [username]@[hostname]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-copy-id username@hpc.example.com"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh-agent"),": Manages SSH keys and provides secure storage for private keys. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-agent bash")," (starts a new shell with SSH agent functionality).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ssh-add"),": Adds private keys to the SSH agent. Syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-add [path_to_private_key]")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-add ~/.ssh/id_rsa"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"logout")," or ",(0,r.kt)("strong",{parentName:"p"},"exit"),": Terminates the SSH session and disconnects from the remote HPC system."))))}u.isMDXComponent=!0}}]);