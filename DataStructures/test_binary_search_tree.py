# run tests with following command: python -m unittest discover
from unittest import TestCase
from binary_search_tree import (BinarySearchTree, Node)

class TestBinarySearchTree(TestCase):

    def setUp(self):
        self.empty_BST_ = BinarySearchTree()
        self.tree_with_six_increasing_values = BinarySearchTree()
        self.tree_with_six_decreasing_values = BinarySearchTree()
        self.tree_with_six_messy_values = BinarySearchTree()

        self.tree_with_six_increasing_values.insert(Node(1))
        self.tree_with_six_increasing_values.insert(Node(2))
        self.tree_with_six_increasing_values.insert(Node(3))
        self.tree_with_six_increasing_values.insert(Node(4))
        self.tree_with_six_increasing_values.insert(Node(5))
        self.tree_with_six_increasing_values.insert(Node(6))

        self.tree_with_six_decreasing_values.insert(Node(6))
        self.tree_with_six_decreasing_values.insert(Node(5))
        self.tree_with_six_decreasing_values.insert(Node(4))
        self.tree_with_six_decreasing_values.insert(Node(3))
        self.tree_with_six_decreasing_values.insert(Node(2))
        self.tree_with_six_decreasing_values.insert(Node(1))

        self.tree_with_six_messy_values.insert(Node(4))
        self.tree_with_six_messy_values.insert(Node(2))
        self.tree_with_six_messy_values.insert(Node(6))
        self.tree_with_six_messy_values.insert(Node(3))
        self.tree_with_six_messy_values.insert(Node(5))
        self.tree_with_six_messy_values.insert(Node(1))

    def test_is_empty_should_return_true_when_bst_is_empty(self):
        self.assertTrue(self.empty_BST_.is_empty())

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
        self.assertEqual(0, self.empty_BST_.get_size())

    def test_size_should_return_one_when_bst_has_one_node(self):
        current_BST_ = BinarySearchTree()
        current_BST_.insert(Node(1))
        self.assertEqual(1, current_BST_.get_size())

    def test_size_should_return_six_when_bst_has_six_nodes(self):
        self.assertEqual(6, self.tree_with_six_increasing_values.get_size())

    def test_insert_should_insert_correct_value_when_one_value(self):
        self.empty_BST_.insert(Node(3))
        root = self.empty_BST_.get_root()
        self.assertTrue(isinstance(root, Node))
        self.assertTrue(root._value == 3)
        self.assertTrue(root.get_left_reference() is None)
        self.assertTrue(root.get_right_reference() is None)

    def test_insert_should_insert_correct_to_the_right(self):
        root = self.tree_with_six_increasing_values.get_root()
        self.assertEqual(1, root._value)
        self.assertEqual(2, root.get_right_reference()._value)
        self.assertEqual(3, root.get_right_reference().get_right_reference()._value)
        self.assertEqual(4, root.get_right_reference().get_right_reference().get_right_reference()._value)
        self.assertEqual(5, root.get_right_reference().get_right_reference().get_right_reference().get_right_reference()._value)
        self.assertEqual(6, root.get_right_reference().get_right_reference().get_right_reference().get_right_reference().get_right_reference()._value)

    def test_insert_should_insert_correct_to_the_left(self):
        root = self.tree_with_six_decreasing_values.get_root()
        self.assertEqual(6, root._value)
        self.assertEqual(5, root.get_left_reference()._value)
        self.assertEqual(4, root.get_left_reference().get_left_reference()._value)
        self.assertEqual(3, root.get_left_reference().get_left_reference().get_left_reference()._value)
        self.assertEqual(2, root.get_left_reference().get_left_reference().get_left_reference().get_left_reference()._value)
        self.assertEqual(1, root.get_left_reference().get_left_reference().get_left_reference().get_left_reference().get_left_reference()._value)

    def test_insert_should_insert_correct_messy_values(self):
        root = self.tree_with_six_messy_values.get_root()
        self.assertEqual(4, root._value)
        self.assertEqual(2, root.get_left_reference()._value)
        self.assertEqual(6, root.get_right_reference()._value)
        self.assertEqual(3, root.get_left_reference().get_right_reference()._value)
        self.assertEqual(5, root.get_right_reference().get_left_reference()._value)
        self.assertEqual(1, root.get_left_reference().get_left_reference()._value) 

    def test_should_preorder_six_increasing_values(self):
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_increasing_values.preorder())

    def test_should_preorder_six_decreasing_values(self):
        self.assertEqual("6, 5, 4, 3, 2, 1", self.tree_with_six_decreasing_values.preorder())

    def test_should_preorder_six_messy_values(self):
        self.assertEqual("4, 2, 1, 3, 6, 5", self.tree_with_six_messy_values.preorder())

    def test_should_inorder_six_increasing_values(self):
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_increasing_values.inorder())

    def test_should_inorder_six_decreasing_values(self):
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_decreasing_values.inorder())

    def test_should_inorder_six_messy_values(self):
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_messy_values.inorder())

    def test_should_postorder_six_increasing_values(self):
        self.assertEqual("6, 5, 4, 3, 2, 1", self.tree_with_six_increasing_values.postorder())

    def test_should_postorder_six_decreasing_values(self):
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_decreasing_values.postorder())

    def test_should_postorder_six_messy_values(self):
        self.assertEqual("1, 3, 2, 5, 6, 4", self.tree_with_six_messy_values.postorder())

