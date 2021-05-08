# run tests with following command: python -m unittest discover 
from unittest import TestCase 
from binary_search_tree import (BinarySearchTree, Node) 
 
class TestBinarySearchTree(TestCase): 
 
    def test_is_empty_should_return_true_when_bst_is_empty(self): 
        empty_BST_ = BinarySearchTree() 
        self.assertTrue(empty_BST_.is_empty()) 
 
    def test_is_empty_should_return_false_when_bst_has_one_node(self): 
        current_BST_ = BinarySearchTree() 
        current_BST_.insert(Node(3)) 
        self.assertFalse(current_BST_.is_empty()) 
 
    def test_is_empty_should_return_false_when_bst_has_two_nodes(self): 
        current_BST_ = BinarySearchTree() 
        current_BST_.insert(Node(3)) 
        current_BST_.insert(Node(6)) 
        self.assertFalse(current_BST_.is_empty()) 
 
    def test_size_should_return_zero_when_bst_is_empty(self): 
        empty_BST_ = BinarySearchTree() 
        self.assertEqual(0, empty_BST_.get_size()) 
 
    def test_size_should_return_one_when_bst_has_one_node(self): 
        current_BST_ = BinarySearchTree() 
        current_BST_.insert(Node(1)) 
        self.assertEqual(1, current_BST_.get_size()) 
 
    def test_size_should_return_six_when_bst_has_six_nodes(self): 
        current_BST_ = BinarySearchTree() 
        current_BST_.insert(Node(1)) 
        current_BST_.insert(Node(2)) 
        current_BST_.insert(Node(3)) 
        current_BST_.insert(Node(4)) 
        current_BST_.insert(Node(5)) 
        current_BST_.insert(Node(6)) 
        self.assertEqual(6, current_BST_.get_size()) 
 
