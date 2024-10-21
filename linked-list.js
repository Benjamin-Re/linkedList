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
        head.next.prev = newNode;
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
        let temp = head
        while(temp.next !== null) {
            temp = temp.next;
        }
        temp.prev.next = null;
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
    }

}

export default linkedList