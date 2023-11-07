const fs = require('fs');

//@desc Get all components
//@route GET /api/dp-qa/components

const getComponents = async (req, res) => {
    fs.readFile('config/productComponents.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    });
};


module.exports = { getComponents }