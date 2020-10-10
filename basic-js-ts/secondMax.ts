function secondMax(data: number[]): number {
    if (data && data.length) {
        const maxNumber = Math.max(...data);
        const restData = data.filter(value => value !== maxNumber);

        return restData.length === 0 ? maxNumber : Math.max(...restData);
    }

    throw Error('Error!');
}

export default secondMax;
