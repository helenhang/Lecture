# Relation Model
Introduction

* History
* Basic Terminology
* Relational Model versus Relational DBMS
* Domain
* Relation
* Relational Data Integrity

### History
 * E. F. Codd
   * A relational model of data for large shared data banks(1970)
 * Set-Theory model (Childs, 1968)
 * Goals of the RM(relational model)
   * high degree of data independence
   * theory of basic problems e.g. consisteny, redundancy(normalization)
   * use of set-oriented data manipulation
* 当时还没有database，都是file system， 这个人没有找到活着没有找theory，自己建立了一套theory



#### Terminology
| common Term | Relatinal Term|
| ------------- |:-------------:|
| Table| relation|
| Record or Row| Tuple|
| Field or Column | Attribute |
| Number of columns | Degree |
| Number of rows | Cardinality |
| Identifier | Primary Key |
| Pool of legal values | Domain|

![picture 1](../images/ce1ad2522976811df258d62a35e062d8aa86fbe33b93c03a8fd21275cca631fb.png)  

#### Domain

* Pool of values (like a type)
* Values are atomic
* Domains have names
– unique in database
– are set of values
– different domains can overlap
* e.g. {white, red, blue, green }

#### Relation 1
* Relations consist of
  – heading & body
* Heading
  – fixed set of attributes
    - e.g. { <A1:D1>, <A2:D2>, ..... <AN:DN>}
* Body
  – set of tuples
    * e.g. { T1, T2, TN }
  – Tuple
    * { <A1:V1>, <A2:V2> ..... <An:VN> }

#### Relation 2

* Heading for relation S
  – { bno, street, city, country}
  – {
      <bno : DOMAIN-BNO>
      <street : DOMAIN-STREET>
      <city : DOMAIN-CITY>
      <country : DOMAIN-COUNTRY>
  – } 
#### Relation 3

* Tuple
  – { b1, 110 Money Road, London, UK }
  – {
    * <bno : ‘b1’>
    * <street: ‘110 Money Road’>
    * <city : ‘London’>
    * <country : ‘UK’>
  – }  

#### Relation 4

* We interpret as humans the relation
* Difference between relation and table
  – relation -> abstract
  – relation -> linked to set theory
  – table -> concrete thing
  – table -> allows duplicate tuples

#### Relation 5

* Table -> suggest order
  » tupel
  » attributes

#### Relation 6

* Degree (arity)
  – columns
  – are domains relations?
  – NO
    * relation dynamic
    * domain static
    * Cardinality
  – rows

  Operations

* Relation -> Relation
* Operations
  - Selection
  - Projection
    - combine，是选列吗？对的，select 后面的，就是运用projection
    - ![picture 2](../images/19bcf433c939c979a928f9a941bab12d2153cf116ee7d709a3be81e925c306d5.png)  

  - Cartesian Product
    - 笛卡尔乘积
  - Union
    - 合集
  - Intersection
    - 交集
  - Difference
    - 合集-交集
  - Join(s)
    - inner join
      - ![picture 4](../images/7fc3dc223fea9ef83131f6845f71ff27dc06eff43b8ae49e629ee685fcfa4451.png)  
    - outter join
      - ![picture 5](../images/ed8447727a71bfabdcf8ca3a6df74be9d198de0174af034480c60ed038e6c5ee.png)  
    - natural join
      - `SELECT * FROM employee NATURAL JOIN department;`
  - Division
![picture 6](../images/afbe3ffdc5d60549ce1bfbc80b0ad0b00e319c1281d28a79eaa4f936089ac686.png)  

SQL 可以完成各种数据操作，例如过滤、分组、排序、限定数量等；所有这些操作的对象都是关系表，结果也是关系表。
  ![picture 3](../images/8e86c816019ab9d5b7ac33ff8e6f0b793b8c55010cffa5a882d461d1f0ced659.png)  

那么岂不是，数据库需要所有的set相关的理论？和set 相关的理论都有哪些？我能想到的只是笛卡尔乘积

#### Relational Keys

* Super Key
– An attribute or a set of attributes that uniquely identify a tuple
within a relation

* Candidate Key
– A super key such that no proper subset is a super key within the
relation

* Primary key
– The candidate key that is selected to identify tuples uniquely
within the relation

* Foreign Key
– An attribute or set of attributes within one relation that matches the
candidate key of some relation

#### Relational Data Integrity

* Candidate keys
  – uniqueness property
  – irreducibility property

* Why candidate keys?
  – Reference tuple

* Primary key
  – a special candidate key

* Foreign key
  – referential integrity (no unmatched foreign keys)

#### Relations
* 1:1
* 1:N
  - tabel
* N:M
  - Linking multiple tables
* How to model/represent relations?

How to develop tables?

* How to model?
* Many approaches
  - Experience
  - Entity Relationship Diagram (ER Diagram)
    -  Entity
    -  Attributes
    - Relationship


##### Normalized Relations

* Normalization
  – A technique for producing a set of relations with desirable
properties, given the data requirements of the enterprise

* Different types of NF - 1,2,3,4,5 ......
  - 1NF
    - A relation in which the intersection of each row and column
contains only one value
  - 2NF
    - Relation is in 1NF and non key attributes are fully dependent
on key
  -  3NF
    - Relation is in 2NF and all non-key attributes are not
dependent on other non-key attribute

#### DML

DML 表示数据操作语言，也就是插入、更新和删除。以下是一个插入语句示例：

