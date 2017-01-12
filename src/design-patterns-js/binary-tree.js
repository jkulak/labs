(function() {
    'use strict';

    const MAX_VALUE = 1000;

    const Node = {
        create: function(value, l, r) {
            let obj = Object.create(this);
            // obj.parent = parent || '🚫';
            obj.value = value;
            obj.l = l;
            obj.r = r;
            return obj;
        },
        value: null,
        l: null,
        r: null,
    };

    const randomTree = function(levels) {
        const value = Math.floor(Math.random() * MAX_VALUE);
        let n = Node.create(value, null, null, parent);
        if (levels > 1) {
            n.l = randomTree(levels-1);
            n.r = randomTree(levels-1);
        }
        return n;
    };

    const visitNode = function(n) {
        console.log(n);
    };

    // t - node to start from
    const traverseTreeInOrder = function(t) {
        if (t !== null) {
            traverseTreeInOrder(t.l);
            visitNode(t);
            traverseTreeInOrder(t.r);
        }
    };

    const traverseTreePreOrder = function(t) {
        if (t !== null) {
            visitNode(t);
            traverseTreeInOrder(t.l);
            traverseTreeInOrder(t.r);
        }
    };

    const traverseTreePostOrder = function(t) {
        if (t !== null) {
            visitNode(t);
            traverseTreeInOrder(t.l);
            traverseTreeInOrder(t.r);
        }
    };

    let tree = randomTree(5);
    traverseTreeInOrder(tree);
    traverseTreePreOrder(tree);
    traverseTreePostOrder(tree);
    // console.log(tree);

}());
