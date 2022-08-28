const express=require('express');
const {buildSchema}=require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema=buildSchema(`
   type Account {
    name: String
    age: Int
    department: String
   }
   type Query{
    hello: String
    accountName: String
    age: Int
    account: Account
   }
   
`)

const root ={
    hello: ()=>{
        return 'hello world';
    },
    accountName: ()=>{
        return 'Good!';
    },
    age:()=>{
        return 21;
    },
    account:()=>{
        return {
            name:'Jack',
            age: '23',
            department: 'Toronto'
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
app.use(filterMiddleware);

app.use('/graphql',graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))


app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(3000);
