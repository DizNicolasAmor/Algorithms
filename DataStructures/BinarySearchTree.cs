using System.Collections.Generic;

namespace DS_Exercises
{
    public class Node
    {
        public int Value { get; set; }
        public Node Right = null;
        public Node Left = null;

        public Node(int value)
        {
            this.Value = value;
        }

        public ref Node GetRightReference() => ref Right;

        public ref Node GetLeftReference() => ref Left;

        public Node Clone() => this.MemberwiseClone() as Node;

        public bool IsLeaf() => this.Left == null && this.Right == null;

        public void InsertNode(Node elem)
        {
            if (elem.Value == this.Value)
            {
                this.Value = elem.Value;
            }
            else if (elem.Value < this.Value)
            {
                if (this.Left == null) this.Left = elem;
                else this.Left.InsertNode(elem);
            }
            else
            {
                if (this.Right == null) this.Right = elem;
                else this.Right.InsertNode(elem);
            }
        }

    }

    public class BinarySearchTree
    {
        private Node _root = null;
        private int _size = 0;

        public bool IsEmpty() => this._size == 0;

        public int Size() => this._size;

        public Node GetRoot() => _root;

        public Node Insert(Node elem)
        {
            if (_root == null) _root = elem;
            else _root.InsertNode(elem);

            _size += 1;
            return elem;
        }

        private Node RecursiveSearch(int value, Node node)
        {
            if (node == null) return null;
            else if (value == node.Value) return new Node(node.Value);
            else if (value < node.Value) return RecursiveSearch(value, node.Left);
            else return RecursiveSearch(value, node.Right);
        }

        public Node Search(int value)
        {
            return RecursiveSearch(value, _root);
        }

        private Node RemoveLeafNode(ref Node n)
        {
            Node auxNode = new Node(n.Value);
            n = null;
            _size -= 1;
            return auxNode;
        }

        private Node RemoveBranchfulNode(ref Node branchfulNode)
        {
            if (branchfulNode.Left == null) {
                _size -= 1;
                Node tempNode = new Node(branchfulNode.Value);
                branchfulNode = branchfulNode.Right;
                return tempNode;
            }
            else if (branchfulNode.Right == null)
            {
                _size -= 1;
                Node tempNode = new Node(branchfulNode.Value);
                branchfulNode = branchfulNode.Left;
                return tempNode;
            }
            else
            {
                ref Node findSmallestNode(ref Node n)
                {
                    if (n.Left == null) return ref n;
                    else return ref findSmallestNode(ref n.GetLeftReference());
                }
                ref Node smallestRightNode = ref findSmallestNode(ref branchfulNode.GetRightReference());

                branchfulNode.Value = smallestRightNode.Value;
                return RecursiveRemove(smallestRightNode.Value, ref smallestRightNode);
            }
        }

        private Node RecursiveRemove(int value, ref Node node)
        {
            if (node == null) return null;
            else if (node.Value == value) return node.IsLeaf() ? RemoveLeafNode(ref node) : RemoveBranchfulNode(ref node);
            else if (value < node.Value) return RecursiveRemove(value, ref node.GetLeftReference());
            else return RecursiveRemove(value, ref node.GetRightReference());
        }

        public Node Remove(int value) => RecursiveRemove(value, ref _root);

        private List<int> RecursivePreorder(Node root, List<int> list)
        {
            if (root != null) list.Add(root.Value);
            if (root.Left != null) list = RecursivePreorder(root.Left, list);
            if (root.Right != null) list = RecursivePreorder(root.Right, list);

            return list;
        }

        public string Preorder()
        {
            List<int> resultPreorderValues = RecursivePreorder(_root, new List<int>());
            return string.Join(", ", resultPreorderValues);
        }

        private List<int> RecursiveInorder(Node root, List<int> list)
        {
            if (root.Left != null) list = RecursiveInorder(root.Left, list);
            if (root != null ) list.Add(root.Value);
            if (root.Right != null) list = RecursiveInorder(root.Right, list);

            return list;
        }

        public string Inorder()
        {
            List<int> resultInorderValues = RecursiveInorder(_root, new List<int>());
            return string.Join(", ", resultInorderValues);
        }

        private List<int> RecursivePostorder(Node root, List<int> list)
        {
            if (root.Left != null) list = RecursivePostorder(root.Left, list);
            if (root.Right != null) list = RecursivePostorder(root.Right, list);
            if (root != null) list.Add(root.Value);

            return list;
        }

        public string Postorder()
        {
            List<int> resultPostorderValues = RecursivePostorder(_root, new List<int>());
            return string.Join(", ", resultPostorderValues);
        }

    }
}
