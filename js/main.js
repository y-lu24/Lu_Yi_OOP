import { Counter, StepCounter } from './modules/counter.js';

const counter1 = new Counter("#counter-container1");
const counter2 = new Counter('#counter-container2', 5);
const counter3 = new Counter('#counter-container3', 10);
const counter4 = new StepCounter('#counter-container4', 0, 5);