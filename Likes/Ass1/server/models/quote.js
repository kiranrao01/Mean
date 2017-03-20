var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var QuoteSchema= new Schema({
	quoteText:{type:String},
	author:{type:Schema.Types.ObjectId,ref:'User'},
	likes:{type:Number,default:0}
},{timestamps:true});

mongoose.model('Quote',QuoteSchema)