const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  bst = null;
  root() {
    return this.bst;
  }

  add(data) {
    const node = new Node(data);
    if (!this.bst) {
      this.bst = node;
      return;
      // return this.bst;
    }
    let cur = this.bst;
    while (cur) {
      if (data < cur.data) {
        if (cur.left) {
          cur = cur.left
        } else {
          cur.left = node;
          return ;
        }
      } else {
        if (cur.rigth) {
          cur = cur.right;
        } else {
          cur.rigth = node;
          return ;
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let cur = this.bst;
    // if (!cur || !data) {
    //   return null;
    // }
    // while (cur) {
    //   if (cur.data == data) {
    //     return cur;
    //   } 
    //   if (data < cur.data) {
    //     cur = cur.left;
    //     return cur;
       
    //   } else {
    //     cur = cur.right;
    //     return cur;        
    //   }
      
    // } return null;
    
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {

    let cur = this.bst;
    while (cur.left) {
      cur = cur.left;
    }

    return cur.data;
  }

  max() {
  
    let cur = this.bst;
    while (cur.right) {
      cur = cur.right;
    }

    return cur.data;;
  }
}

module.exports = {
  BinarySearchTree
};