const mongoose = require('mongoose');

const TestCoverageSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true
  },
  totalTCs: {
    type: Number ,
    required: true
  },
  automatedTCs: {
    type: Number,
    required: true
  },
  partialAutomatedTCs: {
    type: Number,
  },
  notAutomatableTCs: {
    type: Number,
  },
  notInScopeTCs: {
    type: Number
  },
  notAnalyzedTCs: {
    type: Number,
  },
  currentPercentage: {
    type: Number
  }
});

module.exports = TestCoverage = mongoose.model('testcoverage', TestCoverageSchema);