""" 
    BinarySearchTreeTests() 
        _emptyBST = new BinarySearchTree() 
        _treeWithSixIncreasingValues = new BinarySearchTree() 
        _treeWithSixDecreasingValues = new BinarySearchTree() 
        _treeWithSixMessyValues = new BinarySearchTree() 
 
        _treeWithSixIncreasingValues.Insert(new Node(1)) 
        _treeWithSixIncreasingValues.Insert(new Node(2)) 
        _treeWithSixIncreasingValues.Insert(new Node(3)) 
        _treeWithSixIncreasingValues.Insert(new Node(4)) 
        _treeWithSixIncreasingValues.Insert(new Node(5)) 
        _treeWithSixIncreasingValues.Insert(new Node(6)) 
 
        _treeWithSixDecreasingValues.Insert(new Node(6)) 
        _treeWithSixDecreasingValues.Insert(new Node(5)) 
        _treeWithSixDecreasingValues.Insert(new Node(4)) 
        _treeWithSixDecreasingValues.Insert(new Node(3)) 
        _treeWithSixDecreasingValues.Insert(new Node(2)) 
        _treeWithSixDecreasingValues.Insert(new Node(1)) 
 
        _treeWithSixMessyValues.Insert(new Node(4)) 
        _treeWithSixMessyValues.Insert(new Node(2)) 
        _treeWithSixMessyValues.Insert(new Node(6)) 
        _treeWithSixMessyValues.Insert(new Node(3)) 
        _treeWithSixMessyValues.Insert(new Node(5)) 
        _treeWithSixMessyValues.Insert(new Node(1)) 
 
    def Insert_OneNode_ShouldInsertCorrectValuesInRoot() 
        _emptyBST.Insert(new Node(3)) 
        var root = _emptyBST.GetRoot() 
        Assert.AreEqual(true, root is Node) 
        Assert.AreEqual(3, root.Value) 
        Assert.AreEqual(null, root.Left) 
        Assert.AreEqual(null, root.Right) 
 
    def Insert_SixIncreasingValues_ShouldInsertThemToTheRight() 
        var root = _treeWithSixIncreasingValues.GetRoot() 
        Assert.AreEqual(1, root.Value) 
        Assert.AreEqual(2, root.Right.Value) 
        Assert.AreEqual(3, root.Right.Right.Value) 
        Assert.AreEqual(4, root.Right.Right.Right.Value) 
        Assert.AreEqual(5, root.Right.Right.Right.Right.Value) 
        Assert.AreEqual(6, root.Right.Right.Right.Right.Right.Value) 
 
    def Insert_SixDecreasingValues_ShouldInsertThemToTheLeft() 
        var root = _treeWithSixDecreasingValues.GetRoot() 
        Assert.AreEqual(6, root.Value) 
        Assert.AreEqual(5, root.Left.Value)
        Assert.AreEqual(4, root.Left.Left.Value) 
        Assert.AreEqual(3, root.Left.Left.Left.Value) 
        Assert.AreEqual(2, root.Left.Left.Left.Left.Value) 
        Assert.AreEqual(1, root.Left.Left.Left.Left.Left.Value) 
 
    def Insert_SixMessyValues_ShouldInsertThemCorrectly() 
        var root = _treeWithSixMessyValues.GetRoot() 
        Assert.AreEqual(4, root.Value) 
        Assert.AreEqual(2, root.Left.Value) 
        Assert.AreEqual(6, root.Right.Value) 
        Assert.AreEqual(3, root.Left.Right.Value) 
        Assert.AreEqual(5, root.Right.Left.Value) 
        Assert.AreEqual(1, root.Left.Left.Value) 
 
    def Preorder_SixIncreasingValues_ShouldPreorderThem() 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.preorder()) 
 
    def Preorder_SixDecreasingValues_ShouldPreorderThem() 
        Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixDecreasingValues.preorder()) 
 
    def Preorder_SixMessyValues_ShouldPreorderThem() 
        Assert.AreEqual("4, 2, 1, 3, 6, 5", _treeWithSixMessyValues.preorder()) 
 
    def Inorder_SixIncreasingValues_ShouldInorderThem() 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.inorder()) 
 
    def Inorder_SixDecreasingValues_ShouldInorderThem() 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixDecreasingValues.inorder()) 
 
    def Inorder_SixMessyValues_ShouldInorderThem() 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixMessyValues.inorder()) 
 
    def Postorder_SixIncreasingValues_ShouldPostorderThem() 
        Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixIncreasingValues.postorder()) 
 
    def Postorder_SixDecreasingValues_ShouldPostorderThem() 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixDecreasingValues.postorder()) 
 
    def Postorder_SixMessyValues_ShouldPostorderThem() 
        Assert.AreEqual("1, 3, 2, 5, 6, 4", _treeWithSixMessyValues.postorder()) 
 
    def Search_WhenTreeIsEmpty_ShouldReturnNull() 
        Assert.AreEqual(null, _emptyBST.Search(3)) 
 
    def Search_WhenTreeHasNotTheValue_ShouldReturnNull() 
        Assert.AreEqual(null, _treeWithSixDecreasingValues.Search(9)) 
 
    def Search_WhenTreeHasTheValue_ShouldReturnANode() 
        Assert.AreEqual(true, _treeWithSixDecreasingValues.Search(5) is Node) 
 
    def Search_WhenTreeHasTheValue_ShouldReturnTheCorrectNode() 
        const int valueExample = 5; 
        Node nodeExample = new Node(valueExample) 
        Node result = _treeWithSixDecreasingValues.Search(valueExample) 
        Assert.AreEqual(nodeExample.Value, result.Value) 
 
    def Remove_WhenTreeIsEmpty_ShouldReturnNull() 
        Assert.IsNull(_emptyBST.Remove(1)) 
 
    def Remove_WhenTreeIsEmpty_TreeShouldHaveZeroSize() 
        _emptyBST.Remove(1) 
        Assert.AreEqual(0, _emptyBST.Size()) 
 
    def Remove_UnincludedValue_ShouldReturnNull() 
        var removeResult = _treeWithSixIncreasingValues.Remove(9) 
        Assert.IsNull(removeResult) 
 
    def Remove_UnincludedValue_TreeShouldHavePreviousSize() 
        var previousSize = _treeWithSixIncreasingValues.Size() 
        _treeWithSixIncreasingValues.Remove(9) 
        var nextSize = _treeWithSixIncreasingValues.Size() 
        Assert.AreEqual(previousSize, nextSize) 
 
    def Remove_IncludedValue_TreeShouldHavePreviousSizeMinusOne() 
        var previousSize = _treeWithSixIncreasingValues.Size() 
        _treeWithSixIncreasingValues.Remove(1) 
        var nextSize = _treeWithSixIncreasingValues.Size() 
        Assert.AreEqual(previousSize, nextSize + 1) 
 
    def Remove_UnincludedValue_ShouldNotAffectTheTree() 
        _treeWithSixIncreasingValues.Remove(9) 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.inorder())
        Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixIncreasingValues.postorder()) 
 
    def Remove_IncludedValue_ShouldReturnCorrectNode() 
        var removedNode = _treeWithSixIncreasingValues.Remove(3) 
        Assert.AreEqual(3, removedNode.Value) 
 
    def Remove_ValueFromSixIncreasingValues_ShouldRemoveItFromTree() 
        _treeWithSixIncreasingValues.Remove(3) 
        Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixIncreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixIncreasingValues.inorder()) 
        Assert.AreEqual("6, 5, 4, 2, 1", _treeWithSixIncreasingValues.postorder()) 
 
    def Remove_ValueFromSixDecreasingValues_ShouldRemoveItFromTree() 
        _treeWithSixDecreasingValues.Remove(3) 
        Assert.AreEqual("6, 5, 4, 2, 1", _treeWithSixDecreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixDecreasingValues.inorder()) 
        Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixDecreasingValues.postorder()) 
 
    def Remove_ValueFromSixMessyValues_ShouldRemoveItFromTree() 
        _treeWithSixMessyValues.Remove(3) 
        Assert.AreEqual("4, 2, 1, 6, 5", _treeWithSixMessyValues.preorder()) 
        Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixMessyValues.inorder()) 
        Assert.AreEqual("1, 2, 5, 6, 4", _treeWithSixMessyValues.postorder()) 
 
    def Remove_LeafNode_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 6; 
        int previousSize = _treeWithSixIncreasingValues.Size() 
        Node removedNode = _treeWithSixIncreasingValues.Remove(targetToRemove) 
        int nextSize = _treeWithSixIncreasingValues.Size() 
 
        Assert.AreEqual(targetToRemove, removedNode.Value) 
        Assert.AreEqual(true, removedNode is Node) 
        Assert.AreEqual(previousSize, nextSize + 1) 
        Assert.AreEqual("1, 2, 3, 4, 5", _treeWithSixIncreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 3, 4, 5", _treeWithSixIncreasingValues.inorder()) 
        Assert.AreEqual("5, 4, 3, 2, 1", _treeWithSixIncreasingValues.postorder()) 
 
    def Remove_NodeWithRightChild_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 5; 
        int previousSize = _treeWithSixIncreasingValues.Size() 
        Node removedNode = _treeWithSixIncreasingValues.Remove(targetToRemove) 
        int nextSize = _treeWithSixIncreasingValues.Size() 
 
        Assert.AreEqual(targetToRemove, removedNode.Value) 
        Assert.AreEqual(true, removedNode is Node) 
        Assert.AreEqual(previousSize, nextSize + 1) 
        Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixIncreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixIncreasingValues.inorder()) 
        Assert.AreEqual("6, 4, 3, 2, 1", _treeWithSixIncreasingValues.postorder()) 
 
    def Remove_NodeWithLeftChild_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 5; 
        int previousSize = _treeWithSixDecreasingValues.Size() 
        Node removedNode = _treeWithSixDecreasingValues.Remove(targetToRemove) 
        int nextSize = _treeWithSixDecreasingValues.Size() 
 
        Assert.AreEqual(targetToRemove, removedNode.Value) 
        Assert.AreEqual(true, removedNode is Node) 
        Assert.AreEqual(previousSize, nextSize + 1) 
        Assert.AreEqual("6, 4, 3, 2, 1", _treeWithSixDecreasingValues.preorder()) 
        Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixDecreasingValues.inorder()) 
        Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixDecreasingValues.postorder()) 
 
    def Remove_NodeWithBothChilds_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 4; 
        int previousSize = _treeWithSixMessyValues.Size() 
        Node removedNode = _treeWithSixMessyValues.Remove(targetToRemove) 
        int nextSize = _treeWithSixMessyValues.Size()

        // Assert.AreEqual(targetToRemove, removedNode.Value) 
        Assert.AreEqual(true, removedNode is Node) 
        Assert.AreEqual(previousSize, nextSize + 1) 
        Assert.AreEqual("5, 2, 1, 3, 6", _treeWithSixMessyValues.preorder()) 
        Assert.AreEqual("1, 2, 3, 5, 6", _treeWithSixMessyValues.inorder()) 
        Assert.AreEqual("1, 3, 2, 6, 5", _treeWithSixMessyValues.postorder()) 
"""
