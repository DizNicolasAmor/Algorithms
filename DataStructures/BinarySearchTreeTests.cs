using DS_Exercises;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject2
{
    [TestClass]
    public class BinarySearchTreeTests
    {
        private BinarySearchTree _emptyBST;
        private BinarySearchTree _treeWithSixIncreasingValues;
        private BinarySearchTree _treeWithSixDecreasingValues;
        private BinarySearchTree _treeWithSixMessyValues;

        public BinarySearchTreeTests()
        {
            _emptyBST = new BinarySearchTree();
            _treeWithSixIncreasingValues = new BinarySearchTree();
            _treeWithSixDecreasingValues = new BinarySearchTree();
            _treeWithSixMessyValues = new BinarySearchTree();

            _treeWithSixIncreasingValues.Insert(new Node(1));
            _treeWithSixIncreasingValues.Insert(new Node(2));
            _treeWithSixIncreasingValues.Insert(new Node(3));
            _treeWithSixIncreasingValues.Insert(new Node(4));
            _treeWithSixIncreasingValues.Insert(new Node(5));
            _treeWithSixIncreasingValues.Insert(new Node(6));

            _treeWithSixDecreasingValues.Insert(new Node(6));
            _treeWithSixDecreasingValues.Insert(new Node(5));
            _treeWithSixDecreasingValues.Insert(new Node(4));
            _treeWithSixDecreasingValues.Insert(new Node(3));
            _treeWithSixDecreasingValues.Insert(new Node(2));
            _treeWithSixDecreasingValues.Insert(new Node(1));

            _treeWithSixMessyValues.Insert(new Node(4));
            _treeWithSixMessyValues.Insert(new Node(2));
            _treeWithSixMessyValues.Insert(new Node(6));
            _treeWithSixMessyValues.Insert(new Node(3));
            _treeWithSixMessyValues.Insert(new Node(5));
            _treeWithSixMessyValues.Insert(new Node(1));
        }

        [TestMethod]
        public void IsEmpty_WhenTreeIsEmpty_ShouldReturnTrue()
        {
            Assert.IsTrue(_emptyBST.IsEmpty());
        }

        [TestMethod]
        public void IsEmpty_WhenTreeHasOneElement_ShouldReturnFalse()
        {
            _emptyBST.Insert(new Node(3));
            Assert.IsFalse(_emptyBST.IsEmpty());
        }

        [TestMethod]
        public void IsEmpty_WhenTreeHasTwoElements_ShouldReturnFalse()
        {
            _emptyBST.Insert(new Node(3));
            _emptyBST.Insert(new Node(6));
            Assert.IsFalse(_emptyBST.IsEmpty());
        }

        [TestMethod]
        public void Size_WhenTreeIsEmpty_ShouldReturnZero()
        {
            Assert.AreEqual(0, _emptyBST.Size());
        }

        [TestMethod]
        public void Size_WhenTreeHasOneElement_ShouldReturnOne()
        {
            _emptyBST.Insert(new Node(3));
            Assert.AreEqual(1, _emptyBST.Size());
        }
        
        [TestMethod]
        public void Size_WhenTreeHasSixElements_ShouldReturnSix()
        {
            Assert.AreEqual(6, _treeWithSixIncreasingValues.Size());
        }

        [TestMethod]
        public void Insert_OneNode_ShouldInsertCorrectValuesInRoot()
        {
            _emptyBST.Insert(new Node(3));
            var root = _emptyBST.GetRoot();
            Assert.AreEqual(true, root is Node);
            Assert.AreEqual(3, root.Value);
            Assert.AreEqual(null, root.Left);
            Assert.AreEqual(null, root.Right);
        }

        [TestMethod]
        public void Insert_SixIncreasingValues_ShouldInsertThemToTheRight()
        {
            var root = _treeWithSixIncreasingValues.GetRoot();
            Assert.AreEqual(1, root.Value);
            Assert.AreEqual(2, root.Right.Value);
            Assert.AreEqual(3, root.Right.Right.Value);
            Assert.AreEqual(4, root.Right.Right.Right.Value);
            Assert.AreEqual(5, root.Right.Right.Right.Right.Value);
            Assert.AreEqual(6, root.Right.Right.Right.Right.Right.Value);
        }

        [TestMethod]
        public void Insert_SixDecreasingValues_ShouldInsertThemToTheLeft()
        {
            var root = _treeWithSixDecreasingValues.GetRoot();
            Assert.AreEqual(6, root.Value);
            Assert.AreEqual(5, root.Left.Value);
            Assert.AreEqual(4, root.Left.Left.Value);
            Assert.AreEqual(3, root.Left.Left.Left.Value);
            Assert.AreEqual(2, root.Left.Left.Left.Left.Value);
            Assert.AreEqual(1, root.Left.Left.Left.Left.Left.Value);
        }

        [TestMethod]
        public void Insert_SixMessyValues_ShouldInsertThemCorrectly()
        {
            var root = _treeWithSixMessyValues.GetRoot();
            Assert.AreEqual(4, root.Value);
            Assert.AreEqual(2, root.Left.Value);
            Assert.AreEqual(6, root.Right.Value);
            Assert.AreEqual(3, root.Left.Right.Value);
            Assert.AreEqual(5, root.Right.Left.Value);
            Assert.AreEqual(1, root.Left.Left.Value);
        }

        [TestMethod]
        public void Preorder_SixIncreasingValues_ShouldPreorderThem()
        {
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.Preorder());
        }

        [TestMethod]
        public void Preorder_SixDecreasingValues_ShouldPreorderThem()
        {
            Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixDecreasingValues.Preorder());
        }

        [TestMethod]
        public void Preorder_SixMessyValues_ShouldPreorderThem()
        {
            Assert.AreEqual("4, 2, 1, 3, 6, 5", _treeWithSixMessyValues.Preorder());
        }

        [TestMethod]
        public void Inorder_SixIncreasingValues_ShouldInorderThem()
        {
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.Inorder());
        }

        [TestMethod]
        public void Inorder_SixDecreasingValues_ShouldInorderThem()
        {
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixDecreasingValues.Inorder());
        }

        [TestMethod]
        public void Inorder_SixMessyValues_ShouldInorderThem()
        {
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixMessyValues.Inorder());
        }

        [TestMethod]
        public void Postorder_SixIncreasingValues_ShouldPostorderThem()
        {
            Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixIncreasingValues.Postorder());
        }

        [TestMethod]
        public void Postorder_SixDecreasingValues_ShouldPostorderThem()
        {
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixDecreasingValues.Postorder());
        }

        [TestMethod]
        public void Postorder_SixMessyValues_ShouldPostorderThem()
        {
            Assert.AreEqual("1, 3, 2, 5, 6, 4", _treeWithSixMessyValues.Postorder());
        }

        [TestMethod]
        public void Search_WhenTreeIsEmpty_ShouldReturnNull()
        {
            Assert.AreEqual(null, _emptyBST.Search(3));
        }

        [TestMethod]
        public void Search_WhenTreeHasNotTheValue_ShouldReturnNull()
        {
            Assert.AreEqual(null, _treeWithSixDecreasingValues.Search(9));
        }

        [TestMethod]
        public void Search_WhenTreeHasTheValue_ShouldReturnANode()
        {
            Assert.AreEqual(true, _treeWithSixDecreasingValues.Search(5) is Node);
        }

        [TestMethod]
        public void Search_WhenTreeHasTheValue_ShouldReturnTheCorrectNode()
        {
            const int valueExample = 5;
            Node nodeExample = new Node(valueExample);
            Node result = _treeWithSixDecreasingValues.Search(valueExample);
            Assert.AreEqual(nodeExample.Value, result.Value);
        }

        [TestMethod]
        public void Remove_WhenTreeIsEmpty_ShouldReturnNull()
        {
            Assert.IsNull(_emptyBST.Remove(1));
        }

        [TestMethod]
        public void Remove_WhenTreeIsEmpty_TreeShouldHaveZeroSize()
        {
            _emptyBST.Remove(1);
            Assert.AreEqual(0, _emptyBST.Size());
        }

        [TestMethod]
        public void Remove_UnincludedValue_ShouldReturnNull()
        {
            var removeResult = _treeWithSixIncreasingValues.Remove(9);
            Assert.IsNull(removeResult);
        }

        [TestMethod]
        public void Remove_UnincludedValue_TreeShouldHavePreviousSize()
        {
            var previousSize = _treeWithSixIncreasingValues.Size();
            _treeWithSixIncreasingValues.Remove(9);
            var nextSize = _treeWithSixIncreasingValues.Size();
            Assert.AreEqual(previousSize, nextSize);
        }

        [TestMethod]
        public void Remove_IncludedValue_TreeShouldHavePreviousSizeMinusOne()
        {
            var previousSize = _treeWithSixIncreasingValues.Size();
            _treeWithSixIncreasingValues.Remove(1);
            var nextSize = _treeWithSixIncreasingValues.Size();
            Assert.AreEqual(previousSize, nextSize + 1);
        }

        [TestMethod]
        public void Remove_UnincludedValue_ShouldNotAffectTheTree()
        {
            _treeWithSixIncreasingValues.Remove(9);
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.Preorder());
            Assert.AreEqual("1, 2, 3, 4, 5, 6", _treeWithSixIncreasingValues.Inorder());
            Assert.AreEqual("6, 5, 4, 3, 2, 1", _treeWithSixIncreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_IncludedValue_ShouldReturnCorrectNode()
        {
            var removedNode = _treeWithSixIncreasingValues.Remove(3);
            Assert.AreEqual(3, removedNode.Value);
        }

        [TestMethod]
        public void Remove_ValueFromSixIncreasingValues_ShouldRemoveItFromTree()
        {
            _treeWithSixIncreasingValues.Remove(3);
            Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixIncreasingValues.Preorder());
            Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixIncreasingValues.Inorder());
            Assert.AreEqual("6, 5, 4, 2, 1", _treeWithSixIncreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_ValueFromSixDecreasingValues_ShouldRemoveItFromTree()
        {
            _treeWithSixDecreasingValues.Remove(3);
            Assert.AreEqual("6, 5, 4, 2, 1", _treeWithSixDecreasingValues.Preorder());
            Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixDecreasingValues.Inorder());
            Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixDecreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_ValueFromSixMessyValues_ShouldRemoveItFromTree()
        {
            _treeWithSixMessyValues.Remove(3);
            Assert.AreEqual("4, 2, 1, 6, 5", _treeWithSixMessyValues.Preorder());
            Assert.AreEqual("1, 2, 4, 5, 6", _treeWithSixMessyValues.Inorder());
            Assert.AreEqual("1, 2, 5, 6, 4", _treeWithSixMessyValues.Postorder());
        }

        [TestMethod]
        public void Remove_LeafNode_ShouldIntegrateCorrectlyAllTools()
        {
            int targetToRemove = 6;
            int previousSize = _treeWithSixIncreasingValues.Size();
            Node removedNode = _treeWithSixIncreasingValues.Remove(targetToRemove);
            int nextSize = _treeWithSixIncreasingValues.Size();

            Assert.AreEqual(targetToRemove, removedNode.Value);
            Assert.AreEqual(true, removedNode is Node);
            Assert.AreEqual(previousSize, nextSize + 1);
            Assert.AreEqual("1, 2, 3, 4, 5", _treeWithSixIncreasingValues.Preorder());
            Assert.AreEqual("1, 2, 3, 4, 5", _treeWithSixIncreasingValues.Inorder());
            Assert.AreEqual("5, 4, 3, 2, 1", _treeWithSixIncreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_NodeWithRightChild_ShouldIntegrateCorrectlyAllTools()
        {
            int targetToRemove = 5;
            int previousSize = _treeWithSixIncreasingValues.Size();
            Node removedNode = _treeWithSixIncreasingValues.Remove(targetToRemove);
            int nextSize = _treeWithSixIncreasingValues.Size();

            Assert.AreEqual(targetToRemove, removedNode.Value);
            Assert.AreEqual(true, removedNode is Node);
            Assert.AreEqual(previousSize, nextSize + 1);
            Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixIncreasingValues.Preorder());
            Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixIncreasingValues.Inorder());
            Assert.AreEqual("6, 4, 3, 2, 1", _treeWithSixIncreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_NodeWithLeftChild_ShouldIntegrateCorrectlyAllTools()
        {
            int targetToRemove = 5;
            int previousSize = _treeWithSixDecreasingValues.Size();
            Node removedNode = _treeWithSixDecreasingValues.Remove(targetToRemove);
            int nextSize = _treeWithSixDecreasingValues.Size();

            Assert.AreEqual(targetToRemove, removedNode.Value);
            Assert.AreEqual(true, removedNode is Node);
            Assert.AreEqual(previousSize, nextSize + 1);
            Assert.AreEqual("6, 4, 3, 2, 1", _treeWithSixDecreasingValues.Preorder());
            Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixDecreasingValues.Inorder());
            Assert.AreEqual("1, 2, 3, 4, 6", _treeWithSixDecreasingValues.Postorder());
        }

        [TestMethod]
        public void Remove_NodeWithBothChilds_ShouldIntegrateCorrectlyAllTools()
        {
            int targetToRemove = 4;
            int previousSize = _treeWithSixMessyValues.Size();
            Node removedNode = _treeWithSixMessyValues.Remove(targetToRemove);
            int nextSize = _treeWithSixMessyValues.Size();

            // Assert.AreEqual(targetToRemove, removedNode.Value);
            Assert.AreEqual(true, removedNode is Node);
            Assert.AreEqual(previousSize, nextSize + 1);
            Assert.AreEqual("5, 2, 1, 3, 6", _treeWithSixMessyValues.Preorder());
            Assert.AreEqual("1, 2, 3, 5, 6", _treeWithSixMessyValues.Inorder());
            Assert.AreEqual("1, 3, 2, 6, 5", _treeWithSixMessyValues.Postorder());
        }

    }
}
