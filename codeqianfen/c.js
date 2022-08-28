const express=require('express');
const {buildSchema}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

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
   }
   type Query{
    product:[Product]
   }
`)
const dataDb={};
const root ={
    product(){
        var arr=[];
        for(const k in dataDb){
            arr.push(dataDb[k]);
        }
        return arr;
    },
    addP({input}){
        dataDb[input.name]=input;
        return dataDb[input.name];
    },
    updateP({id, input}){
       const pro = Object.assign({},dataDb[id],input);
       dataDb[id] = pro;
       return pro;
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
