import * as jwt from 'jsonwebtoken';

const secret: jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

export default function createToken(payload:object) {
  const config : jwt.SignOptions = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret as string, config);

  return token;
}

export const verifyToken = (tk:string) => jwt.verify(tk, secret as string);
