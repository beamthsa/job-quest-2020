import {useState} from 'react';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import ApiHelpers from '../helpers/api';
import API from '../constants/api';

const instance = axios.create({
    baseURL: API.HOST
});

const DEFAULT_STATE = {
    DATA: [],
    AMOUNT: 0,
    IS_LOADING: false
};

function useJoke() {
    const [data, setData] = useState(DEFAULT_STATE.DATA);
    const [isFetching, setFetching] = useState(DEFAULT_STATE.IS_LOADING);

    async function fetchData(value) {
        try {
            setFetching(!DEFAULT_STATE.IS_LOADING);
            const response = await instance.get(`${API.URL.GET_RANDOM}/${value}`)
                .then(ApiHelpers.extractData);

            await ApiHelpers.delay(1000);
            setFetching(DEFAULT_STATE.IS_LOADING);

            const responseValue = get(response, 'value', []);
            if (isEmpty(responseValue)) {
                return Promise.resolve();
            }

            return Promise.resolve(responseValue);
        } catch (error) {
            setFetching(DEFAULT_STATE.IS_LOADING);
            return Promise.reject(error);
        }
    }

    async function updateAmount(value) {
        try {
            const responseValue = await fetchData(value);
            setData(responseValue);
            return Promise.resolve(responseValue);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    return {
        data,
        isFetching,
        updateAmount
    };
}

export default useJoke;
