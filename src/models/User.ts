import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    country: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    api_key: { type: String },
    registrationMethod: { type: String, default: 'email', enum: ['email', 'google'] },
    whishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
})

export const User = mongoose.model('user', userSchema)