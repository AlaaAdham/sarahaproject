import jwt from 'jsonwebtoken';

export const generate = (payload, signature = process.env.SIGNATURE, expiresIn = '2h') => {
  const token = jwt.sign(payload, signature, { expiresIn });
  return token;
};

export const verification = (token, signature = process.env.SIGNATURE) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};


