import mongoose from "mongoose";
import { Message } from "../models/message.model.js";
import { Conversation } from "../models/communication.model.js";

export const sendMsg = async (req, res) => {
  try {
    const { message } = req.body;
    const recieverId = req.params.id;
    const senderId = req.user._id;
    const msg = new Message({
      senderId,
      recieverId,
      message,
    });
    msg.save();
    const conv = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });
    if (!conv) {
      const con = new Conversation({
        participants: [senderId, recieverId],
        messages: [msg._id],
      });
      con
        .save()
        .then(() => {
          console.log("Conversation created");
        })
        .catch((err) => {
          console.log("problem while creating conversation");
        });
      res.send(con);
      res.end();
    } else {
      conv.messages.push(msg._id);
      conv.save().then(() => {
        res.send(conv);
        res.end();
      });
    }
  } catch (err) {
    console.log("error in controller of sendMsg", err.message);
    res.status(500).json({ error: "error while sending message" });
  }
};

export const getMsg = async (req, res) => {
  let mess = [];
  const otherId = req.params.id;
  const thisId = req.user._id;
  const conv = await Conversation.findOne({
    participants: { $all: [otherId, thisId] },
  }).populate("messages");
  if (!conv) {
    res.send("No messages found");
  } else {
    res.send(
      conv.messages.map((data) => {
        return data.message;
      })
    );
  }
};
