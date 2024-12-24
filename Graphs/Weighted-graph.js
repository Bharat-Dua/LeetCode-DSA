class WeightedGraph {
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
  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
      this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
    }
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 1);
graph.addEdge("B", "C", 4);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "E", 13);
graph.addEdge("E", "F", 34);
