import mongoose from "mongoose";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/communication.model.js";

export const sendMsg = async (req, res) => {
  try {
    const { message } = req.body;
    const senderId = req.params.id;
    const recieverId = req.user._id;
    const msg = new Message({
      senderId,
      recieverId,
      message,
    });
    msg.save().then((res) => {
      const conv = Conversation.findOne({
        participants: { $all: [senderId, recieverId] },
      });
      if (!conv) {
        const con = new Conversation({
          participants: [senderId, recieverId],
          message: [msg._id],
        });
        con
          .save()
          .then(() => {
            console.log("Conversation created");
          })
          .catch((err) => {
            console.log("problem while creating conversation");
          });
      } else {
        conv.message.push(msg._id);
      }
    });
  } catch (err) {
    console.log("error in controller of sendMsg", err.message);
    res.status(500).json({ error: "error while sending message" });
  }
};
