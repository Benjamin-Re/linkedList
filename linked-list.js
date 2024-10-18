import node from './node.js'

const linkedList = () => {
    let head = node(null, null);

    const append = (value) => {
        let newNode = node(value, null);
        if(head.next === null) {
            head.next = newNode;
        } else {
            let temp = head
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    const printValues = () => {
        /*head -> ONE|next-> TWO|next -> null */
        //                      t
        let temp = head
        while(temp.next !== null) {
            temp = temp.next;
            console.log(temp.value);
        }
    }
    return {
        head: head,
        append: append,
        printValues: printValues,
    }

}

export default linkedList