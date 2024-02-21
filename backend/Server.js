const express = require ("express");
const cors = require ("cors");
const mysql = require ("mysql");

const app = express();

app.use(express.json());

app.use(cors());





const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>{
 
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data)=>{
 if(err)
    return res.json("Error");
    return res.json(data);
 
    })
})

//employehr code 


app.get("/getemploye",(req,res)=>{
 
    const sql = "SELECT * FROM employe";
    db.query(sql, (err, data)=>{
 if(err)
    return res.json("Error");
    return res.json(data);
 
    })
})

//interview code 


app.get("/interviewdatapath",(req,res)=>{
 
    const sql = "SELECT * FROM interviewdata";
    db.query(sql, (err, data)=>{
 if(err)
    return res.json("Error");
    return res.json(data);
 
    })
})




app.delete('/student/:id',(req,res)=>{
 
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data)=>{
 if(err) return res.json("Error");
    return res.json(data);
    })
})

 //delete employee data  item 

app.delete('/employedelet/:id',(req,res)=>{
 
    const sql = "DELETE FROM employe WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data)=>{
 if(err) return res.json("Error");
    return res.json(data);
    })
})






 //delete interview data  item 

app.delete('/deletinterview/:id',(req,res)=>{
 
    const sql = "DELETE FROM interviewdata WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data)=>{
 if(err) return res.json("Error");
    return res.json(data);
    })
})



app.post('/login',(req,res)=>{
    const {email,password} = req.body
   const sql = `SELECT * FROM  admin WHERE email = '${email}'` 

   db.query(sql,(err,data)=>{
    if(data.length===0){
        res.json(false)
    }else{
        if(data[0].password===password){
            res.json(true)
        }else{

            res.json(false)
        }
    }})
   
})

//register data

app.post('/create',(req,res) =>{
    const sql = "INSERT INTO student  (`Name`,`Jobposition`,`JobExperience`,`Location`,`currentSalary`,`country`,`email`,`contactNumber`,`howknow`) VALUES (?) ";
const values =[

    req.body.Name,
    req.body.Jobposition,
    req.body.JobExperience,
    req.body.Location,
    req.body.currentSalary,
    req.body.country,
    req.body.email,
    req.body.Contactnumber,
    req.body.Howknow,
]

db.query(sql,[values],(err,data)=>{

    if(err) return res.json(err);
    return res.json(data);
})
})


// Employee register data

app.post('/employe',(req,res)=>{

    const {name,userid,jobposition,location,dateofbirth,email,number,address} = req.body
    const sql = "INSERT INTO employe  (`name`,`userid`,`jobposition`,`location`,`dateofbirth`,`email`,`number`,`address`) VALUES (?) ";

     db.query(sql,[[name,userid,jobposition,location,dateofbirth,email,number,address]],(err,data)=>{
        if (err) return res.json(err);
        return res.json(data)
     })
})





app.post('/interviewdata',(req,res)=>{

sql = "INSERT INTO interviewdata  (`Name`,`Jobposition`,`JobExperience`,`Location`,`currentSalary`,`country`,`email`,`contactNumber`,`howknow`) VALUES(?) ";

const values = [

   req.body.Name,
   req.body.Jobposition,
   req.body.JobExperience,
   req.body.Location,
   req.body.currentSalary,
   req.body.country,
   req.body.email,
   req.body.contactNumber,
   req.body.howknow,
]
 db.query(sql,[values],(err,data)=>{
  if(err) return res.json(err);
  return res.json(data);


 })


})












app.post('/hrlog',(req,res)=>{
    const {email,password} = req.body
   const sql = `SELECT * FROM  hr WHERE email = '${email}'` 

   db.query(sql,(err,data)=>{
    if(data.length===0){
        res.json(false)
    }else{
        if(data[0].password===password){
            res.json(true)
        }else{

            res.json(false)
        }
    }})
   
})


app.post('/hr',(req,res)=>{
    const sql = "INSERT INTO hr  (`name`,`email`,`password`,`company`) VALUES (?)";

    const values =[

        req.body.name,
        req.body.email,
        req.body.password,
        req.body.company,
    ]
    db.query(sql,[values],(err,data)=>{

        if (err) return res.json(err);
        return res.json(data);
    })

})


app.listen(8081,()=>{
    console.log("listining");
})