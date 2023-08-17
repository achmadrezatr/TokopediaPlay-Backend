import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { collection: 'comment', timestamps: false });

const Comment = mongoose.model('comment', commentSchema);

export default Comment;