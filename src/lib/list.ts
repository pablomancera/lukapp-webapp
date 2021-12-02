export interface Node<T> {
	key: T;
	next: Node<T> | null;
	prev: Node<T> | null;
}

export class List<T> {
	head: Node<T> | null;
	tail: Node<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	pushFront(key: T): void {		
		let newData: Node<T> = {
			key: key,
			next: this.head,
			prev: null
		};

		if (this.isEmpty()) {
			this.head = this.tail = newData;
		} else {
			this.head!.prev = newData;
			this.head = newData;
		}
	}

	topFront(): Node<T> | null {
		return this.head;
	}

	popFront(): void {
		if (this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			this.head = this.head!.next;
			this.head!.prev = null;
		}
	}

	pushBack(key: T): void {
		let newData: Node<T> = {
			key: key,
			next: null,
			prev: this.tail
		}
		if (this.isEmpty()) {
			this.head = this.tail = newData;
		} else {
			this.tail!.next = newData;
			this.tail = this.tail!.next;
		}
	}
	
	topBack(): Node<T> | null {
		return this.tail;
	}
	
	popBack(): void {
		if (this.head === this.tail) {
			this.head = this.tail = null;
		} else {
			this.tail = this.tail!.prev
			this.tail!.next = null;
		}	
	}
	
	findKey(key: T): boolean {
		let data = this.head;
		while (data) {
			if (data.key == key) {
				return true;
			}
			data = data.next;
		}
		return false;
	}
	
	get(index: Number): Node<T> | null {
		let data = this.head;
		for (let i = 0; i < index; i++) {
			if (data === null) {
				return null;
			}
			data = data.next;
		}
		return data;
	}
	
	delete(index: Number): void {
		let data = this.get(index);
		if (data === null) return;
		if (data === this.head) {
			this.head = data.next;
		} else if (data === this.tail) {
			this.tail = data.prev;
		} else {
			data.prev!.next = data.next;
			data.next!.prev = data.prev;
		}
	}
	
	addBefore(index: Number, key: T): void {
		let oldData = this.get(index);
		let newData: Node<T> = {
			key: key,
			next: null,
			prev: null
		}
		if (oldData === null) return;
		if (oldData === this.head) {
			this.pushFront(key);
		} else {
			newData.prev = oldData.prev;
			newData.next = oldData;
			oldData.prev!.next = newData;
			oldData.prev = newData;
		}
	}
	
	addAfter(index: Number, key: T): void {
		let oldData = this.get(index);
		let newData: Node<T> = {
			key: key,
			next: null,
			prev: null
		}
		if (oldData === null) return;
		if (oldData === this.tail) {
			this.pushBack(key);
		} else {
			newData.prev = oldData;
			newData.next = oldData.next;
			oldData.next!.prev = newData;
			oldData.next = newData;
		}
	}

	isEmpty(): boolean {
		return this.head ? false : true;
	}
}

let list = new List<number>();

let startTime = performance.now();
for (let i = 0; i <= 10000; i++) {
	list.pushBack(i);
}
let endTime = performance.now();

console.log("adding (List pushBack) 10.000 expenses took " + (endTime-startTime) + "milliseconds");

let max = list.topBack()!.key;

startTime = performance.now();
for (let i = 0; i <= 100000; i++) {
	list.pushBack(max + i);
}
endTime = performance.now();

console.log("adding (List pushBack) 100.000 expenses took " + (endTime-startTime) + " milliseconds");

max = list.topBack()!.key;

startTime = performance.now();
for (let i = 0; i <= 1000000; i++) {
	list.pushBack(max + i);
}
endTime = performance.now();

console.log("adding (List pushBack) 1'000.000 expenses took " + (endTime-startTime) + " milliseconds");

startTime = performance.now();
for (let i = 0; i < 10000; i++) {
	list.pushFront(max + i);
}
endTime = performance.now();

console.log("\nadding (List pushFront) 10.000 expenses took " + (endTime-startTime) + " milliseconds");

startTime = performance.now();
for (let i = 0; i < 100000; i++) {
	list.pushFront(max + i);
}
endTime = performance.now();

console.log("adding (List pushFront) 100.000 expenses took " + (endTime-startTime) + " milliseconds");


startTime = performance.now();
for (let i = 0; i < 1000000; i++) {
	list.pushFront(max + i);
}
endTime = performance.now();

console.log("adding (List pushFront) 1'000.000 expenses took " + (endTime-startTime) + " milliseconds");

max = list.topBack()!.key;
console.log("\nLooking for number " + max + " in list (list findKey)");
startTime = performance.now();
if (list.findKey(max)) {
	endTime = performance.now();
	console.log("Found, took " + (endTime-startTime) + " milliseconds");
} else {
	endTime = performance.now();
	console.log("Not found, took " + (endTime-startTime) + " milliseconds");
}

startTime = performance.now();
while (!list.isEmpty()) {
	list.popBack();
}
endTime = performance.now();
console.log("\nDeleted every list's node one by one (list pushBack), took " + (endTime-startTime) + " milliseconds");
