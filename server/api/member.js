const router = require('express').Router();
const memberModel = require('./_model/memberModel');
const { moderCall, modelCall } = require('../../util/lib');

// MVC
router.get('/duplicateCheck/:field/:value', async (req, res) => {
  const result = await modelCall(memberModel.duplicateCheck, req.params);
  console.log("중복 결과 >>> " + result.cnt);
  res.json(result);
});

module.exports = router;