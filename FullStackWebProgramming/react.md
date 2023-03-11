### React: framework
a javascript library for building interface
```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```
Model definition
这不就是我们之前想搞的modual话，直接drag some 模块就可以吗
不过这个是需要把code复制进来，然后看效果

reactjs, push by google

Learning objectives
* Install react
* Build component
* Introduce props
* State
* Routing

The need for tools
* HTML, CSS & JS
	- Tricky concepts
* Need for tools/frameworks/middleware
	- Light -> **jQuery**
	- Medium -> **ReactJS**
	- Heavy ->  **Angular**
  JQuery有获取数据，显示数据到html的办法
  那么ReactJS有什么？有什么功能比JQuery多的
Why use ReactJS?
* Open-Source JS library
* Community
* Focus on Front-End
* Modular Components
* Good performance
* Stable Environment (initial release 2013)
* JSX
* Virtual DOM

##### Getting Started
* First react app
	- Create directory
	- **npx** create-react-app projectname --use-npm
    	- npm是node package management, npx是node package execute
    	- Otherwise yarn is used
	- Look into folder
		- Public
          * resources
    	- src
          * React code

	- Add .env if you want to change things
		- e.g. PORT=8080
			- Otherwise 3000
	 `npm start`
	 Change message !
执行步骤
```shell
docker-compose up -d
docker attach nodejs1
	# 怎么这些文件都进来的？？？看看COPY
npx create-react-app d2 --use-npm
vi .env
npm start
```
##### explore folder
* src
	 - Index.js
				 * Called when node is started
				 * Processed before going to client
          - <App /> -> this is not a tag !!!

	- Import ReactDom
	- 	....
	- App.js
	- JSX = JavaScript XML
	- We see transformed code in browser

* Create React Component
```js
function Hello() {
let isMorning = (new Date()).getHours() < 12;
return isMorning
? <h3> Good Morning </h3>
: <h3> Good Evening </h3>;
}
export default Hello;
---------------------------
import Hello from './Hello';
<Hello />
```

???为什么有vi？没有vim？？？我知道了，因为没有用container，只是用nodejs

**为什么用react，一般的访问web server，也有react效果啊**？？
```shell
docker-compose up -d
docker attach nodejs
npm start
```
难道只是新建一个<app/>，然后在app.js 将这个App tag替换成innerHTML？
我懂了，将所有的element 放在js来操作，不用全部画在htnl里面
Nice！
***tag=function***
唯一的问题是，怎么控制css在这些自定义的tag？？？
生成了那么多css，js，html tag，什么时候解析+转化的，那么客户端慢不慢？
那么到底是client end来解析，什么是server end来解析？
js不是客户端解析的吗？


像做梦一样，我现在坐在国外的班里，听着外语，多年以前，怎么可能想象的到

Return multiple tags
```js
import React from 'react';
function Hello() {
let isMorning = (new Date()).getHours() < 12;
return isMorning
? (
<React.Fragment>
<h3> Good Morning </h3>
<h3> 5 New Posts </h3>
</React.Fragment>
)
: (
<>
<h3> Good Morning </h3>
<h3> 7 New Posts </h3>
</>
)
```
##### Explicit Export / Explicit Import
```js
export function Hello() {
let isMorning = (new Date()).getHours() < 12;
return isMorning
? (
.........

import logo from './logo.svg';
import './App.css';

import {Hello} from './Hello';

```

Parameters -> Props
```js
import {Helloo} from './Helloo';

function App() {
let text = 'cool';
let url = 'https://reactjs.org';

return (
<div className="App">
<header className="App-header">

<Helloo name="Ralph" posts={5} />

import React from 'react';

export const Helloo = ({name, posts}) => {
let isMorning = (new Date()).getHours() < 12;
let hellooHeader = isMorning
? <h3> Good Morning {name} </h3>
: <h3> Good Day {name} </h3> ;

return (
<>
{hellooHeader}
<h3> {posts} New Posts </h3>
</>
)
}
```
##### Condition Render
```js
import React from 'react';

export const Helloo = ({name, posts}) => {
if (!name) return null;
let isMorning = (new Date()).getHours() < 12;
let hellooHeader = isMorning
? <h3> Good Morning {name} </h3>
: <h3> Good Day {name} </h3> ;
return (
<>
{hellooHeader}
{posts === 0
? null
: <h3> {posts} New Posts </h3>}
</> )}
```

