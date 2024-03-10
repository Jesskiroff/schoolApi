const router = require("express").Router();

router.use("/students", require("./students"));
router.use("/classes", require("./classes"));
router.use("/subjects", require("./subjects"));
router.use("/professors", require("./professors"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;