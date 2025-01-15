import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  age: number;
  hobbies: string[];
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  hobbies: {
    type: [String],
    default: []
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);