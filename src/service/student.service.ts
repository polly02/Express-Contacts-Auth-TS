import bcrypt from 'bcrypt';
import { getUserByEmailDB, createUserDB } from '../repository/student.repository'

async function createStudent(email: string, pwd: string) {
    const findUser = await getUserByEmailDB(email)
    if (findUser) throw new Error('this user already exist')

    const hashpwd = await bcrypt.hash(pwd, 10)
    const createUser = await createUserDB(email, hashpwd)
    return createUser
}

async function doAuthorisation (email: string, pwd: string) {
    const findUser = await getUserByEmailDB(email)
    if (!findUser) throw new Error("this user not found")
    const hashedPwd = findUser.pwd
    if (!(await bcrypt.compare(pwd, hashedPwd))) throw new Error("incorrect password")
    return findUser
}

export { createStudent, doAuthorisation }