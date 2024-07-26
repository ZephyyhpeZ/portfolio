import Node from './nodes';
  const UNVISITED = '#252525';
  const VISITEDCOLOR = '#333334';
  const PATH = '#fbecec';
export const breathFirstSearch = (
  currentStartPos,
  currentEndPos,
  edgeX,
  edgeY
) => {
  const start = new Node(currentStartPos);
  const end = new Node(currentEndPos);
  let unvisited = new Set([start]);
  let visited = new Set();
  let paths = [];


  const animateSearch = () => {

      if (unvisited.size > 0) {
        let current = unvisited.values().next().value;
        unvisited.delete(current);
        if (
          current.coordinates[0] == end.coordinates[0] &&
          current.coordinates[1] == end.coordinates[1]
        ) {
          while (current !== null) {
            paths.push(current.coordinates);
            current = current.parent;
          }
          let index = 0;
          while (paths.length > index) {
            document.querySelector(
              `[data-coordinates="${paths[index][0]},${paths[index][1]}"]`
            ).style.backgroundColor = PATH;
            index += 1;
          }

          return true;
        }
        const neighbours = [];
        if (current.coordinates[1] < edgeY - 1) {
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
        if (current.coordinates[0] < edgeX - 1) {
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
            !Array.from(unvisited).some((node) => node.equals(neighbour)) &&
            !Array.from(visited).some((node) => node.equals(neighbour))
          ) {
            neighbour.parent = current;
            document.querySelector(
              `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
            ).style.backgroundColor = UNVISITED;

            unvisited.add(neighbour);
          }
        }

        document.querySelector(
          `[data-coordinates="${current.coordinates[0]},${current.coordinates[1]}"]`
        ).style.backgroundColor = VISITEDCOLOR;

        visited.add(current);
        requestAnimationFrame(animateSearch);
      }
  };
  requestAnimationFrame(animateSearch);
};

export const ASTAR = (currentStartPos, currentEndPos, edgeX, edgeY) => {
  const start = new Node(currentStartPos);
  const end = new Node(currentEndPos);
  let unvisited = new Set([start]);
  let visited = new Set();
  let paths = [];

  let iteration = 0;
  const animateSearch = () => {
    if (unvisited.size > 0) {
       let current = [...unvisited].reduce((minNode, node) =>
         node.f < minNode.f ? node : minNode
       );
      unvisited.delete(current);
      visited.add(current);
      if (
        current.coordinates[0] == end.coordinates[0] &&
        current.coordinates[1] == end.coordinates[1]
      ) {
        while (current !== null) {
          paths.push(current.coordinates);
          current = current.parent;
        }
        let index = 0;
        while (paths.length > index) {
 
             document.querySelector(
               `[data-coordinates="${paths[index][0]},${paths[index][1]}"]`
             ).style.backgroundColor = PATH;
          index += 1;
        }

        return true;

      }
      const neighbours = [];
      if (current.coordinates[1] < edgeY - 1) {
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
      if (current.coordinates[0] < edgeX - 1) {
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
          !Array.from(unvisited).some((node) => node.equals(neighbour))
          
        ) {
          const tentativeG = current.g + 1; // Assuming each step has a cost of 1
          if (
            !Array.from(visited).some((node) => node.equals(neighbour)) ||
            tentativeG < neighbour.g
          ) {
            neighbour.parent = current;
            neighbour.g = tentativeG;
            neighbour.h = neighbour.manhattan(end);
            neighbour.f = neighbour.g + neighbour.h;
            document.querySelector(
              `[data-coordinates="${neighbour.coordinates[0]},${neighbour.coordinates[1]}"]`
            ).style.backgroundColor = UNVISITED;
            unvisited.add(neighbour);
          }
        }
      }
      document.querySelector(
        `[data-coordinates="${current.coordinates[0]},${current.coordinates[1]}"]`
      ).style.backgroundColor = VISITEDCOLOR;

      iteration += 1;
      requestAnimationFrame(animateSearch);
    }
  };
  requestAnimationFrame(animateSearch);
};

