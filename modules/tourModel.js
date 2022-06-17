const mongoose = require('mongoose');
const tour = new mongoose.Schema({
  indicator: {
    id: { type: String, default: 'SP.POP.TOTL' },
    value: { type: String, default: 'Population, total' },
  },
  country: {
    id: { type: String, default: 'CN' },
    value: {
      type: String,
      required: [true, 'Country is must'],
      default: 'China',
    },
  },
  countryiso3code: { type: String, default: 'CN' },
  date: { type: Date, default: new Date().getFullYear() },
  unit: { type: String, default: ' ', trim: true },
  obs_status: { type: String },
  decimal: { type: Number },
});

const TourModel = mongoose.model('tours', tour);

module.exports = TourModel;
