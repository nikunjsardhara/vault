const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const userController = require("../controllers/userController");
const postController = require("../controllers/postController");

const roleController = require("../controllers/roleController");
const travelplansController = require("../controllers/travelplansController");
const profilesController = require("../controllers/profilesController");

//_______________________________ user management_______________________________

router.route("/user/create").post(catchErrors(userController.create));
router.route("/user/read/:id").get(catchErrors(userController.read));
router.route("/user/update/:id").patch(catchErrors(userController.update));
router.route("/user/delete/:id").delete(catchErrors(userController.delete));
router.route("/user/search").get(catchErrors(userController.search));
router.route("/user/list").get(catchErrors(userController.list));

router
  .route("/user/password-update/:id")
  .patch(catchErrors(userController.updatePassword));
//list of users ends here

//_____________________________________ API for clients __________________________
router.route("/post/create").post(catchErrors(postController.create));
router.route("/post/read/:id").get(catchErrors(postController.read));
router.route("/post/update/:id").patch(catchErrors(postController.update));
router.route("/post/delete/:id").delete(catchErrors(postController.delete));
router.route("/post/search").get(catchErrors(postController.search));
router.route("/post/list").get(catchErrors(postController.list));

//_____________________________________ API for roles ___________________________
router.route("/role/create").post(catchErrors(roleController.create));
router.route("/role/read/:id").get(catchErrors(roleController.read));
router.route("/role/update/:id").patch(catchErrors(roleController.update));
router.route("/role/delete/:id").delete(catchErrors(roleController.delete));
router.route("/role/search").get(catchErrors(roleController.search));
router.route("/role/list").get(catchErrors(roleController.list));

//_____________________________________ API for Travelplans ___________________________
router.route("/travelplans/create").post(catchErrors(travelplansController.create));
router.route("/travelplans/read/:id").get(catchErrors(travelplansController.read));
router.route("/travelplans/update/:id").patch(catchErrors(travelplansController.update));
router.route("/travelplans/delete/:id").delete(catchErrors(travelplansController.delete));
router.route("/travelplans/search").get(catchErrors(travelplansController.search));
router.route("/travelplans/list").get(catchErrors(travelplansController.list));

//_____________________________________ API for profiles ___________________________
router.route("/profile/create").post(catchErrors(profilesController.create));
router.route("/profile/read/:id").get(catchErrors(profilesController.read));
router
  .route("/profile/update/:id")
  .patch(catchErrors(profilesController.update));
router
  .route("/profile/delete/:id")
  .delete(catchErrors(profilesController.delete));
router.route("/profile/search").get(catchErrors(profilesController.search));
router.route("/profile/list").get(catchErrors(profilesController.list));

module.exports = router;
