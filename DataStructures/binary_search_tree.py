class Node:

    def __init__(self, value):
        self._value = value
        self._right_reference = None
        self._left_reference = None

    def get_right_reference(self):
        return self._right_reference

    def get_left_reference(self):
        return self._left_reference

    def is_leaf(self):
        return self._left_reference is None and self._right_reference is None

    def insert_node(self, elem):
        if elem._value < self._value:
            if self._left_reference is None:
                self._left_reference = elem
            else:
                self._left_reference.insert_node(elem)
        else:
            if self._right_reference is None:
                self._right_reference = elem
            else:
                self._right_reference.insert_node(elem)


class BinarySearchTree:

    def __init__(self):
        self._root = None
        self._size = 0

    def is_empty(self):
        return self._size == 0

    def get_size(self):
        return self._size

    def get_root(self):
        return self-_root

    def insert(self, elem):
        if self._root is None:
            self._root = elem
        else:
            self._root.insert_node(elem)

        self._size += 1
        return elem

    def _recursive_search(self, value, node):
        if node is None:
            return
        elif value == node._value:
            return Node(node._value)
        elif value < node._value:
            return self._recursive_search(value, node.get_left_reference())

        return self._recursive_search(value, node.get_right_reference())

    def search(self, value):
        return self._recursive_search(value, _root)

    def _remove_leaf_node(self, n):
        auxNode = Node(n._value)
        n = None
        self._size -= 1
        return auxNode

    def remove_branchful_node(self, branchful_node):
        if branchful_node.get_left_reference is None:
            self._size -= 1
            temp_node = Node(branchful_node._value)
            branchful_node = branchful_node.get_right_reference()
            return temp_node
        elif branchful_node.get_right_reference() is None:
            self._size -= 1
            temp_node = Node(branchful_node._value)
            branchful_node = branchful_node.get_left_reference()
            return temp_node
        else:
            def find_smallest_node(n):
                if n.get_left_reference() is None:
                    return n
                else:
                    return find_smallest_node(n.get_left_reference())

            smallest_right_node = find_smallest_node(branchful_node.get_right_reference())
            branchful_node._value = smallest_right_node._value
            return _recursive_remove(smallest_right_node._value, smallest_right_node)

    def _recursive_remove(self, value, node):
        if node is None:
            return
        elif node._value == value:
            if node.is_leaf():
                return _remove_leaf_node(node)
            else:
                return remove_branchful_node(node)
        elif value < node._value:
            return _recursive_remove(value, node.get_left_reference())
        else:
            return _recursive_remove(value, node.get_right_reference())

    def remove(self, value):
        self._recursive_remove(value, self._root)

    def _recursive_preorder(self, root, current_list):
        if root is not None:
            current_list.append(root._value)
        if root.get_left_reference() is not None:
            current_list = _recursive_preorder(root.get_left_reference(), current_list)
        if root.get_right_reference() is not None:
            current_list = _recursive_preorder(root.get_right_reference(), current_list)
        return current_list

    def preorder(self):
        result_preorder_values = _recursive_preorder(_root, [])
        return ", ".join(result_preorder_values)

    def _recursive_inorder(self, root, current_list):
        if root.Left is not None:
            current_list = _recursive_inorder(root.get_left_reference(), current_list)
        if root is not None:
            current_list.append(root._value)
        if root.Right is not None:
            current_list = _recursive_inorder(root.get_right_reference(), current_list)

        return current_list

    def inorder(self):
        result_inorder_values = _recursive_inorder(_root, [])
        return ", ".join(result_inorder_values)

    def _recursive_postorder(self, root, current_list):
        if root.Left is not None:
            current_list = _recursive_postorder(root.get_left_reference(), current_list)
        if root.Right is not None:
            current_list = _recursive_postorder(root.get_right_reference(), current_list)
        if root is not None:
            current_list.append(root._value)

        return current_list

    def postorder(self):
        result_postorder_values = _recursive_postorder(_root, [])
        return ", ".join(result_postorder_values)
