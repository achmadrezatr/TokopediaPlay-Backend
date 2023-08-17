import mongoose from "mongoose";

const thumbnailSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: Number,
        required: true,
    },
}, { collection: 'thumbnail' });

const Thumbnail = mongoose.model('thumbnail', thumbnailSchema);

export default Thumbnail;