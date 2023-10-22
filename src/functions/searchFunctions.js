import Node from './nodes';
import Queue from 'queue';

export const breathFirstSearch = (
  currentStartPos,
  currentEndPos,
  edgeX,
  edgeY
) => {
  const start = new Node(currentStartPos);
  const end = new Node(currentEndPos);
  let unvisited = [];
  let visited = [];
  let paths = [];
  let unvisitedPaths = [];
  let visitedPaths = [];
  unvisited.push(start);
  let red = 255;
  let green = 255;
  let blue = 255;
  let darknessLevel = 0;
  let iteration = 0
  while (unvisited.length > 0  ) {
    let current = unvisited.shift();
    // console.log("current",current.coordinates);
    // console.log("end",end.coordinates);
    if(current.coordinates[0] == "33" && current.coordinates[1] == "14"){
      console.log(current);
      console.log("end",end[0], end[1]);
      console.log(end);
    }
    if (
      current.coordinates[0] == end.coordinates[0] &&
      current.coordinates[1] == end.coordinates[1]
    ) {
      while (current !== null) {
        paths.push(current.coordinates);
        current = current.parent;
        
      }
      console.log(current);
      visited.forEach((visite) => visitedPaths.push(visite));
      unvisited.forEach((unvisite) => unvisitedPaths.push(unvisite));

      return [paths, unvisitedPaths, visitedPaths];
    }
    const neighbours = [];
    if (current.coordinates[1] < edgeY-1) {
      const neighbour = new Node(current.nodeDown());
      const isWall =
        document
          .querySelector(
            `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
          )
          .getAttribute('data-state') == 'wall';
      if (!isWall) {
        neighbours.push(neighbour);
      }
    }
    if (current.coordinates[1] > 0) {
      const neighbour = new Node(current.nodeUp());
      const isWall =
        document
          .querySelector(
            `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
          )
          .getAttribute('data-state') == 'wall';
      if (!isWall) {
        neighbours.push(neighbour);
      }
    }
    if (current.coordinates[0] < edgeX-1) {
      const neighbour = new Node(current.nodeRight());
      const isWall =
        document
          .querySelector(
            `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
          )
          .getAttribute('data-state') == 'wall';
      if (!isWall) {
        neighbours.push(neighbour);
      }
    }
    if (current.coordinates[0] > 0) {
      const neighbour = new Node(current.nodeLeft());
      const isWall =
        document
          .querySelector(
            `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
          )
          .getAttribute('data-state') == 'wall';
      if (!isWall) {
        neighbours.push(neighbour);
      }
    }
    
    for (const neighbour of neighbours) {
     

      if (
        !unvisited.find((item) => {
        return item.coordinates[0] == neighbour.coordinates[0] &&
          item.coordinates[1] == neighbour.coordinates[1]
          ? true
          : false;
      }) &&
        !visited.find((item) => {
          return item.coordinates[0] == neighbour.coordinates[0] &&
            item.coordinates[1] == neighbour.coordinates[1]
            ? true
            : false;
        })
      ) {
        neighbour.parent = current;
        unvisited.push(neighbour);
      }
    }
    document.querySelector(
      `[data-coordinates="${current.coordinates[0]},${current.coordinates[1]}"]`
    ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    iteration += 1
    visited.push(current);
    green -= 0.2;
    blue -= 0.5;
    // console.log("visited",visited);
    // console.log("unvisited",unvisited);
  }
  // console.log([paths, visitedPaths, unvisitedPaths]);
};
