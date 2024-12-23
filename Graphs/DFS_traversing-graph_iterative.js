class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // add edge
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  dfsIterative(start) {
    const visitedList = {};
    const stack = [start];
    const result = [];
    visitedList[start] = true;
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbour) => {
        if (!visitedList[neighbour]) {
          visitedList[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.dfsIterative("A");
