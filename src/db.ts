import mongoose from "mongoose"

mongoose.connect('mongodb://localhost:27017/school')

const Collection = {
    Student: mongoose.model("student", {
        email: String,
        pwd: String
    })
}

const ObjectId = mongoose.Types.ObjectId


export { Collection, ObjectId }