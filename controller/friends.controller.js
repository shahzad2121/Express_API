const model = require("../models/friends.model");

function getFriends(req, res) {
  res.send(model);
}

function getFriend(req, res) {
  //divide request parameters with friendId
  //as it is divided on the basis of
  const friendId = Number(req.params.friendId);
  const friend = model[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend not found" });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "name is missing",
    });
  }
  // adding new friend with the help of .name
  // id will bne assigned automatically as the model length will be increased
  const newFriend = {
    name: req.body.name,
    id: model.length,
  };
  //this will push the friend to the model array
  model.push(newFriend);
  res.status(200).json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
