export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue; 
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.incrementBtn = document.createElement("button");
        this.decrementBtn = document.createElement("button");
        this.resetBtn = document.createElement("button");

        //set button text 
        this.incrementBtn.textContent = "Increment"; 
        this.decrementBtn.textContent = "Decrement";
        this.resetBtn.textContent = "Reset";

        //Append display and buttons into the container 
        container.appendChild(this.display);
        container.appendChild(this.incrementBtn);
        container.appendChild(this.decrementBtn);
        container.appendChild(this.resetBtn);

        //Add Event Listeners
        this.incrementBtn.addEventListener("click", () => this.increment());  
        this.decrementBtn.addEventListener("click", () => this.decrement());
        this.resetBtn.addEventListener("click", () => this.reset());

        //when this first gets mounted update the display
        this.update();
    }

    //state methods 
    increment() {
        this.count++;
        this.update(); 
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
            this.update();
        }
    }

    reset() {
        this.count = 0;
        this.update();
    }

    update() {
        //set initial display content 
        this.display.textContent = `Count: ${this.count}`;
        this.decrementBtn.classList.toggle("btn--inactive", this.count === 0);
        this.resetBtn.classList.toggle("btn--inactive", this.count === 0);
    }
}

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step;
    }

    increment() {
        this.count += this.step;
        this.update();
    }

    decrement() {
        if (this.count - this.step >= 0) {
            this.count -= this.step;
        } else {
            this.count = 0;
        }
        this.update();
    }
}