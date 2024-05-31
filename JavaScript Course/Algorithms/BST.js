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
 