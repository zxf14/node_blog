var mongoose = require('mongoose');    //引用mongoose模块
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:{type:String,required:false},
	age:{type:Number,required:false},
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
});

// Middleware!
UserSchema.pre('save',function(next){
	var user = this;
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else{
		this.meta.updateAt = Date.now();
	}

	// MUST !!! USE !!! next()!
	next();

});

UserSchema.methods = {
	speak :function(){
		var greeting =this.name
		? "Meow name is " + this.name
		: "I don't have a name";
			console.log(greeting);
	} 
}

// statics 
UserSchema.statics = {
	fetch: function(cb){
		return this.find({}).exec(cb);
	},
	findById: function(id, cb){
		return this.findOne({_id: id}).exec(cb);
	}

};

module.exports = mongoose.model('User',UserSchema);
