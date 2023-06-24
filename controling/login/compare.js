import bcrypt from 'bcryptjs';
const comparefunction = async (pass, hashpass) => {
  const h = await bcrypt.compare(pass, hashpass);
  return h;
};

export { comparefunction };
