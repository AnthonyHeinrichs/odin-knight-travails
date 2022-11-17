import Node from "./board-node.js";
import { possibleMoves } from "./build-board.js";

// Initialize a Queue to manage the nodes that have yet to be visited
const queue = [];
// Initialize an array of values indicating whether we have already visited a node
const visited = [];

const breadthFirstSearch = (node, end) => {
  // Keep track of each visited node 
  visited.push(queue.shift());
  // Get each possible move
  let children = possibleMoves(JSON.parse(node.value));
  // Itterate over each possible move
  children.forEach((child) => {
    // Set previous node to current node
    child = { value: child, prev: node };
    // Check that the visited element is not equal to current child element
    if (!visited.some((el) => el.value === child.value)) {
      // If it is equal, push the child element to our queue
      queue.push(child);
    }
  });
  // If the user puts in the same start & end, just return current node
  if (node.value === Node(end).value) {
    return node;
  } else {
    // Else, we want to find the smallest path to end node through recursion
    return breadthFirstSearch(queue[0], end);
  }
};

const knightMoves = (start, end) => {
  /* Checking first if the requested square is outside of 8x8 board 
  and return a message*/
  if (start[0] > 8 || start[0] < 1) {
    return "This square does not exist on the board";
  }
  // Pushing start node to our queue
  queue.push(Node(start));
  // Getting visited node through bfs
  let path = breadthFirstSearch(queue[0], end);
  // Track the nodes we touched to get to end node and add them to an array
  const squaresTouched = [];
  squaresTouched.push(path.value);


  while (path.prev !== null) {
    // Getting the nodes value and adding back into squaresTouched
    squaresTouched.unshift(path.prev.value);
    // Setting path to previous node touched until it's null
    path = path.prev;
  }
  // Getting length of nodes touched to get to end and saving to a string variable
  let string = `You made it in ${squaresTouched.length} moves! Here's your path:`;
  // Showing each node value (square) touched to get to the end node
  squaresTouched.forEach( square => {
    string = string + `\n` + `${square}`;
  });
  return string;
};

console.log(knightMoves([2, 5], [1, 8]));
