const getHome = async (req, res) => {
    return res.status(200).send(`<b>TP Final 2021</b>`);
  };

  module.exports = {
    getHome
  };
  