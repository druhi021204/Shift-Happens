const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new Schema ({
    
    activities : {
        type: String,
        required:true
    },

    duration : {
        type: Number,
        required: true
    },

    // strings: {
    //     type: String,
    //     validate: {
    //         validator: function (value) {
    //             // Validate that the input is a comma-separated list of uppercase strings
    //             const regex = /^[A-Z\s]+(,[A-Z\s]+)*$/;
    //             return regex.test(value);
    //         },
    //         message: props => `${props.value} is not a valid comma-separated list of uppercase strings.`
    //     }
    // }

    requirements : {
        type: String,
        // required: true
    },

    user_id: {
        type: String,
        required: true
      }
}, { timestamps: true })

// dataSchema.statics.fillform = async function(risk, timeperiod)
// {
//     const data = await this.findOne({risk, timeperiod})
//     if(!risk || ! timeperiod)
//     {
//         throw Error ("All fields must be filled")
//     }

//     return data
// }

const Goals = new mongoose.model('Goals', goalSchema)
module.exports=Goals;