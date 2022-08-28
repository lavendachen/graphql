const express=require('express');
const {buildSchema}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema=buildSchema(`
   type Product {
    name: String
    upc: String
   }
   type Query{
    products:[Product]
    product(pName: String):Product
   }
`)
const dataDb={};
const root ={
    products(){
        var arr=[];
        for(const k in dataDb){
            arr.push(dataDb[k]);
        }
        return arr;
    },
    product({pName}){
        const name=pName;
        const upc="aaa";
        return {
            name: name,
            upc: upc
        }
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
// query {product(pName: "test") {name upc}}
