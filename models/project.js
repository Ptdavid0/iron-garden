const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String},
  imageUrl: {type: String, default: ''},
  sourceCode: {type: String},
  authorId: { type: Schema.ObjectId, ref: 'User' }, // Pode ser trocado para um array de ObjectId (+ de 1 colaborador)
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;