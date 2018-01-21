const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, min: 0, require: true }
});

const debitSchema = mongoose.Schema({
  name: { type: String, required: true},
  value: { type: Number, min: 0, required: [true, "Valor é obrigatorio"] },
  status: { type: String, required: false, uppercase: true,
    enum: ["PAGO", "PENDENTE", "AGENDADO"] }
});

const billingCycleSchema = mongoose.Schema({
  name: { type: String, required: true},
  month: { type: Number, min: 1, max: 12, required: true},
  year: { type: Number, min: 1970, max: 2100, required: true},
  credits: [creditSchema],
  debits: [debitSchema]
});

module.exports = restful.model('BillingCycle', billingCycleSchema);