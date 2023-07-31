import { Router } from "express";
import Message from "../models/Message";
import Project from "../models/Project";

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/skills", (req, res) => {
  res.render("skills");
});

router.get("/projects", async (req, res) => {
  const projects = await Project.find().lean();

  res.render("projects", { projects: projects });
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/messages/add", async (req, res) => {
  const message = Message(req.body);
  const messageSaved = await message.save();
  console.log(messageSaved);
  res.redirect("../contact");
});

export default router;
