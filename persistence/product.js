var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema ({
    code: {type:String, required:true,max:50},
    name: {type:String, required:true,max:50},
    price: {type:String, required:true},
    existence: {type:String, required:true}
});

module.exports = mongoose.model('Product', ProductSchema);