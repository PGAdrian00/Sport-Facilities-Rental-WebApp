const SportFacilitiesDb = require('../models').SportFacility;
const UserDb = require('../models').User;
const SportFacilitiesAvailabilityDb =
  require('../models').SportFacilityAvailability;

const controller = {
  getAll: (req, res) => {
    SportFacilitiesDb.findAll({
      include: [{ model: UserDb }, { model: SportFacilitiesAvailabilityDb }],
    })
      .then((facilities) => {
        res.status(200).send(facilities);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Server error!' });
      });
  },

  getById: async (req, res) => {
    try {
      const facility = await SportFacilitiesDb.findByPk(req.params.id, {
        include: [{ model: UserDb }, { model: SportFacilitiesAvailabilityDb }],
      });
      if (facility) {
        res.status(200).send(facility);
      } else {
        res.status(404).send({ message: 'Facility not found!' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server error' });
    }
  },

  add: async (req, res) => {
    const {
      name,
      description,
      sport_type,
      location,
      address,
      is_indoor,
      has_night_lights,
      price_per_hour,
      image_source,
    } = req.body;
    const id = req.params.id;
    try {
      const user = await UserDb.findByPk(id);
      if (user && user.role == 'facility_owner') {
        // res.status(200).send(user);
        let errors = [];
         if (!name) {
    errors.push('Name is required');
    }
    if (!description) {
    errors.push('Description is required');
    }
    if (!sport_type) {
    errors.push('Sport type is required');
    }
    if (!location) {
    errors.push('Location is required');
    }
    if (!address) {
    errors.push('Address is required');
    }
    if (is_indoor === undefined) {
    errors.push('Indoor/Outdoor is required');
    }
    if (has_night_lights === undefined) {
    errors.push('Night lights availability is required');
    }
    if (!price_per_hour) {
    errors.push('Price per hour is required');
    }
     if (errors.length > 0) {
     return res.status(400).json({ errors });}
     else{

        const facility = {
          name,
          description,
          sport_type,
          location,
          address,
          is_indoor,
          has_night_lights,
          price_per_hour,
          image_source,
          facility_owner_id: id,
        };
        const newFacility = await SportFacilitiesDb.create(facility);
        res.status(200).send(newFacility);
      }
    }} catch (error) {
      console.log(error);
      res.status(500).send('Eroare server');
    }
    
  },

  updateById: async (req, res) => {
    const id  = req.params.id;
    console.log(id);
    const {
      name,
      description,
      sport_type,
      location,
      address,
      is_indoor,
      has_night_lights,
      price_per_hour,
      image_source
    } = req.body;


    try{
        const sportFacility = await SportFacilitiesDb.findOne({
            where:{
                id: id,
            },
        });

        if(sportFacility){

            sportFacility.name = name;
            sportFacility.description = description;
            sportFacility.sport_type = sport_type;
            sportFacility.location = location;
            sportFacility.address = address;
            sportFacility.is_indoor = is_indoor;
            sportFacility.has_night_lights = has_night_lights;
            sportFacility.price_per_hour = price_per_hour;
            sportFacility.image_source = image_source;

            await sportFacility.save();
            res.status(200).send(sportFacility);
        }
    } catch(err){
        return res.status(500).send("Eroare la actualizare!");
    }


  },

  deleteById: (req, res) => {
    const id = req.params.id;
    SportFacilitiesDb.destroy({ where: { id: id } })
      .then((result) => {
        if (result) {
          res.status(200).send({
            message: `Sport facility with ${id} has been successfully deleted!`,
          });
        } else {
          res
            .status(404)
            .send({ message: `Sport facility with ${id} not found!` });
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .send({ message: `Error deleting sport facility with id ${id}` });
      });
  },
};

module.exports = controller;
