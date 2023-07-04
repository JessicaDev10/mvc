import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
       nome: { type: String, required: true},
      categoria: { type: String, required: true},
      carrochef: { type: String, required: true},
      tipoPedido: { type: String, r            : true},
      preços: { type: Number, required: true},
      Endereço: { type: Object, required: true}
        
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;


