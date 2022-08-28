
# Language

English 

## Envirement:
"graphiql: true" is for debug;

## install
### npm init -y  
    -y means to create package.json

### npm install express -S
### npm install graphql -S

### npm install graphql@"^14.7.0 || ^15.3.0" -S
### npm install express-graphql -S

## run
node hello.js

nodemon hello.js

## client
```js
query {  hello }
```
```js
query {
  hello, accountName
}
```
```js
query {hello,
  accountName,age,account {name age department} 
}
```
## browser google 
### check Network in the browser.
### add "auth = 1" into Cookies of Application in the browser.

