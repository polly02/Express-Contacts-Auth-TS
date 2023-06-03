import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

function createToken(student) {
    const secret = '12345asd'
    const dataStoredInToken = { _id: student._id }
    return jwt.sign(dataStoredInToken, secret)
}

function createCookie(token) {
    `Bearer ${token}`
}

export { createToken, createCookie }