const express=require('express');
const {buildSchema, graphql}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

// const schema=buildSchema(`
//    type Product {
//     name: String
//     upc: String
//    }
//    type Query{
//     products:[Product]
//     product(pName: String):Product
//    }
// `)
// const dataDb={};
// const root ={
//     products(){
//         var arr=[];
//         for(const k in dataDb){
//             arr.push(dataDb[k]);
//         }
//         return arr;
//     },
//     product({pName}){
//         const name=pName;
//         const upc="aaa";
//         return {
//             name: name,
//             upc: upc
//         }
//     }
// }

// does not work: new graphQLObjectType({ //new graphql.GraphQLObjectType({
var ProductType = new graphQLObjectType({ //new graphql.GraphQLObjectType({
    name: 'Product',
    fields: {
        name: {type: graphql.GraphQLString},
        upc: {type: graphql.GraphQLString}
        // {type: graphql.GraphQLInt}
    }
});
var queryType =new graphQLObjectType({ //new graphql.GraphQLObjectType({
    name: "Query",
    fields:{
        product:{
            type: ProductType,
            args:{
                pName:{type: graphql.GraphQLString}
            },
            resolve: function(_,{pName}){
                const name = pName;
                const upc = 'upc00001';
                return {name, upc};

            }
        }
    }
});
const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use(express.static('public'))

app.listen(3000);
// query {product(pName: "test") {name upc}}
