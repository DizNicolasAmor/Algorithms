class PriorityQueue {
	constructor() {
		this.elements = [];
	}

	isEmpty() {
		return this.elements.length === 0;
	}

	size() {
		return this.elements.length;
	}

    swapElements(indexFirst, indexLast) {
		const aux = this.elements[indexFirst];
		this.elements[indexFirst] = this.elements[indexLast];
		this.elements[indexLast] = aux;
	}

	enqueue(element) {
        const isValidElement = elem => (
			Object.keys(elem).includes('name') && typeof elem.name === 'string' &&
			Object.keys(elem).includes('priority') && typeof elem.priority === 'number'
		);
        if (!isValidElement(element))
			return console.error('Cannot enqueue: invalid element');

		this.elements.push(element);

		const isElementGreaterThanFather = ix => {
			const ixFather = Math.floor((ix + 1) / 2) - 1;
			if (ixFather < 0) return false;
			return this.elements[ix].priority > this.elements[ixFather].priority;
		};

		let indexAux = this.elements.length - 1;
		while (isElementGreaterThanFather(indexAux)) {
			const indexFather = Math.floor((indexAux + 1) / 2) - 1;
			this.swapElements(indexFather, indexAux);
			indexAux = indexFather;
		}
		return element;
	}

	dequeue() {
		const lastIndex = this.elements.length - 1;
		this.swapElements(0, lastIndex);

		const elementDequeued = { ...this.elements[lastIndex] };
		this.elements.pop();

		const size = this.elements.length;
        const hasMorePriority = (ix1, ix2) =>
    		this.elements[ix1].priority > this.elements[ix2].priority;
		const sortIndexWithItsChildren = indexParent => {
			const indexChild1 = (indexParent + 1) * 2 - 1;
			const indexChild2 = (indexParent + 1) * 2;
			const doesElemExist = elemIndex => elemIndex < size;
			const parentIsTheGreatest =
				doesElemExist(indexChild1) && hasMorePriority(indexParent, indexChild1) &&
				doesElemExist(indexChild2) && hasMorePriority(indexParent, indexChild2);

			if (parentIsTheGreatest) return elementDequeued;
            else if (
                doesElemExist(indexChild2) &&
                hasMorePriority(indexChild2, indexChild1) &&
                hasMorePriority(indexChild2, indexParent)) {
				this.swapElements(indexParent, indexChild2);
				return sortIndexWithItsChildren(indexChild2);
			} else if (doesElemExist(indexChild1) && hasMorePriority(indexChild1, indexParent)) {
				this.swapElements(indexParent, indexChild1);
				return sortIndexWithItsChildren(indexChild1);
			} else return elementDequeued;
		};
		const root = 0;
		return sortIndexWithItsChildren(root);
	}
}

const executeQuickTests = () => {
    console.log('---QUICK TESTS---');

    const emptyPQ = new PriorityQueue();
    console.log(emptyPQ.isEmpty() === true, 'isEmpty() returns true when PQ is empty');

    const myPQ = new PriorityQueue();
    myPQ.enqueue({ name: 'Nico', priority: 1 });
    console.log(myPQ.isEmpty() === false, 'isEmpty() returns false when it has elements');

    console.log(emptyPQ.size() === 0, 'size() returns 0 when PQ is empty');

    const sizebefore = myPQ.size();
    console.log(sizebefore === 1, 'size() returns 1 when has 1 element');

    myPQ.enqueue({ invalidElem: true });
    const sizeAfter = myPQ.size();
    console.log(sizeAfter === 1, 'If isInvalidElement do not enqueue');

    myPQ.enqueue({ name: 'Sherlock', priority: 4 });
    const sizeAfter2 = myPQ.size();
    console.log(sizeAfter2 === 2, 'enqueue() adds valid element');
    console.log(myPQ.elements[0].priority === 4, 'enqueue() sorts element in one level');

    myPQ.enqueue({ name: 'Pepe', priority: 3 });
    console.log(myPQ.elements[2].priority === 3, 'enqueue() does not sort elements if it is not needed');

    myPQ.enqueue({ name: 'John', priority: 1 });
    myPQ.enqueue({ name: 'Katja', priority: 6 });
    console.log(myPQ.elements[0].priority === 6, 'enqueue() sorts element in two levels');

    myPQ.enqueue({ name: 'Sarah', priority: 2 });
    myPQ.enqueue({ name: 'Delfina', priority: 5 });
    myPQ.enqueue({ name: 'Riley', priority: 9 });
    myPQ.enqueue({ name: 'Alexa', priority: 8 });
    myPQ.enqueue({ name: 'Seven', priority: 7 });
    console.log(myPQ.elements[0].priority === 9, 'enqueue() sorts element in three levels');

    console.log(myPQ.dequeue().priority === 9, 'dequeue() returns correctly first element');
    console.log(myPQ.dequeue().priority === 8, 'dequeue() returns correctly second element');
    console.log(myPQ.dequeue().priority === 7, 'dequeue() returns correctly third element');
    console.log(myPQ.dequeue().priority === 6, 'dequeue() returns correctly fourth element');
    console.log(myPQ.dequeue().priority === 5, 'dequeue() returns correctly fifth element');
    console.log(myPQ.dequeue().priority === 4, 'dequeue() returns correctly sixth element');
    console.log(myPQ.dequeue().priority === 3, 'dequeue() returns correctly seventh element');
    console.log(myPQ.dequeue().priority === 2, 'dequeue() returns correctly eighth element');
    console.log(myPQ.dequeue().priority === 1, 'dequeue() returns correctly ninth element');
    console.log(myPQ.dequeue().priority === 1, 'dequeue() returns correctly last element');
    console.log(JSON.stringify(myPQ.dequeue()) === '{}', 'dequeue() of empty PQ returns empty object');
};

executeQuickTests();
