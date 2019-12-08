/**
 * This is an implementation of undirected graph
 * using adjacency list 
 */

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(originVertex, destinationVertex) {
        if (this.adjacencyList[originVertex]) {
            this.adjacencyList[originVertex].push(destinationVertex);
        }
        if (this.adjacencyList[destinationVertex]) {
            this.adjacencyList[destinationVertex].push(originVertex);
        }
    }
    removedEdge(originVertex, destinationVertex) {
        if (this.adjacencyList[originVertex]) {
            this.adjacencyList[originVertex] = this.adjacencyList[originVertex]
                .filter(vertex => vertex !== destinationVertex);
        }
        if (this.adjacencyList[destinationVertex]) {
            this.adjacencyList[destinationVertex] = this.adjacencyList[destinationVertex]
                .filter(vertex => vertex !== originVertex);
        }
    }
    removeVertex(vertex) {
        // if (this.adjacencyList[vertex]) {
        //     delete this.adjacencyList[vertex]
        // }
        // for (key in this.adjacencyList) {
        //     this.adjacencyList[key] = this.adjacencyList[key]
        //         .filter(v => v !== vertex)
        // }
        for (v of this.adjacencyList[vertex]) {
            this.removedEdge(vertex, v);
        }
        delete this.adjacencyList[vertex]
    }
}