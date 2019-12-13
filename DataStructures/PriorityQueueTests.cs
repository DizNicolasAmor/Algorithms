using DS_Exercises;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject2
{
    [TestClass]
    public class PriorityQueueTests
    {
        private PriorityQueue _myPQ;
        private PriorityQueue _emptyPQ;
        private Element _firstElement;

        public PriorityQueueTests()
        {
            _emptyPQ = new PriorityQueue();
            _myPQ = new PriorityQueue();
            _firstElement = new Element("Nico", 1);

            _myPQ.Enqueue(_firstElement);
        }

        [TestMethod]
        public void IsEmpty_WhenQueueIsEmpty_ShouldReturnTrue()
        {
            Assert.IsTrue(_emptyPQ.IsEmpty());
        }

        [TestMethod]
        public void IsEmpty_WhenQueueHasOneElement_ShouldReturnFalse()
        {
            Assert.IsFalse(_myPQ.IsEmpty());
        }

        [TestMethod]
        public void IsEmpty_WhenQueueHasTwoElements_ShouldReturnFalse()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            Assert.IsFalse(_myPQ.IsEmpty());
        }

        [TestMethod]
        public void Size_WhenQueueIsEmpty_ShouldReturnZero()
        {
            var result = _emptyPQ.Size();
            Assert.AreEqual(result, 0);
        }

        [TestMethod]
        public void Size_WhenQueueHasOneElement_ShouldReturnOne()
        {
            var result = _myPQ.Size();
            Assert.AreEqual(1, result);
        }

        [TestMethod]
        public void Size_WhenQueueHasTwoElements_ShouldReturnTwo()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            var result = _myPQ.Size();
            Assert.AreEqual(2, result);
        }

        [TestMethod]
        public void Peek_WhenQueueIsEmpty_ShouldReturnNull()
        {
            Assert.AreEqual(null, _emptyPQ.Peek());
        }

        [TestMethod]
        public void Peek_WhenQueueHasOneElement_ShouldReturnIt()
        {
            Assert.AreEqual(_firstElement, _myPQ.Peek());
        }

        [TestMethod]
        public void Peek_WhenQueueHasThreeElements_ShouldReturnTheMostPrioritizedOne()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            _myPQ.Enqueue(new Element("Pepe", 3));
            var result = _myPQ.Peek().Priority;
            Assert.AreEqual(4, result);
        }

        [TestMethod]
        public void Peek_WhenQueueHasFiveElements_ShouldReturnTheMostPrioritizedOne()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            _myPQ.Enqueue(new Element("Pepe", 3));
            _myPQ.Enqueue(new Element("John", 1));
            _myPQ.Enqueue(new Element("Katja", 6));
            var result = _myPQ.Peek().Priority;
            Assert.AreEqual(6, result);
        }

        [TestMethod]
        public void Enqueue_WhenQueueHasFiveElements_ShouldAddAndPeekCorrectly()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            Assert.AreEqual(2, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Pepe", 3));
            Assert.AreEqual(3, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("John", 1));
            Assert.AreEqual(4, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Katja", 6));
            Assert.AreEqual(5, _myPQ.Size());
            Assert.AreEqual(6, _myPQ.Peek().Priority);
        }

        [TestMethod]
        public void Enqueue_WhenQueueHasTenElements_ShouldAddAndPeekCorrectly()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            Assert.AreEqual(2, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Pepe", 3));
            Assert.AreEqual(3, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("John", 1));
            Assert.AreEqual(4, _myPQ.Size());
            Assert.AreEqual(4, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Katja", 6));
            Assert.AreEqual(5, _myPQ.Size());
            Assert.AreEqual(6, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Sarah", 2));
            Assert.AreEqual(6, _myPQ.Size());
            Assert.AreEqual(6, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Delfina", 5));
            Assert.AreEqual(7, _myPQ.Size());
            Assert.AreEqual(6, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Riley", 9));
            Assert.AreEqual(8, _myPQ.Size());
            Assert.AreEqual(9, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Alexa", 8));
            Assert.AreEqual(9, _myPQ.Size());
            Assert.AreEqual(9, _myPQ.Peek().Priority);

            _myPQ.Enqueue(new Element("Seven", 7));
            Assert.AreEqual(10, _myPQ.Size());
            Assert.AreEqual(9, _myPQ.Peek().Priority);
        }

        [TestMethod]
        public void Dequeue_WhenQueueIsEmpty_ShouldReturnNull()
        {
            Assert.IsNull(_emptyPQ.Dequeue());
        }

        [TestMethod]
        public void Dequeue_WhenQueueHasOneElement_ShouldReturnIt()
        {
            var result = _myPQ.Dequeue();
            Assert.AreEqual(_firstElement.Name, result.Name);
            Assert.AreEqual(_firstElement.Priority, result.Priority);
        }

        [TestMethod]
        public void Dequeue_WhenQueueHasThreeElements_ShouldReturnTheGreatest()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            _myPQ.Enqueue(new Element("Pepe", 3));

            Assert.AreEqual(4, _myPQ.Dequeue().Priority);
            Assert.AreEqual(3, _myPQ.Dequeue().Priority);
            Assert.AreEqual(1, _myPQ.Dequeue().Priority);
        }

        [TestMethod]
        public void Dequeue_WhenQueueHasTenElements_DequeuesThemInCorrectOrder()
        {
            _myPQ.Enqueue(new Element("Sherlock", 4));
            _myPQ.Enqueue(new Element("Pepe", 3));
            _myPQ.Enqueue(new Element("John", 1));
            _myPQ.Enqueue(new Element("Katja", 6));
            _myPQ.Enqueue(new Element("Sarah", 2));
            _myPQ.Enqueue(new Element("Delfina", 5));
            _myPQ.Enqueue(new Element("Riley", 9));
            _myPQ.Enqueue(new Element("Alexa", 8));
            _myPQ.Enqueue(new Element("Seven", 7));

            Assert.AreEqual(9, _myPQ.Dequeue().Priority);
            Assert.AreEqual(8, _myPQ.Dequeue().Priority);
            Assert.AreEqual(7, _myPQ.Dequeue().Priority);
            Assert.AreEqual(6, _myPQ.Dequeue().Priority);
            Assert.AreEqual(5, _myPQ.Dequeue().Priority);
            Assert.AreEqual(4, _myPQ.Dequeue().Priority);
            Assert.AreEqual(3, _myPQ.Dequeue().Priority);
            Assert.AreEqual(2, _myPQ.Dequeue().Priority);
            Assert.AreEqual(1, _myPQ.Dequeue().Priority);
            Assert.AreEqual(1, _myPQ.Dequeue().Priority);
        }
    }
}
