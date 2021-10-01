var mongoose = require('mongoose');
const product = require('./product');
var dev_db_url = "mongodb+srv://admin:IZY336kpk@cluster0.3fvf7.mongodb.net/victorDB?retryWrites=true&w=majority";




var mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error :'));

var Product = require('./product');

////////////////// CRUD OPERATIONS ////////////////

//CREATE -----
exports.product_create = function(req,res){

    var product = new Product({
        code:req.body.code,
        name:req.body.name,
        price:req.body.price,
        existence:req.body.existence
    });
    product.save(function(err){
        if(err){
            return next(err)
        }
        res.send({'message':'OK'})
    })
}

//READ -----
exports.product_read = function(req,res){

    Product.findById(req.query.id, function(err,product){
        if(err) return next(err)
        res.send(product)
    })
}

//UPDATE -----
exports.product_update = function(req,res){

    Product.findByIdAndUpdate(req.query.id, {$set:req.body}, function(err,user){
        if(err) return next(err)
        res.send({'message':"UPDATED"})
    })
}

//DELETE -----
exports.product_delete= function(req,res){

    Product.findByIdAndRemove(req.query.id, function(err,user){
        if(err) return next(err)
        res.send({'message':"DELETED"})
    })
}