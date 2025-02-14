const express = require("express");

const friendsController = require("../controller/friends.controller");

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/", friendsController.getFriends);
//passed friendID to differenciate between friends
friendsRouter.get("//:friendId", friendsController.getFriend);

module.exports = friendsRouter;
