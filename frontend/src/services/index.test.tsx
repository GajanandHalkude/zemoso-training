import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  fetchAllCrtptoCurrenices,
  fetchCrtptoCurrenicyById,
  fetchWallet,
  updateWallet,
  fetchTransactions,
  addTransaction,
  removeWatchList,
  addWatchList,
  addUser,
  resetUserPassword,
  getUserByEmail,
  getGraphData,
} from '.';
import { url } from '../constants';

describe('API Test', () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it('fetches all cryptocurrencies', async () => {
    const mockData = [
      { id: 1, name: 'Bitcoin' },
      { id: 2, name: 'Ethereum' },
    ];
    mockAxios.onGet(`${url}/currency`).reply(200, mockData);

    const response = await fetchAllCrtptoCurrenices();

    expect(response).toEqual(mockData);
  });

  it('fetches a currency by ID', async () => {
    const id = '1';
    const mockData = { id: 1, name: 'Bitcoin' };
    mockAxios.onGet(`${url}/currency/${id}`).reply(200, mockData);
    const response = await fetchCrtptoCurrenicyById(id);
    expect(response).toEqual(mockData);
  });

  it('fetches a wallet by ID', async () => {
    const id = '1';
    const token = 'your-token';
    const mockData = { id: 1, balance: 100 };
    mockAxios.onGet(`${url}/users/1/wallets/${id}`).reply(200, mockData);

    const response = await fetchWallet(id);

    expect(response).toEqual(mockData);
  });

  it('updates a wallet', async () => {
    const id = 'cash';
    const wallet = {
      id: 'cash',
      name: 'Cash',
      balance: 67707.31,
      avgValue: 1,
      investedAmount: 67707.31,
    };
    const token ="token_no"; 
    mockAxios.onPatch(`${url}/users/1/wallets/${id}`).reply(200);
    await updateWallet(id, wallet);
    expect(JSON.parse(mockAxios.history.patch[0].data)).toEqual(wallet);
  });

  it('fetches transactions', async () => {
    const token = 'your-token';
    const mockData = [
      { id: 1, currency: 'Bitcoin', amount: 0.1 },
      { id: 2, currency: 'Ethereum', amount: 1.5 },
    ];
    mockAxios.onGet(`${url}/users/1/transactions/`).reply(200, mockData);
    const response = await fetchTransactions();
    expect(response).toEqual(mockData);
  });

  it('adds a transaction', async () => {
    const transaction = {
      id: 1,
      currencyId: 'bitcoin',
      date: new Date().toISOString(),
      quantity: 0.248,
      symbol: 'BTC',
      type: 'sell',
      price: 18707.31,
      status: 'success',
      transactionPerson: 'Sai',
    };
    const token = 'your-token';
    mockAxios.onPost(`${url}/users/1/transactions/`).reply(201);

    await addTransaction(transaction);
    expect(JSON.parse(mockAxios.history.post[0].data)).toEqual(transaction);
  });

 it('fetches the watchlist', async () => {
  const token = 'your-token';
  const mockData = [
    { id: 'BTC', name: 'Bitcoin' },
    { id: 'ETH', name: 'Ethereum' },
  ];
  mockAxios.onGet(`${url}/users/1/watchlist`).reply(200, mockData);
});

it('removes a coin from the watchlist', async () => {
  const coinId = 'BTC';
  const token = 'your-token';
  mockAxios.onDelete(`${url}/users/1/watchlist/${coinId}`).reply(204);

  await removeWatchList(coinId);
  expect(mockAxios.history.delete[0].url).toEqual(
    `${url}/users/1/watchlist/${coinId}`
  );
});
  it('removes a coin from the watchlist', async () => {
    const coinId = 'BTC';
    const token = 'your-token';
    mockAxios.onDelete(`${url}/users/1/watchlist/${coinId}`).reply(204);

    await removeWatchList(coinId);
    expect(mockAxios.history.delete[0].url).toEqual(
      `${url}/users/1/watchlist/${coinId}`
    );
  });

  it('adds a coin to the watchlist', async () => {
    const coin = 'BTC';
    const token = 'your-token';
    mockAxios.onPost(`${url}/users/1/watchlist`).reply(201);

    await addWatchList(coin);
    expect(mockAxios.history.post[0].data).toEqual(coin);
  });

  it('adds a user', async () => {
    const email = 'test@example.com';
    const name = 'Test User';
    const password = 'password';
    const avatar = 'avatar';
    const userData = { email, name, password, avatar };

    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: userData });

    const response = await addUser(email, name, password);
    expect(response).toEqual(userData);
    expect(axios.post).toHaveBeenCalledWith(`${url}/users/register/`, {
      email,
      name,
      password,
      avatar,
    });
  });

  it('resets a user password', async () => {
    const password = 'newpassword';
    mockAxios.onPatch(`${url}/users/1/reset-password`).reply(200);

    await resetUserPassword(password);
    expect(mockAxios.history.patch[0].data).toEqual(password);
  });

  it('fetches a user by email', async () => {
    const email = 'test@example.com';
    const token = 'your-token';
    const mockData = { id: 1, email, name: 'Test User' };
    mockAxios
      .onGet(`${url}/users/email/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .reply(200, mockData);

    const response = await getUserByEmail(email);

    expect(response).toEqual(mockData);
  });

  it('fetches graph data by ID', async () => {
    const id = 'bitcoin';
    const mockData = {
      prices: [[1625827200000, 32835.56], [1625913600000, 33126.89]],
      market_caps: [[1625827200000, 615098600000], [1625913600000, 622274500000]],
      total_volumes: [[1625827200000, 35753400000], [1625913600000, 37629900000]],
    };
    mockAxios
      .onGet(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`
      )
      .reply(200, mockData);

    const response = await getGraphData(id);

    expect(response).toEqual(mockData);
  });

  it('logs in a user', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const mockData = { id: 1, email, name: 'Test User', token: 'jwt-token' };
    mockAxios.onPost(`${url}/users/login/`).reply(200, mockData);
  });
});