Review

* Documentation
	 - https://reactjs.org/
* Goals of React?
* Approach?
* Imperative vs Declarative
* Steps

Functions & Tags

* What do Functions return?
	 - Why
* **How to add styles?**
	- 放在App.css中，然后在js中return html的时候，加在里面就好
* How to pass arguments to functions?
	 - Why?

index.js 中生成root.render，生成了App
这些是所有的html的root tag

Props
```js
<Helloo name="Ralph" posts={5} />

var data = {fn="Ralph", ln= "Deters", posts=5}
<Helloo name={data.fn}, posts={data.posts} />

import React from 'react';

export const Helloo = ({name, posts}) => {

	So why is it called Props

* export const Helloo = (props) => {
	 - props.name
	 - props.posts
* export const Helloo = ({name, posts}) => {
```

哇，完全没有html了，全是js

co-compiler???


### Lecture Feb 27
Props re-render the DOM?

##### Splitting components
Post Tag

* Build post tag
* Add css
import './Post.css';

export const Post = ({topic, data}) => {
return (
<div className="post">
<p className ="post-topic">{topic}</p>
<p className= "post-data">{data}</p>
</div>
)
}

export default Post;
.post {
padding: 16px;
background-color: white;
margin: 32px auto;

width: 25%;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.post-topic {
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
background-color: rgb(173, 174, 114);
margin-left: auto;
display: flex;
justify-content: space-between;
align-items: center;

border-radius: 8px;
padding: 0.5em;
margin: 0.5em;
font-size: 1.2em;
}
.post-data {
background-color: rgb(166, 199, 218);
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
margin-left: auto;
margin-right: auto;
font-size: 0.8em;
margin-bottom: 0.5em;
}
Define our Sub Components
* Create sub components
	 - PostTopic
	 - PostData
Add Button
<button onClick={pressMe}> Press me </button>
Let's change the data in the page
State (Hooks)
* import React, {useState} from 'react';
* const [myData, setData] = useState(data);
Let’s use it

* avoid large functions/components
* example Post Tag
```js
import React, {useState} from 'react';
//redraw
var cunter = 0;
exprot const Post2 = ({topic, data}) =>{
    const [myData, setData] = useState(data);
    const pressfMe = () =>{

        counter ++;
        setData(counter.toString();
        console.log(data);
    };
    reutrn (
        <div>ddd</div>

    )
}

exprot const Post2 = ({topic, data}) =>{
    var cunter = 0;
    const [myData, setData] = useState(data);
    const pressfMe = () =>{

        counter ++;
        setData(counter.toString();
        console.log(data);
    };
    reutrn (
        <div>ddd</div>

    )
}
//显示的是1，2，1，2,因为每一次redraw，所以新建一个new instance。所以每一次都redraw？什么时候redraw？
//state， redraw是什么，什么时候？所以需要setState，right？
```
use App
component = > functions
prop  to set parameter to the functions

Use Array
``` js
var data = [
{topic: "JS", data: "JS runs in browsers ......................"},
{topic: "React", data: "React is a JS library ......................"},
{topic: "Node", data: "Node is a JS runtime ......................"},
];

<Post3 data= {data}> </Post3>

return (
<div>
{props.data.map((item) => (
<div className="post">
<PostTopic topic = {item.topic}> </PostTopic>
<p className= "post-data">{item.data}</p>

</div>
)) }
</div>
)
```

#### Data Server
Handling Data in a “special” server
```js
'use strict';

// load package
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors());

const PORT = 8080;
const HOST = '0.0.0.0';
let data = [
    {
        id: 1,
        text: 'bla 1',
        time: '9:00',
    },
    {
        id: 2,
        text: 'bla, blai 2',
        time: '9:02',
    },
    {
        id: 3,
        text: 'bla, bla,blai 3',
        time: '9:05',
    }
];
app.get('/data', (req, res) => {res.json(data);});

app.post('/add', (req,res) => {
let id = req.body.id;
let text = req.body.text;
let time = req.body.time;

data.push({id: id, text: text, time: time});
res.json(data);

});

app.listen(PORT, HOST);

console.log('up and running');
```
CORS

Cross-Origin Resource Sharing (CORS)
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://www.npmjs.com/package/cors

only like the request from web page??
spaceI, spaceCore, 
 deny other request from others, not from ajax???
cors is a npm page, what you want
web security
app.use, middleware, 
cors let dorrs open


docker-compose 定义两个server
node1， node2

一个react，另一个普通的nodeserver
两个server:
1. react: 用npm start来启动
2. nodejs: node server.js

package.json
```json
"dependencies": {
"body-parser": "^1.20.2",
"cors": "^2.8.5",
"express": "^4.18.2"
}
```

#### React-Router-Dom
Single Page App

* How to structure web app?
	 - Break into “pages”
	 - Show one page at a time
	 - How to avoid reloading -> dom tree manipulation

React-Router-Dom

* https://www.npmjs.com/package/react-router-dom
` npm add react-dom-router`
"dependencies": {
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"cors": "^2.8.5",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.8.2",
```yml
version: '3.9'
services:
# mysql1:
#  image: mysql:5.7
#  container_name: db1
#  volumes:
#   - /Users/ralph/classes/353/dbfiles:/var/lib/mysql
#  environment:
#    MYSQL_ROOT_PASSWORD: admin
#  healthcheck:
#   test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost", "-uroot", "-padmin"]
#   timeout: 20s # Timeout for each health checking.
#   retries: 10 # Hou many times retries.
 node1:
  build: .
  container_name: nodejs1
  ports:
   - "80:8080"
  volumes:
   - /Users/ralph/classes/353:/usr/src/app
#  depends_on:
#   mysql1: 
#    condition: service_healthy
  stdin_open: true
  tty: true
 node2:
  build: .
  container_name: nodejs2
  ports:
   - "81:8080"
  volumes:
   - /Users/ralph/classes/353:/usr/src/app
#  depends_on:
#   mysql1: 
#    condition: service_healthy
  stdin_open: true
  tty: true
 
```

App.js
```js
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useState} from 'react';
import {Landing} from './Landing';
import {ShowPosts} from './ShowPosts';
import {AddPosts} from './AddPosts';

function App() {   
  const [getList, setList] = useState([]);
  if(getList.length <1) {fetch('http://localhost:81/data').then(response => response.json()).then(response => setList(response))};

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Router>
        <Link to="/showPosts">  <button> Show Posts </button> </Link>
        <Link to="/addPosts">  <button> Add Posts </button>   </Link>
         <Routes>
         <!-- only one, so examc -->
          <Route exact path='/' element={<Landing/>} />
          <Route path="/showPosts" element={<ShowPosts get = {getList}/>} />
          <Route path="/addPosts" element={ <AddPosts set = {setList} /> } />
          </Routes>
        </Router>
        </div>
      </header>
      </div>
  );
}
export default App;
```

Landing.js
```js
import React from 'react';
export const Landing = () => {
return (
<h3> Landing </h3>
);
}
```
AddPosts.js
```js
import React from 'react';
import {useState} from 'react';

export const AddPosts = ({set}) => {
const [getID, setID] = useState('');
const [getText, setText] = useState('');
const [getTime, setTime] = useState('');
return (
    <>
<h3> AddPosts </h3>
<div>
<input
type="text"
placeholder="ID"
value={getID}
onChange={e => setID(e.target.value)} />
</div>
<button onClick={(e) => {
fetch('http://localhost:81/add', {method: 'POST', body: `id=${getID}&text=${getText}&time=${getTime}`,
headers: {'Content-type': 'application/x-www-form-urlencoded'}})
.then(fetch('http://localhost:81/data')
.then(response => response.json())
.then(response => set(response))
.then(alert(`ID: ${getID}, Text: ${getText}, Time: ${getTime} `))
);
}
}> Submit</button>
```
ShowPosts

ShowPosts.js
```js
import React from 'react';
import './ShowPosts.css';

export const ShowPosts = ({get}) => {

return (

        <>
        {get.map(post => (

            <div className="container">

                <h3> {post.id} </h3>
                <h3> {post.text} </h3>
                <h3> {post.time} </h3>
            </div>

        ))}
        </>
);

}
```
ShowPosts.css
```css
.container {
    border: 2px solid white;
    border-radius: 8px;
    width: 400px;
    margin-top: 16px
}
```

Use State to pass the data to all server

#### Lecture Mar 8
Rest2

Possible REST Level 2 Response
```json
[
{
id: 1, text: 'bla 1', time: '9:00',
},
{
id: 2, text: 'bla, blai 2', time: '9:02',
},
{
id: 3,text: 'bla, bla,blai 3',time: '9:05',
}
]
```
Possible REST Level 3 Response
```json
{ posts:
[{ id: 1, text: 'bla 1', time: '9:00', },
{ id: 2, text: 'bla, blai 2', time: '9:02',},
{ id: 3,text: 'bla, bla,blai 3',time: '9:05',}],
addPost: '/posts/channel'
}
```
URL in REST

* URL
  * Uniform Resource Locator
  * Type of URI
  * protocol://host:port/path?args
* URI
  * Each Resource has at least one (1) URL
  * A Resource can have multiple URLs

Naming Conventions
http://host:80/service/v1/posts/{id}
Use nouns NOT verbs
Use pluralized nouns
Use hyphens “-” for readability
Use / to indicate hierarchy
Avoid file extensions (e.g. .json)
Use versions
Support query arguments (e.g. ?key=value)
Avoid simple number scheme e.g. (1,2,3, ..... 10,11, ....)
const crypto = require('crypto');
crypto.randomBytes(16).toString('hex',0,16)
How to make HTTP Requests in Node
* Nodejs http
- https://nodejs.org/api/http.html
* Axios
- https://www.npmjs.com/package/axios

Provisioning Resources

* Scale Up/Down to meet demand
  * UP: Start more docker containers
  * Down: Reduce number of containers
* Need for load balancer
  * nginx

Nginx
writen in C
* https://hub.docker.com/_/nginx
* https://nginx.org/en/docs/
* Yes, there are now better tools
	 * https://www.phoronix.com/news/CloudFlare-Pingora-No-Nginx#:~:text=Cloudflare%20has%20long%20relied%20upon,the%20CPU%2
0and%20memory%20resources.
	 *
什么意思？后来用rust 写了？ 之前一直是C写的
* Example
	 * Nginx
	 * docker-compose.yml
	 * lb
		 * dockerfile
		 * nginx.conf
	 * s1
		 * dockerfile
		 * server.js
	 * s2
		 * dockerfile
		 * server.js
load balancer??这是干什么的？

nginx.con:
> 
> upstream backend {
>   server nodejs1:6060
>   server nodejs2:8080
> }
> server{
> proxy
> }
```yml
version: '3.9'
services:
 node1:
  build: ./s1
  container_name: nodejs1
  ports:
   - "81:8080"
  volumes:
   - /Users/ralph/classes/353/nginx/s1:/usr/src/app
  stdin_open: true
  tty: true
 node2:
  build: ./s2
  container_name: nodejs2
  ports:
   - "82:8080"
  volumes:
   - /Users/ralph/classes/353/nginx/s2:/usr/src/app
  stdin_open: true
  tty: true
 lb:
  build: ./lb
  container_name: lb
  ports:
   - "80:80"
  stdin_open: true
  tty: true
 
```
Emergence of microservices
* Maintenance
* Deployments are now zero-trust
	 * mTLS
* Side-Car
	 * Have a dedicated component for control of microservice/container
* Service Mesh
	 * https://istio.io/latest/about/service-mesh/



node server

docker-compose up -d
node server(not node server.js)
docker attach lb

htmp://localhost/hello


#### State
* How is state managed?
	 * N instance of a microservice?
* Use of Stateful backend service
	 * E.g. DBMS
	 * https://www.npmjs.com/package/mysql#transactions

Revisiting HTTP Status Codes

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Revisiting HTTP Headers

* https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers