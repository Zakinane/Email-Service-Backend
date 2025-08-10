const Receiver = require("../models/receiverModel");
const { sendEmail } = require("../services/emailService");

exports.send = async (req, res) => {
  try {
    const newReceiver = new Receiver({
      id: (await Receiver.countDocuments()) + 1,
      name: req.body.name,
      email: req.body.email,
    });
    const savedReceiver = await newReceiver.save();
    console.log("User saved")
    await sendEmail(newReceiver.email, "Hey", "Heyho");
    res.status(201).json({message: "User saved"});
    console.log("email sent");
  } catch (err) {
    res.status(500).send("Error when adding : " + err.message);
  }
};
