function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(quantity){
    var randomNumbers = [];
    var nextRandom = 0;
    var contains = -1;
  for(var i = 0; i< quantity; i++){
    do{
        nextRandom =  getRandomInt(1,quantity*2);   
        contains = randomNumbers.indexOf(nextRandom);   
    }while(contains !== -1)
    randomNumbers.push(nextRandom);
  }
  return randomNumbers;
}

function generateGraph(quantity){
    var nodes = generateNodes(quantity);
    return generateEdges(nodes);
}

function generateEdges(nodes){
    var edges = [];
    for(var i = 0; i< nodes.length - 1; i++){
          edges.push({
              from: nodes[i].id,
              to: nodes[i+1].id
          });  
    }
    return {nodes:nodes, edges:edges};
}


function generateNodes(quantity){
    var nodes = [];
    var nodesNumbersArray = generateRandomArray(quantity); 
    nodesNumbersArray = nodesNumbersArray.sort(function(a,b){return a - b;})
    for(var i = 0; i<nodesNumbersArray.length; i++){
        nodes.push({
            id: i,
            label: String(nodesNumbersArray[i])
        });
    }
    return nodes;
}
