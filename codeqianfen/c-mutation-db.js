const express=require('express');
const {buildSchema}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

const mysql = require('mysql')
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'sakila'
  });

const schema=buildSchema(`
   type Product {
    name: String
    upc: String
   }
   input ProductInput {
    name: String
    upc: String
   }
   type Mutation{
    addP(input: ProductInput): Product
    updateP(id:ID!,input: ProductInput): Product
    del(id:ID!): Boolean
   }
   type Query{
    product:[Product]
   }
`)

const root ={
    product(){
        return new Promise((resolve, reject)=>{
            pool.query('select name from address',(err, results)=>{
                if(err){
                    console.log('error'+err.message);
                    return;
                }
                const arr=[];
                for(let i=0;i<results.length;i++){
                    arr.push({
                        name: results[i].name
                    })
                }
                resolve(arr);
            })
        })
    },
    addP({input}){
        const data={
            country: input.name
        }
        return new Promise((resolve, reject)=>{
            pool.query('insert into country set ?',data,(err)=>{
                if(err){
                    console.log('insert error'+err.message);
                    return;
                }
                resolve(data);
            })
        })
    },
    updateP({id, input}){
       const data={
        name: input.name
       }
       return new Promise((resolve, reject)=>{
        pool.query('update address set ? where name=?',[data,id],(err)=>{
            if(err){
                console.log("error "+ err.message);
                return;
            }
            resolve(data);
        })
       })
    },
    del({id}){
        return new Promise((resolve, reject)=>{
            pool.query('delete from address where name=?',[id],(err)=>{
                if(err){
                    console.log('error '+ err.message);
                    reject(false);
                    return;
                }
                resolve(true);
            })
        })
    }
}

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use(express.static('public'))

app.listen(3000);
// # query {product {name upc}}
// # mutation{addP(input: {name:"egg",upc:"xxxx"}) {name upc}}
// # mutation{addP(input: {name:"milk",upc:"1xxx"}) {name upc}}
// # mutation{updateP(id:"milk",input: {name:"milk",upc:"2ssx2x"}) {name upc}}
// # mutation{updateP(id:"milk",input: {name:"milk",upc:"3ssx33x"}) {name upc}}
