class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function printReverseLinkedList(head) {
    if (!head) return; // If the head is null, the list is empty
    const stack = [];
    let current = head;

    // Push elements onto the stack
    while (current) {
        stack.push(current.data);
        current = current.next;
    }
    // Pop elements from the stack to print in reverse order
    while (stack.length > 0) {
        console.log(stack.pop());
    }
}

// Example usage:
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);

console.log('Elements of linked list in reverse order:');
printReverseLinkedList(list);