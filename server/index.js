const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express();

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT||8070


const datachema=mongoose.Schema({
    name:String,
    place:String,
    ur_location:String,   
    hotel:String,             
    start_date:String,
    end_date:String,
    booking_details:String,
    food_details:String
},{

    

    timestamps:true
})

const usermodel=mongoose.model("users",datachema);



//get
app.get("/",async(req,res)=>{

    const data=await usermodel.find({})
    res.json({success:true,data:data})
})

//create
app.post("/create",async(req,res)=>{

    const data=new usermodel(req.body)
    await data.save();
    res.send({success:true,message:"user added successfully"});
})

//update
app.put("/update",async(req,res)=>{
    const {id,...rest}=req.body;
    const data=await usermodel.updateOne({_id:id},rest)
    res.send({success:true,message:"user updated successfully",data:data});

})
//delete
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await usermodel.deleteOne({_id:id})
    res.send({success:true,message:"user deleted successfully",data:data});
})

app.get("/user/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await usermodel.findById(id);

        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});

mongoose.connect("mongodb+srv://shehan:Shehan99@cluster0.t3v3psz.mongodb.net/Travel_Details?retryWrites=true&w=majority")
.then(()=>{
    console.log(`port number = ${PORT}`);
    app.listen(PORT,()=>console.log("server connected successfully!"));
   
}).catch((err)=>{
    console.log(err)
})