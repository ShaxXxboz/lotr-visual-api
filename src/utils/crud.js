export const getOne = model => async (req, res) => {
  try {
    const doc = await model
      .getOne({ _id: req.params.id })
      .lean()
      .exec();

    if (!doc) {
      return res.status(404).end();
    }

    res.status(200).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getMany = model => async (req, res) => {
  try {
    const doc = await model
      .find()
      .lean()
      .exec();

    res.status(200).json({ body: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create(req.body);
    if (!doc) {
      res.status(400).end();
    }
    res.status(201).json({ body: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const updateOne = model => async (req, res) => {
  try {
    const updatedDoc = await model
      .findOneAndUpdate({ _id: req.params.id }, res.body, { new: true })
      .lean()
      .exec();

    if (!updatedDoc) {
      res.status(400).end();
    }

    res.status(201).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const removeOne = model => async (req, res) => {
  try {
    const removedDoc = await model.findAndRemove({ _id: req.params.id });

    if (!removedDoc) {
      res.status(400).end();
    }

    res.status(201).json({ data: removedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
});
