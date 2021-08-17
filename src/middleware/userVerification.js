const model = require("../database/models/index");

const check = async (req, res, next) => {

  if (!req.body.username) {
    return res.status(401).send({
      message: "Sin Datos",
    });
  }

  try {

      await model.User.count({ where: {username: req.body.username} }).then(function(result) {
        console.log(result)
        if (result > 0) {
          return res.status(401).send({
            message: "Usuario existente",
          });
        }
        next();
      })

      
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Error interno del servidor" });
  }
};

const userVerification = { check };

module.exports = userVerification;
