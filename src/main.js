
var Vue = require("vue");

var app = module.exports = new Vue({
  el: '#app',

  data: {
    specials: [
      {
        title: "Strength",
        perks: [
          {
            level: 1,
            title: "Iron Fist"
          },
          {
            level: 2,
            title: "Big Leagues"
          },
          {
            level: 3,
            title: "Armorer"
          },
          {
            level: 4,
            title: "Blacksmith"
          },
          {
            level: 5,
            title: "Heavy Gunner"
          },
          {
            level: 6,
            title: "Strong Back"
          }
        ]
      },
      {
        title: "Perception",
        perks: [
          {
            level: 1,
            title: "Pickpocket"
          },
          {
            level: 2,
            title: "Rifleman"
          },
          {
            level: 3,
            title: "Awareness"
          },
          {
            level: 4,
            title: "Locksmith"
          },
          {
            level: 5,
            title: "Demolition Expert"
          },
          {
            level: 6,
            title: "Night Person"
          }
        ]
      }
    ]
  },
});
