import { nbVal } from '@paroi/data-formatters-lib';
import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
  return bcrypt.hash(password, nbVal(process.env.SALT));
}

export function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}
