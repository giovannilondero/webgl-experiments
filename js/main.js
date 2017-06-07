import experiments from './experiments.js'

const mainTitle = document.getElementById('main-title');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Get random expertiment
const experiments_fn = Object.keys(experiments);
const random_experiment = experiments_fn[Math.round(Math.random() * (experiments_fn.length - 1))];

// Set title
mainTitle.textContent = (title => {
  title = title.toLowerCase().replace(/[^a-z]/g, ' ');
  return `${title[0].toUpperCase()}${title.slice(1)}`;
})(random_experiment);

// Call random experiment
experiments[random_experiment](context);