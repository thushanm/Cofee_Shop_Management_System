
const {supplier} = require("../config/schema")
const {hash, genSalt} = require("bcrypt");

exports.addSupplier = async(req,res)=> {
    try {
        const newSupplier = await supplier.create(req.body)

        res.status(200).json({
            status: "success",
            data: {
                supplier: newSupplier
            }

        })
    } catch (err) {

        res.status(400).json({
            status: "fall",
            massage: err

        })
    }
}
    exports.getAllSuppliers = async(req,res) => {

        try {
            const suppliers = await supplier.find();
            res.status(200).json({
                status: "Success",
                data: {
                    suppliers
                }


            });
        } catch (err) {

            res.status(400).json({

                status: "fall",
                massage: err
            })
        }
    }
        exports.getSupplier=async(req,res)=>{
            try {


            const suppliers = await supplier.findById(req.params.id);
            res.status(200).json({
                status:"Success",
                data:{
                    suppliers

                }
            })
        }catch (err){
                res.status(400).json({

                    status:"Fall",
                    massage:err
                })

            }
        }
        exports.updateSupplier = async(req,res)=>{
    try{
        const update = await supplier.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            status:"Success",
            data:update

        })

    }catch (err){
        res.status(400).json({
          status:"fall",
          massage:err

        })

    }

}
exports.deleteSupplier = async(req,res)=>{
    try{
        const deletes = await supplier.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"Success",
            data:null

        })

    }catch (err){
        res.status(400).json({
            status:"fall",
            massage:err

        })

    }

}