But there is no order of tuples or attributes!
RM versus Relational DBMS
* there are differences between RM and relational DBMS
  * RM no duplicate tuples
  * Domains
  * etc...

### Lecture Feb 10

### Lecture Feb 13
#### join
![picture 1](../images/578e63beea2fe3ab835a13891d5e27ebd73ee4929b83149172aa067b611c22c7.png)  

#### view
因为privileges的原因，view里面是已经生成的sql的result，然后可以在这些生成的view里面搜索
`mysql> CREATE VIEW test.v AS SELECT * FROM t;`

#### transaction

```sql
begin try
  START TRANSACTION;
  SET @transAmt = '500';
  SELECT @availableAmt:=ledgerAmt FROM accTable WHERE customerId=1 FOR UPDATE; UPDATE accTable SET ledgerAmt=ledgerAmt-@transAmt WHERE customerId=1;
  UPDATE accTable SET ledgerAmt=ledgerAmt+@transAmt WHERE customerId=2; COMMIT;
end try
begin catch
  rollback transaction
end catch
```
COMMIT , ROLLBACK and AUTOCOMMIT

next react???


#### Lecture Mar 13

#### Normalization
* Why?
  * why do I want to create N smaller tables?
  * Advantages?
  * Disadvantages
* 1 NF
* 2 NF
* 3 NF
* 4 NF
* 5 NF
  
process reduce the reduntance??

##### 1NF:
* columns contain only atomic values
* row order has no information
* primary key

##### 2NF
* each non-key attribute must depend on the entire primary key

##### 3NF
* every non-key attrbutes should not depend on other key

需要填写那些

##### Transactions
lock several resources down
outcome
1. roll back
2. commit

share lock

#### CouchDB
apache, autrolite way database
Database:
1. DB2 -- IBM
2. Orale 
3. MySql - microsoft

if don't know any sql, how to use DB-->**couchDB**
use html or json to manupulate the DB

Docker hub
* https://hub.docker.com/_/couchdb
* Read instructions
* Create docker-compose.yml OR install manually (not recommended)

```yml
version: '3'
services:
  node1:
    build: ./s1
    depends_on:
    - mysql1
    container_name: s1
    ports:
    - "80:8080"
    volumes:
    - /Users/ralph/node/nodejs/db/s1:/usr/src/app
  mysql1:
    image: mysql:5.7.31
    container_name: db1
    ports:
    - "3306:3306"
    environment:
    MYSQL_ROOT_PASSWORD: admin
    MYSQL_DATABASE: test
  couchdb1:
    image: couchdb:3.2.0
    container_name: cdb1
    ports:
    - "5984:5984"
    volumes:
    - /Users/ralph/node/nodejs/db/couchdb:/opt/couchdb/data
    environment:
    COUCHDB_USER: admin
    COUCHDB_PASSWORD: admin
```

这是couchDB的yml

```yml
couchdb1:
  image: couchdb:3.2.0
  container_name: cdb1
  ports:
  - "5984:5984"
  volumes:
  - /Users/ralph/node/nodejs/db/couchdb:/opt/couchdb/data
  environment:
  COUCHDB_USER: admin
  COUCHDB_PASSWORD: admin
```

#### Basic Concepts
* Expose operations as HTTP commands
  * E.g. GET, PUT, POST, DELETE

#### Intro
* Use of Futon
  * http://localhost:5984/_utils
* Let’s create a “company db”
* Staff -> ID, name, job, project
  
#### Example curl statements

* All docs
	* curl -X GET http://localhost:5984/test/_all_docs -H "Content-Type: application/json"
* Read doc
	* curl -X GET http://localhost:5984/test/123 -H "Content-Type: application/json"
* Update doc
	* curl -X PUT http://localhost:5984/test/123 -H "Content-Type: application/json" -d
'{"_rev":"1-a0e7337608530fb5bcfaf32c3d576468","name":"Ralph D"}'

* Create doc
	* curl -X PUT http://localhost:5984/test/12345 -H "Content-Type: application/json" -d '{"name": "HAHA"}'

* Delete doc
	* curl -X DELETE http://localhost:5984/test/123?rev=2-2f65db9074848a6f0e034ef6761f3fb7

Mango
* Combination
	* $and, $or, $not, $nor, $all, $elemMatch
* Condition
	* $lt, $lte, $eq, $ne, $gte, $gt
* Object
	* $exists, $type
* Array
	* $in, $nin, $size
* Misc
	* $mod
	* $regex

Mango ..

* Index
```js
{
	"index": {
	 "fields": [
	 "name"
	 ]
	}
}
```
Query
```js
{
  "selector": {
  "name": {
  "$gt": null
  }
  }
}
{
"selector": {
  "name": { 
    "$or": [ 
      { "$eq": "peter" }, { "$eq": "ralph" } ] 
      } 
    },
    "fields": ["name","job"]
  }
```
Views
* https://docs.couchdb.org/en/stable/ddocs/views/intro.html
* Map-reduce
	* Map -> Key/Value list
	* Reduce -> process Key/Value

Nano
* Nano package
* https://www.npmjs.com/package/nano
Read package

```js
'use strict';

// load package
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8080;
const HOST = '0.0.0.0';

var nano = require('nano')('http://admin:admin@localhost:5984');
var test = nano.use('test');

//Different ways to connect

var nano = require('nano')('http://admin:test@localhost:5984');
var nano = require('nano')('http://admin:test@docker.for.mac.host.internal:5984');
var nano = require('nano')('http://admin:test@couchdb1:5984');

```