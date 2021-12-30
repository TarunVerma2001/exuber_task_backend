const Data = require('./../models/dataModel');

exports.getAllData = async (req, res, next) => {
  try {
    const data = await Data.find();

    res.status(200).json({
      status: 'success',
      results: data.length,
      data: {
        products: data,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.addData = async (req, res, next) => {
  try {
    const data = await Data.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        product: data,
      },
    });
  } catch (err) {
    next(err);
  }
};
