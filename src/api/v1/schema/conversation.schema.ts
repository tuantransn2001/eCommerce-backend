import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export const ConversationSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    isDelete: { type: Boolean, default: false },
    members: {
      type: [
        {
          id: { type: String },
          firstName: { type: String },
          type: { type: String },
          avatar: { type: String },
        },
      ],
    },
    messages: {
      type: [
        {
          id: { type: String, default: uuidv4() },
          sender: {
            id: { type: String },
            firstName: { type: String },
            type: { type: String },
            avatar: { type: String },
          },
          content: { type: String },
          isDelete: { type: Boolean, default: false },
          createdAt: { type: Date, default: new Date() },
          updatedAt: { type: Date, default: new Date() },
        },
      ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { timestamps: true, minimize: false },
);
