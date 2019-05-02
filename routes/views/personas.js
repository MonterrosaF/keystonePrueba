var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'personas';
  locals.filters = {
    post: req.params.personas,
  };
  locals.data = {
    posts: [],
  };

  // Load the current post
  view.on('init', function (next) {

    var q = keystone.list('Personas').model.findOne({
      slug: locals.filters.post,
    });

    q.exec(function (err, result) {
      locals.data.post = result;
      next(err);
    });

  });

  // Render the view
  view.render('personas');
};