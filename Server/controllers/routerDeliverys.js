const newDelivery = (req, res) => res.status(201).send({success: true})

const deleteDelivery = (req, res) => {
  res.send({ status: 'OK', message: 'usuario deleted' });
  console.log(
    `aca se tiene que eliminar el siguiente usuario: ${req.params.id}`,
  );
};

const updateDelivery = (req, res) => {
  res.send({ status: 'OK', message: 'user updated' });
  console.log(
    `aca se tiene que actualizar el siguiente usuario: ${req.params.id}`,
  );
};
const getDeliverys = (req, res) => {
  res.send({ status: 'OK', data: [] });
};
const getDelivery = (req, res) => {
  res.send({ status: 'OK', message: `el usuario es ${req.params.id}` });
  console.log(
    `se trajo la informacion del siguiente usuario: ${req.params.id}`,
  );
};


module.exports= {
    newDelivery,
     updateDelivery,
  deleteDelivery,
  getDeliverys,
  getDelivery,
}