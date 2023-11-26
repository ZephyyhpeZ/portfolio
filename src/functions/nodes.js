class Node {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.parent = null;
    this.g = 0;
    this.h = 0;
    this.f = 0;
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
  manhattan(end) {
    return (
      Math.abs(this.coordinates[0] - end.coordinates[0]) +
      Math.abs(this.coordinates[1] - end.coordinates[1])
    );
  }
  euclidean(end) {
    const dx = this.coordinates[0] - end.coordinates[0];
    const dy = this.coordinates[1] - end.coordinates[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  equals(otherNode) {
    return (
      Array.isArray(otherNode.coordinates) &&
      this.coordinates.length === otherNode.coordinates.length &&
      this.coordinates.every(
        (value, index) => value === otherNode.coordinates[index]
      )
    );
  }
}

export default Node;
