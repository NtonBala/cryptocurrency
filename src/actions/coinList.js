import * as types from '../constants/actionTypes';

export const requestCoinList = () => ({
    type: types.REQUEST_COIN_LIST
});

export const receiveCoinList = (coinList) => ({
    type: types.REQUEST_COIN_LIST,
    coinList
});

export const errorOnCoinListFetch = (error) => ({
    type: types.ERROR_ON_COIN_LIST_FETCH,
    error
});
