export default {
    extractData: res => res.data,
    delay(ms) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms)
        });
    }
};
