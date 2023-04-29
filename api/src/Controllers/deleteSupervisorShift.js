const { Supervisor } = require("../db");
const deleteCompanionShift = async (req, res) => {
  try {
    const { id, idShift } = req.body;
    const supervisor = await Supervisor.findOne({ where: { id: id } });
    if (supervisor) {
      supervisor.removeSupervisorShift(idShift);
      res.status(200).json("Turno eliminado");
    } else {
      res.status(400).json("el Supervisor no existe");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = deleteCompanionShift;
