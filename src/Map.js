export default class Map {
  constructor() {
    this.lat = 4;
    this.lng = 5;
  }

  latlng = () => {
    return { lat: this.lat, lng: this.lng };
  };
  moveLeft = () => {
    this.lat = this.lat - 1;
    console.log("left", this.lat);
  };
  moveRight = () => {
    this.lat = this.lat + 1;
    console.log("right", this.lat);
  };
}
