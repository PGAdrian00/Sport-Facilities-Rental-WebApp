const StatusDb = require('../models').FacilityStatus;

const controller = {
  getAll: async (req, res) => {
    await StatusDb.findAll().then((statuses) => {
      if (statuses.length !== 0) {
        res.status(200).send(statuses);
      } else {
        res.status(404).send({ message: 'No statuses found!' });
      }
    });
  },

  getById: async (req, res) => {
    try {
      const status = await StatusDb.findOne({
        where: {
          SportFacilityId: req.params.id,
        },
      });
      if (status) {
        res.status(200).send(status);
      } else {
        res.status(404).send('Not found');
      }
    } catch (err) {
      res.status(500).send('Server error!');
    }
  },

  add: async (req, res) => {
    const id = req.params.id;
    const { numberOfBalls, condition } = req.body;

    let errors = [];
    if (!numberOfBalls) {
      errors.push('nr balls not inserted');
    }
    if (!condition) {
      errors.push('condition not inserted');
    }
    if (errors.length > 0) {
      res.status(400).send(errors);
    }

    try {
      const newStatus = await StatusDb.create({
        numberOfBalls,
        condition,
        SportFacilityId: id,
      });
      res.status(201).send(newStatus);
    } catch (err) {
      console.log(err);
      res.status(500).send({ message: 'Server error!' });
    }
  },

  updateById: async (req, res) => {
    const id = req.params.id;
    const { numberOfBalls, condition } = req.body;
    try {
      const status = await StatusDb.findByPk(id);
      if (status) {
        status.numberOfBalls = numberOfBalls;
        status.condition = condition;
        await status.save();
        res.status(200).send(status);
      }
    } catch (err) {
      res.status(500).send('Eroare la actualziare');
    }
  },
};

module.exports = controller;
