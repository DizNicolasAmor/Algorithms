using System;
using System.Collections.Generic;
using System.Linq;

namespace DS_Exercises
{
    public class Element
    {
        public string Name { get; set; }
        public int Priority { get; set; }

        public Element(string name, int priority)
        {
            this.Name = name;
            this.Priority = priority;
        }

        public Element Clone()
        {
            return this.MemberwiseClone() as Element; 
        }
    }

    public class PriorityQueue
    {
        private List<Element> _elements;

        public PriorityQueue()
        {
            _elements = new List<Element>();
        }

        private void swapElements(int indexFirst, int indexLast)
        {
            Element aux = _elements[indexFirst];
            _elements[indexFirst] = _elements[indexLast];
            _elements[indexLast] = aux;
        }

        public bool IsEmpty()
        {
            return this._elements.Count() == 0;
        }

        public int Size()
        {
            return this._elements.Count();
        }

        public Element Peek()
        {
            return this.IsEmpty() ? null : _elements[0];
        }

        public Element Enqueue(Element elem)
        {
            _elements.Add(elem);

            bool isElementGreaterThanFather(int ix) {
                float auxIxFather = ((ix + 1) / 2) - 1;
                int ixFather = (int) Math.Floor(auxIxFather);
                if (ixFather< 0) {
                    return false;
                }
                return _elements[ix].Priority > _elements[ixFather].Priority;
            };

            int indexAux = _elements.Count() - 1;
            while (isElementGreaterThanFather(indexAux))
            {
                float auxIndexFather = ((indexAux + 1) / 2) - 1;
                int indexFather = (int) Math.Floor(auxIndexFather);
                this.swapElements(indexFather, indexAux);
                indexAux = indexFather;
            }
            return elem;
        }

        public Element Dequeue()
        {
            if (this.IsEmpty())
            {
                return null;
            }

            int _lastIndex =  _elements.Count() - 1;
            this.swapElements(0, _lastIndex);

            Element elementDequeued = _elements[_lastIndex].Clone();
            _elements.RemoveAt(_lastIndex);

            int _size = _elements.Count();
            bool _hasMorePriority(int ix1, int ix2) =>
                    _elements[ix1].Priority > _elements[ix2].Priority;

            Element _sortIndexWithItsChildren(int indexParent) {
                int indexChild1 = (indexParent + 1) * 2 - 1;
                int indexChild2 = (indexParent + 1) * 2;
                bool doesElemExist(int elemIndex) => elemIndex < _size;
                bool _isParentTheGreatest =
                    doesElemExist(indexChild1) && _hasMorePriority(indexParent, indexChild1) &&
                    doesElemExist(indexChild2) && _hasMorePriority(indexParent, indexChild2);

                if (_isParentTheGreatest)
                {
                    return elementDequeued;
                }

                else if (
                    doesElemExist(indexChild2) &&
                    _hasMorePriority(indexChild2, indexChild1) &&
                    _hasMorePriority(indexChild2, indexParent))
                {
                    this.swapElements(indexParent, indexChild2);
                    return _sortIndexWithItsChildren(indexChild2);
                }
                else if (doesElemExist(indexChild1) && _hasMorePriority(indexChild1, indexParent))
                {
                    this.swapElements(indexParent, indexChild1);
                    return _sortIndexWithItsChildren(indexChild1);
                }
                else
                {
                    return elementDequeued;
                }
            };

            const int _root = 0;
            return _sortIndexWithItsChildren(_root);
        }
    }
}
