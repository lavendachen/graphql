const express=require('express');
const {buildSchema}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema=buildSchema(`
   type Product {
    name: String
    price(city: String): String
   }
   type Query{
    productList(productNo: Int): [String]
    getProduct(productName: String): Product
   }   
`)

const root ={
    productList: ({productNo})=>{
        const orders={
            2:['small egg','big egg'],
            23:['milk 1%','milk 2%']
        }
        return orders[productNo];
    },
    getProduct({productName}){
        const name = productName;
        const price=({city})=>{
            if(city==="Toronto" || city==="Calary"){
                return "202.222"
            }
            return "101.09";
        }
        return {
            name, price
        }

    }
}

const app = express();

const filterMiddleware=(req, res, next)=>{
    const s =req.url;
    const r = s.indexOf('/graphql');
    // res.send(r+" :"+s);
    const headers = req.headers;
    const auth =req.headers.cookie;
    if(auth==undefined || auth==null){
        res.send(JSON.stringify({
            error: "404",
            headers: headers
        }));
        return;
    }
    const authN = auth.indexOf('auth');
    if(r!==-1 && authN===-1){
        res.send(JSON.stringify({
            error: "403",
            auth: auth,
            indexOf: authN
        }));
        return;
    }
    next();
}
// app.use(filterMiddleware);

app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use(express.static('public'))

app.listen(3000);
//1
// query{ product(productNo:2)}
// output: {"data": {"product": ["small egg","big egg"]}}

// query{ product(productNo:1)}   
// output:{"data": {"product": null}}

// query{ productList(productNo:2)} //{"data":{"productList":["small egg","big egg"]}}
//2
//query{ getProduct(productName:"2") {name
//     price(city: "Toronto")
//   }}
// output: {"data": {"getProduct": {"name": "2","price": "202.222"}}}
// git add .
// git commit -m 'b.js'
// git push