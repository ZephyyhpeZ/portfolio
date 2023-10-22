class Node {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.parent = null;
  }

  nodeUp() {
    return [this.coordinates[0], this.coordinates[1] - 1];
  }

  nodeDown() {
    return [this.coordinates[0], this.coordinates[1] + 1];
  }

  nodeLeft() {
    return [this.coordinates[0] - 1, this.coordinates[1]];
  }

  nodeRight() {
    return [this.coordinates[0] + 1, this.coordinates[1]];
  }

  contains(other) {
    return (
      other.coordinates[0] === this.coordinates[0] &&
      other.coordinates[1] === this.coordinates[1]
    );
  }
}

export default Node;
