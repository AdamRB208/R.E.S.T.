import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RatsSChema } from '../models/Rats.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Rats = mongoose.model('Rat', RatsSChema);
}

export const dbContext = new DbContext()
