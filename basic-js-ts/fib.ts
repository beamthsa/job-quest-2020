function fib(value: number): number {
    const filledArray = [...new Array(value + 1)].map(() => null);
    const fibonacciNumbers = filledArray.reduce((accumulator, _currentValue, index) => {
        const calculatedValue = index < 2 ? index : accumulator[index - 1] + accumulator[index - 2];
        return [...accumulator, calculatedValue];
    }, []);

    return fibonacciNumbers[fibonacciNumbers.length - 1];
}

export default fib;
