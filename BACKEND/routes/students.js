const router=require("express").Router();
let Student=require("../models/student");

http://Localhost:8070/student/add

router.route("/add").post((req,res)=>{

    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;
    const address=req.body.address;

    const newStudent=new Student({
        name,
        age,
        gender,
        address
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})

http://Localhost:8070/student

router.route("/").get(()=>{
    Student.find().then((Students)=>{
        res.json(Students)
    }).catch((err)=>{
        console.log(err)
    })
})

http://Localhost:8070/student/update
router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const{name,age,gender,address}=req.body;

    const updateStudent={
        name,
        age,
        gender,
        address
    }

    const update=await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
    res.status(200).send({Status:"User updated"})

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({Status:"error with updating data"});
    })

})

http://Localhost:8070/student/delete

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=re.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({Status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({Status:"Error with delete user", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user=  await Student.findById(userId).then(()=>{
        res.status(200).send({Status:"User fetched",user:user})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({Status:"Error with get user",error:err.message});
    })
})

module.exports=router;