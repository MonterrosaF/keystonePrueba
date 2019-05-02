var keystone = require('keystone');

var Personas = keystone.list('Personas');

/**
 * List Personas
 */
exports.list = function(req, res) {
  Personas.model.find(function(err, items) {

    if (err) return res.json({ err: err });

    res.json({
      personas: items
    });

  });
}

/**
 * Get Personas by ID
 */
exports.get = function(req, res) {
  Personas.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json('not found');

    res.json({
      personas: item
    });

  });
}


/**
 * Create a Personas
 */
exports.create = function(req, res) {

  var item = new Personas.model(),
    data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {

    if (err) return res.json({ error: err });

    res.json({
      personas: item
    });

  });
}

/**
 * Patch Personas by ID
 */
exports.update = function(req, res) {

  Personas.model.findById(req.params.id).exec(function(err, item) {

    if (err) return res.json({ err: err });
    if (!item) return res.json({ err: 'not found' });

    var data = (req.method == 'PUT') ? req.body : req.query;

    item.getUpdateHandler(req).process(data, function(err) {

      if (err) return res.json({ err: err });

      res.json({
        personas: item
      });

    });

  });
}

/**
 * Delete Personas by ID
 */
exports.remove = function(req, res) {
  Personas.model.findById(req.params.id).exec(function (err, item) {

    if (err) return res.json({ dberror: err });
    if (!item) return res.json('not found');

    item.remove(function (err) {
      if (err) return res.json({ dberror: err });

      return res.json({
        success: true
      });
    });

  });
}