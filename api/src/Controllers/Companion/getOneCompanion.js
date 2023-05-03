const { Companion, CityTimeZone, CompanionShift } = require("../../db");
const bcrypt = require("bcrypt");

//Controlador para verificar login de un acompañante y llenar el perfil
const getOneCompanion = async (req, res) => {
  try {
    const { email } = req.body;
      let companion;
      companion = await Companion.findOne({ where: { email } ,  include: [{ model: CompanionShift ,  through: { attributes: [] }}]});
      rol = "Companion";
      if (companion && companion.isActive) {
        //Retorna un acompañante con todos sus datos (Sirve para cargar el perfil)
        const response = {
          ...companion.toJSON(),
          rol: rol,
        };
        return res.status(200).json(response);
        
      }
      if(companion && !companion.isActive){
        return  res.status(400).json("Cuenta inactiva comuniquese con el administrador");
      } else {
        return res.status(400).json("Los datos ingresados son incorrectos");
      }
  } catch (error) {
    res.status(404).json("El Acompañante no se encontro");
  }
};

module.exports = getOneCompanion;
