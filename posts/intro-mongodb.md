---
title: 'Intro to MongoDB - IN PROGRESS'
date: '2020-08-19'
---

## Perequisites
---
In order to follow along with the tutorial, be sure to:
1. Setup a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Install [Node.js](https://nodejs.org/en/download/)
3. Install [MongoDB Compass](https://www.mongodb.com/products/compass)

## Database Basics
---
We'll briefly cover **What's a Database** and why you should start using them
as early as possible. Then cover a few **Types of Databases** to understand
how the data can be structured and organized. Finally before we get into
MongoDB, I think it would be beneficial to understand **What is CRUD**
and how it relates to databases.

#### What's a Database
A database is an organized persistant collection of structured data. You can 
picture a database as a table of rows and columns which make it easy to process
and query data. The data can be accessed, managed, modified, updated,
controlled, and organized. Most databases use structured query language [**(SQL).**](https://www.w3schools.com/sql/)
Below is an example of what an SQL database would look like.

![SQL Example](/images/db.png "SQL Example")

#### What's a DBMS
A database management system is a comprehensive software program known **(DBMS).**
It serves as the interface between the database and its end users or programs,
essentially it's a tool that lets you interact with the database. For example,
during this tutorial we'll be using **MongoDB Compass** which is a DBMS to interact
with our data.

#### Types of Databases
There are many different types of databases and picking the right one depends
on how your organization will use the data. We'll cover a few types here and 
try to remember that they all interact with organized persistant data.
* **Relational Databases.** Relational databases became dominant in the 1980s. 
Items in a relational database are organized as a set of tables with columns
and rows. Relational database technology provides the most efficient and 
flexible way to access structured information.
* **Object-Oriented Databases.** Information in an object-oriented database 
is represented in the form of objects, as in object-oriented programming.
* **NoSQL Databases.** A NoSQL, or nonrelational database, allows unstructured and 
semistructured data to be stored and manipulated (in contrast to a relational 
database, which defines how all data inserted into the database must be 
composed). NoSQL databases grew popular as web applications became more common 
and more complex. ([MongoDB](https://www.mongodb.com/) is a NoSQL Database)

#### What is CRUD
When it comes databases, we interact with them by through queries to Create,
Retrieve, Update, and Delete [(CRUD)](https://www.codecademy.com/articles/what-is-crud) 
data within a database.
![MongoDB Model](/images/model.svg)

## What is MongoDB
---
MongoDB is...

## How to use MongoDB
---
Let's use it!