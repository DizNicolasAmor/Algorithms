class Node: 
 
    def __init__(self, value): 
        self.value_ = value 
        self.right_reference_ = None 
        self.left_reference_ = None 
 
    def get_right_reference(self): 
        return self.right_reference_ 
 
    def get_left_reference(self): 
        return self.left_reference_ 
 
    def is_leaf(self): 
        return self.left_reference_ == None and self.right_reference_ == None 
 
    def insert_node(self, elem): 
        if elem.value_ == self.value_: 
            self.value_ = elem.value_ 
        elif elem.value_ < self.value_: 
            if self.left_reference_ == None: 
                self.left_reference_ = elem 
            else: 
                self.left_reference_.insert_node(elem) 
        else: 
            if self.right_reference_ == None: 
                self.right_reference_ = elem 
            else: 
                self.right_reference_.insert_node(elem) 
 
 
class BinarySearchTree: 
 
    def __init__(self):
        self.root_ = None 
        self.size_ = 0 
 
    def is_empty(self): 
        return self.size_ == 0 
 
    def get_size(self): 
        return self.size_ 
 
    def get_root(self): 
        return self-root_ 
 
    def insert(self, elem): 
        if self.root_ == None: 
            self.root_ = elem 
        else: 
            self.root_.insert_node(elem) 
 
        self.size_ += 1 
        return elem 
 
    def recursive_search_(self, value, node): 
        if node == None: 
            return 
        elif value == node.value_: 
            return Node(node.value_) 
        elif value < node.value_: 
            return self.recursive_search_(value, node.get_left_reference()) 
        else: 
            return self.recursive_search_(value, node.get_right_reference()) 
 
    def search(self, value): 
        return self.recursive_search_(value, root_) 
 
    def remove_leaf_node_(self, n): 
        auxNode = Node(n.value_) 
        n = None 
        self.size_ -= 1 
        return auxNode 
 
    def remove_branchful_node(self, branchful_node): 
        if branchful_node.get_left_reference == None: 
            self.size_ -= 1 
            temp_node = Node(branchful_node.value_) 
            branchful_node = branchful_node.get_right_reference() 
            return temp_node 
        elif branchful_node.get_right_reference() == None: 
            self.size_ -= 1 
            temp_node = Node(branchful_node.value_) 
            branchful_node = branchful_node.get_left_reference() 
            return temp_node 
        else: 
            def find_smallest_node(n): 
                if n.get_left_reference() == None: 
                    return n 
                else: 
                    return find_smallest_node(n.get_left_reference()) 
 
            smallest_right_node = find_smallest_node(branchful_node.get_right_reference()) 
            branchful_node.value_ = smallest_right_node.value_ 
            return recursive_remove_(smallest_right_node.value_, smallest_right_node) 
 
    def recursive_remove_(self, value, node): 
        if node == None: 
            return 
        elif node.value_ == value: 
            if node.is_leaf(): 
                return remove_leaf_node_(node) 
            else: 
                return remove_branchful_node(node) 
        elif value < node.value_:  
            return recursive_remove_(value, node.get_left_reference()) 
        else: 
            return recursive_remove_(value, node.get_right_reference()) 
 
    def remove(self, value): 
        self.recursive_remove_(value, self.root_) 
 
    def recursive_preorder_(self, root, list): 
        if root != None: 
            list.append(root.value_) 
        if root.get_left_reference() != None: 
            list = recursive_preorder_(root.get_left_reference(), list) 
        if root.get_right_reference() != None:
            list = recursive_preorder_(root.get_right_reference(), list) 
        return list 
 
    def preorder(): 
        result_preorder_values = recursive_preorder_(root_, []) 
        return ", ".join(result_preorder_values) 
 
    def recursive_inorder_(self, root, list): 
        if root.Left != None: 
            list = recursive_inorder_(root.get_left_reference(), list) 
        if root != None: 
            list.append(root.value_) 
        if root.Right != None: 
            list = recursive_inorder_(root.get_right_reference(), list) 
 
        return list; 
 
    def inorder(self): 
        result_inorder_values = recursive_inorder_(root_, []) 
        return ", ".join(result_inorder_values) 
 
    def recursive_postorder(self, root, list): 
        if root.Left != None: 
            list = recursive_postorder(root.get_left_reference(), list) 
        if root.Right != None: 
            list = recursive_postorder(root.get_right_reference(), list) 
        if root != None: 
            list.append(root.value_) 
 
        return list 
 
    def postorder(): 
        result_postorder_values = recursive_postorder(root_, []) 
        return ", ".join(result_postorder_values)
