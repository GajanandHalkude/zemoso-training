import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  fetchAllCrtptoCurrenices,
  fetchCrtptoCurrenicyById,
  fetchWallet,
  updateWallet,
  addTransaction,
  fetchWatchList,
  removeWatchList,
  addWatchList,
  addUser,
  resetUserPassword,
  getUserByEmail,
  fetchTransactions,
  getGraphData
} from ".";
import { url } from "../constants";

describe("API Test", () => {
  let mockAxios: MockAdapter;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("fetches all cryptocurrencies", async () => {
    const mockData = [
      { id: 1, name: "Bitcoin" },
      { id: 2, name: "Ethereum" },
    ];
    mockAxios
      .onGet(`${url}/currency`)
      .reply(200, mockData);

    const response = await fetchAllCrtptoCurrenices();

    expect(response).toEqual(mockData);
  });

  it("fetches a currency by ID", async () => {
    const id = "1";
    const mockData = { id: 1, name: "Bitcoin" };
    mockAxios
      .onGet(`${url}/currency/${id}`)
      .reply(200, mockData);

    const response = await fetchCrtptoCurrenicyById(id);

    expect(response).toEqual(mockData);
  });

  it("fetches a wallet by ID", async () => {
    const id = "1";
    const mockData = { id: 1, balance: 100 };
    mockAxios.onGet(`${url}/users/1/wallets/${id}`).reply(200, mockData);

    const response = await fetchWallet(id);

    expect(response).toEqual(mockData);
  });

  it("updates a wallet", async () => {
    const id = "cash";
    const wallet = {
      id: "cash",
      name: "Cash",
      balance: 67707.31,
      avgValue: 1,
      investedAmount: 67707.31
    };
    mockAxios.onPatch(`${url}/users/1/wallets/${id}`).reply(200);

    await updateWallet(id, wallet);
    expect(JSON.parse(mockAxios.history.patch[0].data)).toEqual(wallet);
  });

  it("adds a transaction", async () => {
   const transaction = {
     id: 1,
     currencyId: "bitcoin",
     date: new Date().toISOString(),
     quantity: 0.248,
     symbol: "BTC",
     type: "sell",
     price: 18707.31,
     status: "success",
     transactionPerson: "Sai",
   };
    mockAxios.onPost(`${url}/users/1/transactions/`).reply(201);

    await addTransaction(transaction);
    expect(JSON.parse(mockAxios.history.post[0].data)).toEqual(transaction);
  });

  it("fetches the watchlist", async () => {
    const mockData = [{ id: "BTC" }, { id: "ETH" }];
    mockAxios.onGet(`${url}/users/1/watchlist`).reply(200, mockData);

    const response = await fetchWatchList();

    expect(response).toEqual(mockData);
  });

  it("removes a coin from the watchlist", async () => {
    const coin_id = "BTC";
    mockAxios.onDelete(`${url}/users/1/watchlist/${coin_id}`).reply(204);

    await removeWatchList(coin_id);
    expect(mockAxios.history.delete[0].url).toEqual(
      `${url}/users/1/watchlist/${coin_id}`
    );
  });

  it("adds a coin to the watchlist", async () => {
    const coin = "BTC";
    mockAxios.onPost(`${url}/users/1/watchlist`).reply(201);

    await addWatchList(coin);
    expect(mockAxios.history.post[0].data).toEqual(coin);
  });

  it("adds a user", async () => {
    const email = "test@example.com";
    const name = "Test User";
    const password = "password";
    const avatar = "avatar";
    const userData = { email, name, password, avatar };
  
    jest.spyOn(axios, 'post').mockResolvedValueOnce({ data: userData });
  
    await addUser(email, name, password);
    expect(axios.post).toHaveBeenCalledWith(`${url}/users/`, userData);
  });

  it("resets a user password", async () => {
    const password = "newpassword";
    mockAxios.onPatch(`${url}/users/1/reset-password`).reply(200);

    await resetUserPassword(password);
    expect(mockAxios.history.patch[0].data).toEqual( password );
  });

  it("handles an error when fetching all cryptocurrencies", async () => {
    mockAxios
      .onGet(`${url}/currency`)
      .reply(500, "Request failed with status code 500");

    await expect(fetchAllCrtptoCurrenices()).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when fetching a currency by ID", async () => {
    const id = "123";
    mockAxios
      .onGet(`${url}/currency/${id}`)
      .reply(404, "Request failed with status code 404");

    await expect(fetchCrtptoCurrenicyById(id)).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

  it("handles an error when fetching a wallet by ID", async () => {
    const id = "456";
    mockAxios
      .onGet(`${url}/users/1/wallets/${id}`)
      .reply(400, "Request failed with status code 400");

    await expect(fetchWallet(id)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it('should return the data from the API', async () => {
    const mockData = [{ id: 1, name: 'Transaction 1' }, { id: 2, name: 'Transaction 2' }];
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockData });

    const result = await fetchTransactions();

    expect(result).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(`${url}/users/1/transactions/`);
  });

  it('should throw an error if the API request fails', async () => {
    const errorMessage = 'Failed to fetch transactions.';
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchTransactions()).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(`${url}/users/1/transactions/`);
  });

  it("handles an error when updating a wallet", async () => {
    const id = "456";
    const wallet = {
      id: "cash",
      name: "Cash",
      balance: 67707.31,
      avgValue: 1,
      investedAmount: 67707.31,
    };
    mockAxios
      .onPatch(`${url}/users/1/wallets/${id}`)
      .reply(500, "Request failed with status code 500");

    await expect(updateWallet(id, wallet)).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when adding a transaction", async () => {
    const transaction = {
      id: 1,
      currencyId: "bitcoin",
      date: new Date("2022-06-14"),
      quantity: 0.248,
      symbol: "BTC",
      type: "sell",
      price: 18707.31,
      status: "success",
      transactionPerson: "Sai",
    };
    mockAxios
      .onPost(`${url}/users/1/transactions/`)
      .reply(400, "Request failed with status code 400");

    await expect(addTransaction(transaction)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when fetching the watchlist", async () => {
    mockAxios
      .onGet(`${url}/users/1/watchlist`)
      .reply(404, "Request failed with status code 404");

    await expect(fetchWatchList()).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

  it("handles an error when removing an item from the watchlist", async () => {
    const coinId = "789";
    mockAxios
      .onDelete(`${url}/users/1/watchlist/${coinId}`)
      .reply(500, "Request failed with status code 500");

    await expect(removeWatchList(coinId)).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when adding an item to the watchlist", async () => {
    const coin = "BTC";
    mockAxios
      .onPost(`${url}/users/1/watchlist`)
      .reply(400, "Request failed with status code 400");

    await expect(addWatchList(coin)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when adding a user", async () => {
    const email = "test@example.com";
    const name = "John Doe";
    const password = "password";
    const mockError = new Error("Request failed with status code 500");
  
    jest.spyOn(axios, 'post').mockRejectedValueOnce(mockError);
  
    await expect(addUser(email, name, password)).rejects.toThrowError(mockError);
  });

  it("handles an error when resetting a user password", async () => {
    const password = "newPassword";
    mockAxios
      .onPatch(`${url}/users/1`)
      .reply(404, "Request failed with status code 404");

    await expect(resetUserPassword(password)).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

  it("handles an error when fetching a user by email", async () => {
    const email = "test@example.com";
    mockAxios
      .onGet(`${url}/users`, { params: { email } })
      .reply(404, "Request failed with status code 404");

    await expect(getUserByEmail(email)).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });
  it("handles an error when fetching a graphData by ID", async () => {
    const id = "bitcoin";
    mockAxios
      .onGet(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`)
      .reply(400, "Request failed with status code 400");

    await expect(getGraphData(id)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

});