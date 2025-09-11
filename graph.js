// class Graph {
//     constructor() {
//         this.adjacencyList = {}
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = new Set()
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjacencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if (!this.adjacencyList[vertex2]) {
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }

//     display() {
//         for (let vertex in this.adjacencyList) {
//             console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//         }
//     }

//     hasEdge(vertex1, vertex2) {
//         return (
//             this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1, vertex2) {
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             return
//         }
//         for (let adjacentVertex of this.adjacencyList[vertex]) {
//             this.removeEdge(vertex, adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     BFS(startingVertex) {
//         let visited = {};
//         let queue = [];

//         visited[startingVertex] = true;
//         queue.push(startingVertex);

//         while (queue.length > 0) {
//             const vertex = queue[0];
//             console.log(vertex);
//             queue.shift();

//             this.adjacencyList[vertex].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }
//             });
//         }

//         for (let vertex in this.adjacencyList) {
//             if (!visited[vertex]) {
//                 console.log(vertex);
//                 visited[vertex] = true;
//             }
//         }
//     }

//     // Depth-First Search (DFS)
//     dfs(startingVertex) {
//         let allValues = new Set(Object.keys(this.adjacencyList));
//         let visited = {};

//         for (let vertex of allValues) {
//             visited[vertex] = false;
//         }

//         const dfsHelper = (vertex) => {
//             visited[vertex] = true;
//             console.log(vertex);
//             allValues.delete(vertex);

//             for (let neighbor of this.adjacencyList[vertex]) {
//                 if (!visited[neighbor]) {
//                     dfsHelper(neighbor)
//                 }
//             }
//         }

//         dfsHelper(startingVertex);

//         for (let vertex of allValues) {
//             if (!visited[vertex]) {
//                 dfsHelper(vertex);
//             }
//         }
//     }

// }

// const graph = new Graph()

// graph.addVertex(35)
// graph.addVertex(10)
// graph.addVertex(30)
// graph.addVertex(60);
// graph.addVertex(5);
// graph.addVertex(20);

// graph.addEdge(35,10)
// graph.addEdge(30,10)
// graph.addEdge(35,30);
// graph.addEdge(5,20);
// graph.display()

// console.log('BFS__________');
// graph.BFS(10)

// console.log('DFS__________');
// graph.dfs(10)

// graph.display()

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    } else {
      console.log("Vertex already exists in the graph.");
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      console.log("One or more vertices do not exist in the graph.");
    } else {
      this.adjacencyList.get(vertex1).push(vertex2);

      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  printGraph() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(",")}`);
    }
  }

  bfs(startingNode) {
    const visited = new Set();
    const queue = [];
    const result = [];

    visited.add(startingNode);
    queue.push(startingNode);

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
  
  bfsShortestPath(start, end) {
    let queue = [[start]],
      visited = new Set([start]);
    while (queue.length) {
      let path = queue.shift(),
        node = path.slice(-1)[0];
      if (node === end) return path;
      
      for (let neighbor of this.adjList.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
    return null;
  }
}

// Create a graph
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("M");
graph.addVertex("N");

// Add edges
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("M", "N");
graph.addEdge("N", "M");

// Print the graph
console.log("Graph:");
graph.printGraph();

// Perform BFS starting from vertex 'A'
//   console.log("\nBFS traversal starting from vertex 'A':");
//   console.log(graph.bfs('A'));
