
const getHome = async (req, res) => {
    return res.status(200)
      .send(`
      <!DOCTYPE html>
        <html>
        <body>
          <h1><b>TP Final 2021</b></h1><br>
          <img src="https://media.giphy.com/media/xT0xeKFuD2f82C1VPG/giphy.gif" alt="Girl in a jacket" ><br>
          <audio controls autoplay>
            <source src="vamos.mpeg" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>
        </body>
        </html>
      `);
  };

  module.exports = {
    getHome
  };
  