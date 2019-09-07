import { argumentIstEmpty, argumentIstZero } from '../validateArgs';
import divide from './divide';

const checks = [
    argumentIstEmpty(0),
    argumentIstEmpty(1),
    argumentIstZero(1),
];

const safeDivide = checks
    .reverse()
    .reduce((prev, check) => check(prev), divide);

export default safeDivide;
