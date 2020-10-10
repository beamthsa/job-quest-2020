function fizzBuzz(value: number): string | boolean {
    const isDivideByThreeAndFive = !(value % 5) && !(value % 3);
    const isDivideByFive = !(value % 5);
    const isDivideByThree = !(value % 3);

    return isDivideByThreeAndFive
        ? 'FizzBuzz'
        : (isDivideByFive ? 'Buzz' : (isDivideByThree ? 'Fizz' : false))
}

export default fizzBuzz;
