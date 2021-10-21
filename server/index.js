const express=require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');
app.use(cors())
app.use(express.json());
const db=mysql.createConnection({
    connectionLimit:10,
    user:'root',
    password:'',
    host:'localhost',
    database:'employee_details'
    
})







 app.post("/create",(req,res)=>
 {
     const name=req.body.name;
     const age=req.body.age;
     const country=req.body.country;
     const salary=req.body.salary;
     const position=req.body.position;

     db.query
     ("INSERT INTO employee (name,age,country,salary,position) VALUES(?,?,?,?,?)" ,
     [name,age,country,salary,position],(err,result)=>
     {
     if(err)
        {
         console.log(err);
        }
     else 
     res.send("Data inserted ");
    }
    )
});



app.get("/employees",
 (req,res)=>
 {
     db.query("SELECT * FROM employee",(err,result)=>
     {
     if(err){
         console.log("error happende here");
     }
     else{
         res.send(result);
     }
    });
 }) 
 

app.listen(3001,()=>{
    console.log(`connected`)
})