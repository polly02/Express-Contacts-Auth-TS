import {Collection, ObjectId} from '../db'

async function getUserByEmailDB(email: string) {
    return await Collection.Student.findOne({ email: email })
}

async function createUserDB(email: string, hashPwd: string) {
    const record = await Collection.Student.collection.insertOne({email: email, pwd: hashPwd})
    return { _id: record.insertedId, email, pwd: hashPwd }
}

export { getUserByEmailDB, createUserDB }