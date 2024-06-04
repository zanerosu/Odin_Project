class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

export class Tree{
    constructor(array){
        array = sortUnique(array);
        this.root = createBST(array, 0, array.length - 1)
    }

    insert(newValue){
        this.root = this.insertRec(this.root, newValue);
    }

    //Recursive function to add the root 
    insertRec(root, newValue){

        if (root == null){
            root = new Node(newValue);
            return root;
        }

        if (root.value > newValue){
            root.left = this.insertRec(root.left, newValue);
        } else if (root.value < newValue){
            root.right = this.insertRec(root.right, newValue)
        } else {
            console.error("Value already in tree");
        }

        return root;
    }

    delete(value){
        this.root = this.deleteRec(this.root, value);
    }

    deleteRec(root, value){
        if (root === null){
            console.error("The tree is empty!")
            return root;
        }

        if (root.value > value){
            root.left = this.deleteRec(root.left, value);
        } else if (root.value < value){
            root.right = this.deleteRec(root.right, value)
        } 
        //The value has been found; 
        else {
            if (root.left === null){
                return root.right;
            } else if (root.right === null){
                return root.left;
            }

            root.value = this.minValue(root.right);
            root.right = this.deleteRec(root.right, root.value)
        }
        return root;
    }

    minValue(root){
        let minv = root.value;
        while(root.left  !== null){
            minv = root.left.value;
            root = root.left; 
        }
        return minv;
    }

    find(value){
        const foundNode = this.findRec(this.root, value);
        if (foundNode !== null){
            return foundNode;
        } else {
            return "Value not in Tree"
        }
    }

    findRec(root, value){
        if (root === null || root.value === value){
            return root;
        }

        if (root.value > value){
           return this.findRec(root.left, value);
        } 
            
        return this.findRec(root.right, value)
        
    }

    levelOrder(callback){
        if (this.root == null) return [];
        let queue = [];
        let res = [];

        queue.push(this.root);

        while(queue.length > 0){
            //Sets current node to node at front of queue and removes it.
            let current = queue.shift();

            if(callback){
                callback(current);
            } else {
                res.push(current.value);
            }

            //Add left and right child to queue if any.
            if (current.left){
                queue.push(current.left);
            };

            if (current.right){
                queue.push(current.right)
            };
        }
        return callback ? undefined : res;
    }

    inOrder(callback){
        let res = [];
        this.inOrderRec(this.root, res, callback);

        if (!callback){
            return res;
        }

        
    }

    inOrderRec(node, res, callback){
        if (node === null) return;
        
        this.inOrderRec(node.left, res, callback);
        if(callback){
            callback(node)
        } else{
            res.push(node.value);
        }
        this.inOrderRec(node.right, res, callback);
    }

    preOrder(callback){
        let res = [];
        this.preOrderRec(this.root, res, callback);

        if (!callback){
            return res;
        }

        
    }

    preOrderRec(node, res, callback){
        if (node === null) return;
        if(callback){
            callback(node)
        } else{
            res.push(node.value);
        }
        
        this.inOrderRec(node.left, res, callback);
        
        this.inOrderRec(node.right, res, callback);
    }

    postOrder(callback){
        let res = [];
        this.postOrderRec(this.root, res, callback);

        if (!callback){
            return res;
        }

        
    }

    postOrderRec(node, res, callback){
        if (node === null) return;
        
        this.inOrderRec(node.left, res, callback);
        
        this.inOrderRec(node.right, res, callback);

        if(callback){
            callback(node)
        } else{
            res.push(node.value);
        }
    }

    height(node){
        if (node === null){
            return 0;
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
    
    depth(node){
        if (node === null){
            return 0;
        }

        return this.depthRec(this.root, node.value, 0);

    }

    depthRec(node, value, depth){
        if(node === null){
            return "Node not in tree";
        }

        if (node.value === value){
            return depth;
        }

        if (value < node.value){
            return this.depthRec(node.left, value, depth + 1);
        } else{
            return this.depthRec(node.right, value, depth + 1);
        }
    }

    isBalanced(){
        const leftHeight = this.height(this.root.left);
        const rightHeight = this.height(this.root.right);
        
        if (Math.abs(leftHeight - rightHeight) > 1){
            return false
        }

        return true;
    }

    rebalance(){
        const newArray = this.inOrder();
        this.array = newArray;

        this.root = createBST(newArray, 0, newArray.length - 1)
    }

}

//Sorts and Removes Duplicates from Array
function sortUnique(array){
    if(array.length === 0) return array;

    array = array.sort(function (a, b) {return a*1 - b*1;});
    var res = [array[0]]
    for (var i = 1; i  <  array.length; i++){
        if (array[i-1] !== array[i]){
            res.push(array[i]);
        }
    }
    return res;
}


function createBST(array, start, end){
    if (start > end) return null;

    const midIndex = parseInt((start + end) / 2);

    const root = new Node(array[midIndex]);

    root.value = array[midIndex];
    root.left = createBST(array, start, midIndex - 1);
    root.right = createBST(array, midIndex + 1, end);
    return root;
}

export function prettyPrint (node, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }

    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
 