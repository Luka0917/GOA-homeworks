class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
    }

    print(){
        for(const [vertex, neighbors] of Object.entries(this.adjacencyList)){
            console.log(`${vertex} -> ${neighbors.join(', ')}`);
        }
    }

    printMatrix(){
        const nodes = Object.keys(this.adjacencyList);
        console.log(`   ${nodes.join('  ')}`);

        for(let i = 0 ; i < nodes.length; i++){
            const rows = [];
            for(let x = 0; x < nodes.length; x++){
                if(this.adjacencyList[nodes[i]].includes(nodes[x])){
                    rows.push(1)
                }else{
                    rows.push(0)
                };
            }
            console.log(`${nodes[i]}  ${rows.join('  ')}`);
        }
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

graph.print();
console.log();
graph.printMatrix();