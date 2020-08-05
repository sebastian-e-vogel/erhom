
const newClient = async (req, res) => {
  try {
    console.log(req.body)
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

const deleteClient = async (req, res) => {
  try {
    res.status(201).send({ success: true });
  } catch (error) {
    res.status(500).send({ status: "ERROR", message: error.message });
  }
};

module.exports = {
  newClient,
  deleteClient,
};
