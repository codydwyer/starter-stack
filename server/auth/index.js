import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { getUser } from '../db/users.js';

const secret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret,
});

export async function handleLogin(req, res) {
  const { id } = req.body;
  const user = await getUser(id);
  if (!user) {
    res.sendStatus(401);
  } else {
    const claims = { sub: user.id, username: user.username };
    const token = jwt.sign(claims, secret);
    res.json({ token });  
  }
}
