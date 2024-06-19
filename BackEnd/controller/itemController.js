const { item } = require("../config/schema"); // Assuming your item schema is in config/schema.js
const multer = require('multer');

const storage = multer.memoryStorage(); // Store image data in memory temporarily
const upload = multer({ storage }); // Configure multer middleware

exports.addItem = async (req, res) => {
    try {
        // Use multer middleware to handle image upload (replace 'image' with the actual field name)
        upload.single('itImg')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(400).json({
                    status: "Failed to upload image",
                    error: err.message,
                });
            }

            // Access uploaded image data from req.file
            const imageData = req.file.buffer; // Buffer containing the image data

            // Extract other data from req.body (excluding image)
            const newItemData = req.body; // Assuming other data fields are in req.body

            // Create the new item with image and other data
            const newItem = await item.create({
                ...newItemData,  // Spread operator to include other data
                itImg: imageData, // Add image data to the item object
            });

            res.status(201).json({
                status: "Item added successfully",
                data: newItem,
            });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "Failed to add item",
            error: err.message, // Provide a more informative error message
        });
    }
};
exports.getAllItem=async(req,res)=>{

    try {
        const getAll = await item.find();

        res.status(200).json({
            status:"success",
          data:{
          getAll
          }


        })
        }catch (err){

        res.status(404).json({

            status:"Fail",
            massage:"has get some Error"

        })

    }
}
exports.getItem=async(req,res)=>{
    try {
        const getItem = await item.findById(req.params.id)
        res.status(200)({
            status:"getData",
            data:{

                getItem
            }


        })
    }catch (err){
        res.status(404)({

            status:"HasSome Problem",
            massage:err

        })


    }
}
exports.deleteItem= async (req,res)=>{
    try {
        const deleteItem = await item.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"deleted",
            data:deleteItem

        })
    }catch (err){

        res.status(404).json({
            status:"Error",
            massage:err


        })
    }
}
exports.updateItem=async(req,res)=>{
    try {
        const updateItem= await item.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({

            status:"updated",
            data:updateItem
        })
    }catch (err){

        res.status(404).json({
            status:"hasSomeProblem",
            massage:err

        })
    }

}
