const model = require("../database/models/index");
const bcrypt = require('bcryptjs');

const getUsers = async (req, res) => {
  const users = await model.User.findAll({
    include: [{ model: model.Task, attributes: ["id", "name"] }],
  });
  return res.status(200).json({ users });
};

const addUser = async (req, res) => {
  const {userId} =req //para la relacional
  const data = req.body;
  data.password = bcrypt.hashSync(data.password, 8)
  const inserted = await model.User.create(data);
  inserted.password = "xxxxxxxxxxxx"
  return res.status(201).json({ inserted });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await model.User.destroy({ where: { id: id } });
  const users = await model.User.findAll();
  return res.status(200).json({ users });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updated = await model.User.update(data, { where: { id: id } });
  console.log(updated);
  const user = await model.User.findByPk(id);
  return res.status(200).json({ user });
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
};
