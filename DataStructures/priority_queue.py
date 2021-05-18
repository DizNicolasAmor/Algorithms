import math

class PriorityQueue:

    def __init__(self):
        self.elements = []

    def is_empty(self):
        return self.size() == 0

    def size(self):
        return len(self.elements)

    def swap_elements(self, index_first, index_last):
        aux = self.elements[index_first]
        self.elements[index_first] = self.elements[index_last]
        self.elements[index_last] = aux

    def enqueue(self, element):
        if not (isinstance(element, dict)):
            return

        self.elements.append(element)

        def is_element_greater_than_father(ix):
            ix_father = math.floor((ix + 1) / 2) - 1
            if ix_father < 0:
                return False

            return self.elements[ix]['priority'] > self.elements[ix_father]['priority']

        index_aux = self.size() - 1

        while (is_element_greater_than_father(index_aux)):
            index_father = math.floor((index_aux + 1) / 2) - 1
            self.swap_elements(index_father, index_aux)
            index_aux = index_father

        return element

    def dequeue(self):
        if self.is_empty():
            return

        first_index = 0
        last_index = self.size() - 1

        self.swap_elements(0, last_index)

        elementDequeued = self.elements.pop()

        def has_more_priority(ix1, ix2):
            return self.elements[ix1]['priority'] > self.elements[ix2]['priority']

        def sort_index_with_its_children(index_parent):
            index_child_1 = (index_parent + 1) * 2 - 1
            index_child_2 = (index_parent + 1) * 2
            def does_elem_exist(elem_index):
                return elem_index < self.size()

            is_parent_the_greatest = (does_elem_exist(index_child_1)
                and has_more_priority(index_parent, index_child_1)
                and does_elem_exist(index_child_2)
                and has_more_priority(index_parent, index_child_2))
            shoud_swap_with_second_child = (does_elem_exist(index_child_2)
                and has_more_priority(index_child_2, index_child_1)
                and has_more_priority(index_child_2, index_parent))
            shoud_swap_with_first_child = (does_elem_exist(index_child_1)
                and has_more_priority(index_child_1, index_parent))

            if is_parent_the_greatest:
                return elementDequeued
            elif shoud_swap_with_second_child:
                self.swap_elements(index_parent, index_child_2)
                return sort_index_with_its_children(index_child_2)
            elif shoud_swap_with_first_child:
                self.swap_elements(index_parent, index_child_1)
                return sort_index_with_its_children(index_child_1)
            else:
                return elementDequeued

        return sort_index_with_its_children(first_index)


def execute_quick_tests():
    print("""\nQUICK TESTS:\n""")

    empty_PQ = PriorityQueue()
    print(empty_PQ.is_empty() == True, ': is_empty() returns True when PQ is empty')
    print(empty_PQ.size() == 0, ': size() returns 0 when PQ is empty')

    my_PQ = PriorityQueue()
    my_PQ.enqueue({ 'value': 'Nico', 'priority': 1 })
    print(my_PQ.is_empty() == False, ': is_empty() returns False when it has elements')
    print(my_PQ.size() == 1, ': size() returns 1 when PQ has one element')

    my_PQ.enqueue('invalidElem')
    print(my_PQ.size() == 1, ': size() should be the same after enqueue invalid element')

    my_PQ.enqueue({ 'value': 'Sherlock', 'priority': 4 })
    print(my_PQ.size() == 2, ': size() should add +1 after enqueue valid element')
    print(my_PQ.elements[0]['priority'] == 4, ': enqueue() should sort elements in one level')

    my_PQ.enqueue({ 'value': 'Pepe', 'priority': 3 })

    print(my_PQ.elements[2]['priority'] == 3, ': enqueue() does not sort elements if it is not needed')

    my_PQ.enqueue({ 'value': 'John', 'priority': 1 })
    my_PQ.enqueue({ 'value': 'Katja', 'priority': 6 })
    print(my_PQ.elements[0]['priority'] == 6, ': enqueue() sorts element in two levels')

    my_PQ.enqueue({ 'value': 'Sarah', 'priority': 2 })
    my_PQ.enqueue({ 'value': 'Delfina', 'priority': 5 })
    my_PQ.enqueue({ 'value': 'Riley', 'priority': 9 })
    my_PQ.enqueue({ 'value': 'Alexa', 'priority': 8 })
    my_PQ.enqueue({ 'value': 'Seven', 'priority': 7 })
    print(my_PQ.elements[0]['priority'] == 9, ': enqueue() sorts element in three levels')

    print(my_PQ.dequeue()['priority'] == 9, ': dequeue() returns correctly first element')
    print(my_PQ.dequeue()['priority'] == 8, ': dequeue() returns correctly second element')
    print(my_PQ.dequeue()['priority'] == 7, ': dequeue() returns correctly third element')
    print(my_PQ.dequeue()['priority'] == 6, ': dequeue() returns correctly fourth element')
    print(my_PQ.dequeue()['priority'] == 5, ': dequeue() returns correctly fifth element')
    print(my_PQ.dequeue()['priority'] == 4, ': dequeue() returns correctly sixth element')
    print(my_PQ.dequeue()['priority'] == 3, ': dequeue() returns correctly seventh element')
    print(my_PQ.dequeue()['priority'] == 2, ': dequeue() returns correctly eighth element')
    print(my_PQ.dequeue()['priority'] == 1, ': dequeue() returns correctly ninth element')
    print(my_PQ.dequeue()['priority'] == 1, ': dequeue() returns correctly last element')
    print(my_PQ.dequeue() == None, ': dequeue() of empty PQ should return None')


execute_quick_tests()
