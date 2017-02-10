var mongoose = require('mongoose');    //引用mongoose模块
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var BlogSchema = new Schema({
	title:{type:String,required:false},
	body:{type:String,required:false},
	published:{type:Date,default:Date.now()},
	author:{type:ObjectId,ref:'User'},
});

// Middleware!
BlogSchema.pre('save',function(next){
	var blog = this;
	this.published = Date.now();

	// MUST !!! USE !!! next()!
	next();

});

BlogSchema.methods = {
	speak :function(){
		var greeting =this.title
		? "Blog title is " + this.title
		: "It don't have a title";
			console.log(greeting);
	} 
}

// statics 
BlogSchema.statics = {
	fetch: function(cb){
		return this.find({}).exec(cb);
	},
	findById: function(id, cb){
		return this.findOne({_id: id}).exec(cb);
	}

};

module.exports = mongoose.model('Blog',BlogSchema);
