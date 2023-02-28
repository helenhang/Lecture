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
		■ Called when node is started
		■ Processed before going to client
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

● Documentation
○ https://reactjs.org/
● Goals of React?
● Approach?
● Imperative vs Declarative
● Steps

Functions & Tags

● What do Functions return?
○ Why
● **How to add styles?**
	- 放在App.css中，然后在js中return html的时候，加在里面就好
● How to pass arguments to functions?
○ Why?

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

● export const Helloo = (props) => {
○ props.name
○ props.posts
● export const Helloo = ({name, posts}) => {
```

哇，完全没有html了，全是js

co-compiler???


### Lecture Feb 27
Props re-render the DOM?

##### Splitting components
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



