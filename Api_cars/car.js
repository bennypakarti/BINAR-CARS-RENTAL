const cars = []

class Car {
  static records = cars;

  constructor(params) {
    this.id = this._generateId();
    this.plate = params.plate;
    this.manufacture = params.manufacture;
    this.model = params.model;
    this.image = params.image;
    this.rentPerDay = params.rentPerDay;
    this.capacity = params.capacity;
    this.description = params.description;
    this.transmission = params.transmission;
    this.available = params.available;
    this.type = params.type;
    this.year = params.year;
    this.options = params.options;
    this.specs = params.specs;
    this.availableAt = params.availableAt;

    // this.id = this._generateId();
    // this.title = params.title;
    // this.coverImage = params.coverImage;
    // this.synopsis = params.synopsis;
    // this.publisher = params.publisher;
    // this.author = params.author;
    // this.price = params.price;
  }

  _generateId() {
    // const lastRecordId =
    //   this.constructor.records[this.constructor.records - 1]?.id || 0;

    return cars.length + 1;
  }

  update(params) {
    const idx = this.constructor.records.findIndex((i) => i.id === this.id);

    params.plate && (this.plate = params.plate);
    params.manufacture && (this.manufacture = params.manufacture);
    params.model && (this.model = params.model);
    params.image && (this.image = params.image);
    params.rentPerDay && (this.rentPerDay = params.rentPerDay);
    params.capacity && (this.capacity = params.capacity);
    params.description && (this.description = params.description);
    params.transmission && (this.transmission = params.transmission);
    params.type && (this.type = params.type);
    params.year && (this.year = params.year);
    params.options && (this.options = params.options);
    params.specs && (this.specs = params.specs);
    params.availableAt && (this.availableAt = params.availableAt);

    this.constructor.records[idx] = this;

    return this;
  }

  delete() {
    this.constructor.records = this.constructor.records.filter(
      (i) => i.id !== this.id
    );
  }

  static create(params) {
    const car = new this(params);

    this.records.push(car);

    return car;
  }

  static find(id) {
    const car = this.records.find((i) => i.id === Number(id));
    if (!car) return null;

    return car;
  }

  static list() {
    return this.records;
  }
}

module.exports = Car;
