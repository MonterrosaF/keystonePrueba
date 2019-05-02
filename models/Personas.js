var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Personas Model
 * ==========
 */
var Personas = new keystone.List('Personas', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Personas.add({
  name: { type: Types.Name, required: true },
  height: { type: Types.Number },
  mass: { type: Types.Number },
  gender: { type: String },
});


/**
 * Registration
 */
Personas.defaultColumns = 'name, height, mass, gender';
Personas.register();