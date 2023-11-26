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

    requestAnimationFrame(animateSearch);
  };
  requestAnimationFrame(animateSearch);
};



