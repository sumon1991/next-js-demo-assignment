import Users from "../../../models/Users";
import connectDB from "../../../middleware/mongoose";   

// POST API

const handler = async (req, res) => {


    if(req.method == 'POST') {
     console.log(req.body);
     try{
        
        let data = await Users.findOne({email: req.body.email});
        console.log(data);
        if(!data) {
            alert('not found');
            res.status(400).json({message: 'User not found'});
        } else {
            if(Object.keys(data).length!=0) {
                if(data.password === req.body.password) {
                    res.status(200).json(data);
                } else {
                    res.status(400).json({message: 'Password is wrong'});
                }
            } else {
                res.status(400).json({message: 'User not found'});
            }
        }
      
     } catch(err) {
      res.status(400).json({message: err.message});
     }
 
    } else {
     res.status(400).json({message: 'Method not allowed.'});
    }
 
 //   const data = await products.find();
 //   res.status(200).json(data);
 
 
 
 }
 
 export default connectDB(handler);