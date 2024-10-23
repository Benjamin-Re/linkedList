import node from './node.js'

const linkedList = () => {
    let head = node(null, null, null);

    const append = (value) => {
        let newNode = node(value, null, null);
        if(head.next === null) {
            head.next = newNode;
            newNode.prev = head;
        } else {
            let temp = head
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
            newNode.prev = temp;
        }
    }

    const prepend = (value) => {
        let newNode = node(value, head.next, head);
        if(head.next !== null) {
            // When the list is not empty
            head.next.prev = newNode;
        }
        head.next = newNode;
    }

    const printValues = () => {
        /*head -> prev|ONE|next-> prev|TWO|next -> null */
        //                      t
        let temp = head
        while(temp.next !== null) {
            temp = temp.next;
            console.log(temp.value);
        }
        console.log("--------------")
    }

    const size = () => {
        let count = 0;
        let temp = head
        while(temp.next !== null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    const first = () => {
        return head.next;
    }

    const tail = () => {
        let temp = head
        while(temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }

    const at = (index) => {
        /*head -> prev|ONE|next -> prev|TWO|next -> prev|THREE|next -> null */
        //                                                              t
        let temp = head
        while(index >= 0) {
            if(temp === null) {
                // if temp is null it doesn't have a next so throw meaningful error
                throw new Error("Index out of bounds")
            }
            temp = temp.next;
            index--;
        }
        if(temp === null) {
            // if temp is null the list is empty or we have gone too far so throw meaningful error
            throw new Error("Index out of bounds")
        }
        return temp;
    }

    const pop = () => {
        let temp = head;
        while(temp.next !== null) {
            temp = temp.next;
        }
        temp.prev.next = null;
    }

    const contains = (value) => {
        let isContained = false;
        let temp = head;
        while(temp.next !== null && !isContained) {
            temp = temp.next;
            if(temp.value === value) {
                isContained = true;
            }
        }
        return isContained;
    }

    const find = (value) => {
        let index = -1;
        let temp = head;
        let isContained = false;
        while(temp.next !== null && !isContained) {
            temp = temp.next;
            if(temp.value === value) {
                isContained = true;
            }
            index++;
        }
        if(isContained) {
            return index;
        } else {
            return -1;
        }
    }

    const toString = () => {
        let outStr = "";
        let temp = head;
        while(temp.next !== null) {
            temp = temp.next;
            outStr += `( ${temp.value} ) -> `;
        }
        console.log(`${outStr} null`)
    }

    const insertAt = (value, i) => {
        /*head -> prev|ONE|next -> prev|TWO|next -> prev|THREE|next -> null */
        //                                              t, i = 0
        let temp = head;
        while(temp.next !== null && i > 0) {
            temp = temp.next;
            i--;
        }
        let newNode = node(value, temp.next, temp);
        if(temp.next !== null) {
            // Only if not inserting at the end
            temp.next.prev = newNode;
        }
        temp.next = newNode;
    }

    const removeAt = (i) => {
    /*head -> prev|ONE|next -> prev|TWO|next -> prev|THREE|next -> null */
    // t, i = 0
        let temp = head;
        if(temp.next === null) {
            throw new Error("Can't delet form empty list");
        }
        while(temp.next !== null && i > 0) {
            temp = temp.next;
            i--;
        }
        temp.next = temp.next.next;
        if(temp.next !== null) {
            // only if elem is not at the end
            temp.next.prev = temp;
        }
    }

    return {
        head: head,
        append: append,
        prepend: prepend,
        printValues: printValues,
        size: size,
        first: first,
        tail: tail,
        at: at,
        pop: pop,
        contains: contains,
        find: find,
        toString: toString,
        insertAt: insertAt,
        removeAt: removeAt, 
    }

}

export default linkedList