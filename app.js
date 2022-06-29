const container = '.container';
const texts = [
    'Vue.js', 'React', 'Angular',
    'Svelte', 'Nuxt', 'Next',
    'Ember.js', 'Backbone', 'Express',
    'Laravel', 'Django',
];
const options = {
    radius: 300,
    maxSeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
};

TagCloud(container, texts, options);