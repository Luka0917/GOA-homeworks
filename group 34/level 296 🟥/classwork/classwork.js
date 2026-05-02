class Graph{
    constructor(isDirected = false){
        this.adjacencyList = {};
        this.isDirected = isDirected;
    }

    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = [];
        }
    }

    addEdge(node1, node2){
        if(!this.adjacencyList[node1]){
            this.addNode(node1);
        }
        if(!this.adjacencyList[node2]){
            this.addNode(node2);
        }

        this.adjacencyList[node1].push(node2);

        if(!this.isDirected){
            this.adjacencyList[node2].push(node1);
        }
    }

    removeEdge(node1, node2){
        if(this.adjacencyList[node1]){
            this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2);
        }
        if(!this.isDirected && this.adjacencyList[node2]){
            this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1);
        }
    }

    removeNode(node){
        if(!this.adjacencyList[node]) return;

        for(let idk of this.adjacencyList[node]){
            this.removeEdge(node, idk);
        }

        delete this.adjacencyList[node];
    }

    print(){
        for(const [node, neighbors] of Object.entries(this.adjacencyList)){
            console.log(`${node} -> ${neighbors.join(', ')}`);
        }
    }

    dfs(root){
        const result = [];
        const toVisit = [];
        toVisit.push(root);

        
    }
}

const graph = new Graph(true)

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

graph.dfs('A');