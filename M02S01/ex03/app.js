var Car = {
  make: '',
  color: '',
  wheels: 4,
  speed: 0,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed = this.speed + 1;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed = this.speed - 1;

    this.displaySpeed();
  },
};
