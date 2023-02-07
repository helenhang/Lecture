# lecture Feb 1
```javascript
Const express = require (‘express’)
	Load the express package
//1:
app.get('/hello', (req, resp, next) => { 
    console.log(req.originalUrl); 
    resp.send('hello'); 
});
```
```js
//2:
Function myFunction1(req, res, next){
Res.send(“”)
}
App.get(‘/’, myfunction1)
```
```js
3:
Function mw1(req,res, next){
	Console.log(‘mw1’)
	Next()
}
Function myFunction1(req, res, next){
    Res.send(“”)
}
App.get(‘/’, mw1, myfunction1)

//需要next，这样才能继续取下一个参数
```
```javascript
//4.
App.use(mw1);
App.use(mw2);

Function mw1(req,res, next){
	Console.log(‘mw1’)
	Next();
}
Function mw2(req,res, next){
	Console.log(‘mw1’)
	Next()
}

Function myFunction1(req, res, next){
Res.send(“”)
}
App.get(‘/’, myfunction1)
```
```js
//5:
App.use(mw1);
App.use(mw2);

Function mw1(req,res, next){
	Console.log(‘mw1’);
	Next();
}
Function mw2(req,res, next){
	Console.log(‘mw1’)
    Next();
}
Function mw3(req,res, next){
	Console.log(‘mw1’);
    Next();
}
Function errFunction(err, req,res, next){
	If(err){
		Res.send(“<h1> Error:” + err.message + “</h1>”);
    }	
    Next()
}
Function myFunction1(req, res, next){
    Res.send(“”)
}
App.get(‘/’, mw3, myfunction1)

//相当于讲reqest 改变了，中间添加了很多东西by mw1,mw2, mw3，然后

App.use(errFunction);
```

```javascript
const express = require('express');
let router = express.Router();
module.exports = router;
router.use((req, res, next) => {
    console.log(req.url, Date.now());
    next();
});

router.route('/scifi')
.get((req, res, next) => { res.send('<h1> SCIFI</h1>'); }
.post((req, res, next) => { });

router.route('/scifi/:bookid')
.get((req, res, next) => { res.send(`<h1> SCIFI ${req.params bookid} </h1>`);})
.put((req, res, next) => {});
```

![picture 3](images/605910ae5e50ddfe6ba3bdf5722c390d84f246698cb7eb5dcbb14bb2434d895e.png)  
![picture 4](images/605910ae5e50ddfe6ba3bdf5722c390d84f246698cb7eb5dcbb14bb2434d895e.png)  
## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Lecute Feb 3
database
https
mysql:
	- docker
	- 8.0. ??
	- 5.7 synchnozier , 
    	- not allow sql database to access the file system

docker-compose.yml
```yml
version: '3'
services:
mysql1:
image: mysql:5.7
container_name: db1
environment:
MYSQL_ROOT_PASSWORD: admin
```

2 servers
- node server
- database
- 怎么互相访问啊？

Commands

Docker:

’docker-compose up -d‘
docker-compose down
docker exec -it container bash
MySQL:
mysql -uroot -padmin

more docker-compose.yml
mysql package
install npm mysql
use it in code

```yml
node1:
mysql1:
image: mysql:5.7
container_name: db1
environment:
MYSQL_ROOT_PASSWORD: admin
```
docker-compose up -d
docker exec -it db1 bash
	- bash 运行在db1的container里面
	- 运行： mysql -uroot -padmin

```sql
CREATE DATABASE mydb;
USE mydb;
CREATE TABLE mytable (
id
username email PRIMARY KEY
);
```
relational database 
###Lecture Feb 6

测试一个server
```shell
docker -exec -it node1_hash
npx loadtest -n 10 -c 1 -m POST -T 'application/x-www-form-urlencoded'' --data '{"'filename":"test", "data": "test"}' http://localhosthost:8080/save
# -n 是说同时启动几个client
#不是npm，而是npx
#-c concurrency 同时hit几个server，sametime
#如果-n 10 -c 10,所以同时发动100个request


docker attack node1
```
next assignment is about fetch + mysql

### MYSQL & Node(1)
```js
var mysql = requir('mysql');
var commection = mysql.createConnection({
	host : 'mysql1',
	user: ''root,
	password: 'admin'
});
connection.connect();
```
运行2个container？怎么互相访问？不是放在同一个container里面？

Add SQL statements
```js
connection.query('', function(
	error, results, fields){
		if(error) throw error;
		console.log('The solution is: ', results);
	});

```
How to define your database
1. MySQL comman
   1. use the command tool and define table
2. Write SQL init in your node code
   ```js
   app.get('init', ()=>{
	connetion.query('Create database posts', function(error,results){
		if(error) console.log(error);
	}

	)
   })
   connection.query('', function(
	error, results, fields){
		if(error) throw error;
		console.log('The solution is: ', results);
	});
	
   ```
   ```js
   app.get('init', (req,res)=>{
	connetion.query('Create database posts', function(error,results){
		if(error) console.log(error);
	}

	)
   })
    app.post('/greeting', (req,res)=>{
	connetion.query('Create database posts', function(error,results){
		if(error) console.log(error);
	}

	)
   })
   ```



