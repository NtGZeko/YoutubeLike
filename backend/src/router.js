const express = require("express");

const {
  AdvencedChannelsController,
  CategoryController,
  ChannelsController,
  ContentsController,
  UsersController,
  ChannelsAndContentsController,
  UsersHasChannelsController,
} = require("./controllers");

const router = express.Router();

router.get("/users", UsersController.browse);
router.get("/users/channels", UsersHasChannelsController.browse);
router.get("/users/:id", UsersController.read);
router.put("/users/:id", UsersController.edit);
router.post("/users", UsersController.add);
router.delete("/users/:id", UsersController.delete);

router.get("/category", CategoryController.browse);
router.get("/category/:id", CategoryController.read);
router.put("/category/:id", CategoryController.edit);
router.post("/category", CategoryController.add);
router.delete("/category/:id", CategoryController.delete);

router.get("/channels", ChannelsController.browse);
router.get("/channels/contents", ChannelsAndContentsController.browse);
router.get("/channels/:id", ChannelsController.read);
router.put("/channels/:id", ChannelsController.edit);
router.post("/channels", ChannelsController.add);
router.delete("/channels/:id", ChannelsController.delete);

router.get("/contents", ContentsController.browse);
router.get("/contents/:id", ContentsController.read);
router.put("/contents/:id", ContentsController.edit);
router.post("/contents", ContentsController.add);
router.delete("/contents/:id", ContentsController.delete);

router.get("/channels/contents", AdvencedChannelsController.browse);
router.get("/channels/contents/:id", ContentsController.read);
module.exports = router;
