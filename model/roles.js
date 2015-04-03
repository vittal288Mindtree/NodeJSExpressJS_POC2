var mongoose = require('mongoose');  
/*var blobSchema = new mongoose.Schema({  
  name: String,
  badge: Number,
  dob: { type: Date, default: Date.now },
  isloved: Boolean,
  company:String
});*/


var roleSchema = new mongoose.Schema({
    name: { type: String, required: "Please enter the Role name" },
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Setting' }],
    can_download: { type:Boolean, default:false },
    can_order: { type:Boolean, default:false },
    can_email: { type:Boolean, default:false },
    view_only: { type:Boolean, default:true },
    status: { type: String, enum: ['Active','InActive'], required: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date },
    updated_on: { type: Date }
})
mongoose.model('Role', roleSchema);
