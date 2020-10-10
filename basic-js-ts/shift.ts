type Data = any;

function shift(data: Data[], direction: 'left' | 'right', shiftIndex: number): Data[] {
    if (direction === 'left') {
        const dataToShift: Data[] = data.splice(0, shiftIndex);
        return [...data, ...dataToShift];
    }

    if (direction === 'right') {
        const dataToShift: Data[] = data.splice(data.length - shiftIndex, shiftIndex);
        return [...dataToShift, ...data];
    }

    return data;
}

export default shift;
