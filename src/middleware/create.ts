import jwt, { Secret } from 'jsonwebtoken';

function generateToken(username:string){
    const secretKey:Secret = process.env.TOKEN_SECRET!;
    return jwt.sign({username: username}, secretKey,{expiresIn:'7200s'});
}
export default {generateToken};