"""
    def Search_WhenTreeIsEmpty_ShouldReturnNull() 
        self.assertEqual(null, self.empty_BST_.Search(3)) 
 
    def Search_WhenTreeHasNotTheValue_ShouldReturnNull() 
        self.assertEqual(null, self.tree_with_six_decreasing_values.Search(9)) 
 
    def Search_WhenTreeHasTheValue_ShouldReturnANode() 
        self.assertEqual(true, self.tree_with_six_decreasing_values.Search(5) is Node) 
 
    def Search_WhenTreeHasTheValue_ShouldReturnTheCorrectNode() 
        const int valueExample = 5; 
        Node nodeExample = new Node(valueExample) 
        Node result = self.tree_with_six_decreasing_values.Search(valueExample) 
        self.assertEqual(nodeExample.Value, result.Value) 
 
    def Remove_WhenTreeIsEmpty_ShouldReturnNull() 
        Assert.IsNull(self.empty_BST_.Remove(1)) 
 
    def Remove_WhenTreeIsEmpty_TreeShouldHaveZeroSize() 
        self.empty_BST_.Remove(1) 
        self.assertEqual(0, self.empty_BST_.Size()) 
 
    def Remove_UnincludedValue_ShouldReturnNull() 
        var removeResult = self.tree_with_six_increasing_values.Remove(9) 
        Assert.IsNull(removeResult) 
 
    def Remove_UnincludedValue_TreeShouldHavePreviousSize() 
        var previousSize = self.tree_with_six_increasing_values.Size() 
        self.tree_with_six_increasing_values.Remove(9) 
        var nextSize = self.tree_with_six_increasing_values.Size() 
        self.assertEqual(previousSize, nextSize) 
 
    def Remove_IncludedValue_TreeShouldHavePreviousSizeMinusOne() 
        var previousSize = self.tree_with_six_increasing_values.Size() 
        self.tree_with_six_increasing_values.Remove(1) 
        var nextSize = self.tree_with_six_increasing_values.Size() 
        self.assertEqual(previousSize, nextSize + 1) 
 
    def Remove_UnincludedValue_ShouldNotAffectTheTree() 
        self.tree_with_six_increasing_values.Remove(9) 
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_increasing_values.preorder()) 
        self.assertEqual("1, 2, 3, 4, 5, 6", self.tree_with_six_increasing_values.inorder())
        self.assertEqual("6, 5, 4, 3, 2, 1", self.tree_with_six_increasing_values.postorder()) 
 
    def Remove_IncludedValue_ShouldReturnCorrectNode() 
        var removedNode = self.tree_with_six_increasing_values.Remove(3) 
        self.assertEqual(3, removedNode.Value) 
 
    def Remove_ValueFromSixIncreasingValues_ShouldRemoveItFromTree() 
        self.tree_with_six_increasing_values.Remove(3) 
        self.assertEqual("1, 2, 4, 5, 6", self.tree_with_six_increasing_values.preorder()) 
        self.assertEqual("1, 2, 4, 5, 6", self.tree_with_six_increasing_values.inorder()) 
        self.assertEqual("6, 5, 4, 2, 1", self.tree_with_six_increasing_values.postorder()) 
 
    def Remove_ValueFromSixDecreasingValues_ShouldRemoveItFromTree() 
        self.tree_with_six_decreasing_values.Remove(3) 
        self.assertEqual("6, 5, 4, 2, 1", self.tree_with_six_decreasing_values.preorder()) 
        self.assertEqual("1, 2, 4, 5, 6", self.tree_with_six_decreasing_values.inorder()) 
        self.assertEqual("1, 2, 4, 5, 6", self.tree_with_six_decreasing_values.postorder()) 
 
    def Remove_ValueFromSixMessyValues_ShouldRemoveItFromTree() 
        self.tree_with_six_messy_values.Remove(3)
        self.assertEqual("4, 2, 1, 6, 5", self.tree_with_six_messy_values.preorder()) 
        self.assertEqual("1, 2, 4, 5, 6", self.tree_with_six_messy_values.inorder()) 
        self.assertEqual("1, 2, 5, 6, 4", self.tree_with_six_messy_values.postorder()) 
 
    def Remove_LeafNode_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 6; 
        int previousSize = self.tree_with_six_increasing_values.Size() 
        Node removedNode = self.tree_with_six_increasing_values.Remove(targetToRemove) 
        int nextSize = self.tree_with_six_increasing_values.Size() 
 
        self.assertEqual(targetToRemove, removedNode.Value) 
        self.assertEqual(true, removedNode is Node) 
        self.assertEqual(previousSize, nextSize + 1) 
        self.assertEqual("1, 2, 3, 4, 5", self.tree_with_six_increasing_values.preorder()) 
        self.assertEqual("1, 2, 3, 4, 5", self.tree_with_six_increasing_values.inorder()) 
        self.assertEqual("5, 4, 3, 2, 1", self.tree_with_six_increasing_values.postorder()) 
 
    def Remove_NodeWithRightChild_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 5; 
        int previousSize = self.tree_with_six_increasing_values.Size() 
        Node removedNode = self.tree_with_six_increasing_values.Remove(targetToRemove) 
        int nextSize = self.tree_with_six_increasing_values.Size() 
 
        self.assertEqual(targetToRemove, removedNode.Value) 
        self.assertEqual(true, removedNode is Node) 
        self.assertEqual(previousSize, nextSize + 1) 
        self.assertEqual("1, 2, 3, 4, 6", self.tree_with_six_increasing_values.preorder()) 
        self.assertEqual("1, 2, 3, 4, 6", self.tree_with_six_increasing_values.inorder()) 
        self.assertEqual("6, 4, 3, 2, 1", self.tree_with_six_increasing_values.postorder()) 
 
    def Remove_NodeWithLeftChild_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 5; 
        int previousSize = self.tree_with_six_decreasing_values.Size() 
        Node removedNode = self.tree_with_six_decreasing_values.Remove(targetToRemove) 
        int nextSize = self.tree_with_six_decreasing_values.Size() 
 
        self.assertEqual(targetToRemove, removedNode.Value) 
        self.assertEqual(true, removedNode is Node) 
        self.assertEqual(previousSize, nextSize + 1) 
        self.assertEqual("6, 4, 3, 2, 1", self.tree_with_six_decreasing_values.preorder()) 
        self.assertEqual("1, 2, 3, 4, 6", self.tree_with_six_decreasing_values.inorder()) 
        self.assertEqual("1, 2, 3, 4, 6", self.tree_with_six_decreasing_values.postorder()) 
 
    def Remove_NodeWithBothChilds_ShouldIntegrateCorrectlyAllTools() 
        int targetToRemove = 4; 
        int previousSize = self.tree_with_six_messy_values.Size() 
        Node removedNode = self.tree_with_six_messy_values.Remove(targetToRemove) 
        int nextSize = self.tree_with_six_messy_values.Size()

        // self.assertEqual(targetToRemove, removedNode.Value) 
        self.assertEqual(true, removedNode is Node) 
        self.assertEqual(previousSize, nextSize + 1) 
        self.assertEqual("5, 2, 1, 3, 6", self.tree_with_six_messy_values.preorder()) 
        self.assertEqual("1, 2, 3, 5, 6", self.tree_with_six_messy_values.inorder()) 
        self.assertEqual("1, 3, 2, 6, 5", self.tree_with_six_messy_values.postorder()) 
"""
