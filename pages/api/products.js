import initDB from "../../helpers/initDB";

initDB();

export default (req, res) => {
  res.statusCode = 200;
  res.json({ message: "Hello World" });
};
