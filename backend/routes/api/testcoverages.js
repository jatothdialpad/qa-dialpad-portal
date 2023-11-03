const express = require('express');
const router = express.Router();

// Load TestCoverage model
const TestCoverage = require('../../models/TestCoverage');

// @route GET api/testcoverages/test
// @description testing the testcoverage route
// @access Public
router.get('/test', (req, res) => res.send('testcoverage route testing!'));

// @route GET api/testcoverages/
// @description Get all projects test coverage
// @access Public
router.get('/', (req, res) => {
    TestCoverage.find()
    .then((testcoverages) => res.json(testcoverages))
    .catch((err) => res.status(404).json({ notestcoveragesfound: 'No TestCoverages found' }));
});

/*// @route GET api/testcoverages/:projectName
// @description Get single testcoverage by id
// @access Public
router.get('/:projectName', (req, res) => {
  TestCoverage.findfindById(req.params.id)
    .then((testcoverage) => res.json(testcoverage))
    .catch((err) => res.status(404).json({ notestcoveragefound: 'No TestCoverage found' }));
});*/

module.exports = router;