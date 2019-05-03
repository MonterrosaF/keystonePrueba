var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'personas';
  locals.filters = {
      persona: req.params.persona
  }
  locals.data = {
      personas:[]
  }

  view.on('init', function(next){
    var q = keystone.list('Personas').model.findOne({
        slug: locals.filters.persona
    });

    q.exec(function(err, result){
        locals.data.persona = result;
        next(err);
    });
  });
  
  view.render('persona');
};