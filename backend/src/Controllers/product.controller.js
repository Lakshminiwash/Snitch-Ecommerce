import productModel from "../modals/product.model.js";
import { uploadFile } from "../services/storage.service.js";



export async function createProduct(req,res) {
    const {title,description,priceAmount,priceCurrency} = req.body
    const seller = req.user;

    console.log(req.body,req.user,req.files)

    const images = await Promise.all(req.files.map(async(file)=>{
        return await uploadFile({
            buffer:file.buffer,
            fileName:file.originalname,
        })
    }))

    const product = await productModel.create({
        title,
        description,
        price:{
            amount:priceAmount,
            currency:priceCurrency || "INR"
        },
        images,
        seller:seller._id
    })

    res.status(201).json({
        message:"product created successfully",
        success:true,
        product
    })
}


export async function getSellerProducts(req,res) {
    const seller = req.user

    const products = await productModel.find({seller:seller._id});

    res.status(200).json({
        message:"product fetched successfully",
        success:true,
        products
    })
}

export async function getAllProtucts(req,res) {
    const products = await productModel.find()
        return res.status(200).json({
            message:"product fetched successfully",
            success:true,
            products
        })
    } 


export async function getProductDetails(req,res) {
    const {id} = req.params;
    const product = await productModel.findById(id)

    if(!product){
        return res.status(404).json({
            message:"products not found",
            success:true
        })
    }

    return res.status(200).json({
        message:"product fetched successfully",
        success:true,
        product
    })
}