import express from "express";
import { addUser, deleteUser, editUser, getAllUsers, getUser } from "../controller/user.controller.js";


const router = express.Router();
router.
route("/add")
.post(addUser)

router.
route("/all")
.get(getAllUsers)

router.
route("/:uid")
.get(getUser)
.put(editUser)
.delete(deleteUser)

export default router;