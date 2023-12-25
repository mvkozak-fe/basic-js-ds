const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }
  
  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }    
  }
  has(data) {
    return searchNode(this.tree, data)
    function searchNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return searchNode(node.left, data)
      } else {
        return searchNode(node.right, data)
      }
    }
  }

  find(data) {
    return searchNodeData(this.tree, data)
    function searchNodeData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return searchNodeData(node.left, data)
      } else {
        return searchNodeData(node.right, data)
      }
    }
    
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node; 
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        } 
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
        
      }

    }

  }

  min() {
    let node = this.tree;
    while (node.left) {
      node = node.left;
    } 
    return node.data;
    
  }

  max() {
    let node = this.tree;
    while (node.right) {
      node = node.right;
    } 
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};