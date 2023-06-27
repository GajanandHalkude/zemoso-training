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
} from "./library";

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
      .onGet("http://localhost:3001/cryptocurrency")
      .reply(200, mockData);

    const response = await fetchAllCrtptoCurrenices();

    expect(response).toEqual(mockData);
  });

  it("fetches a cryptocurrency by ID", async () => {
    const id = "1";
    const mockData = { id: 1, name: "Bitcoin" };
    mockAxios
      .onGet(`http://localhost:3001/cryptocurrency/${id}`)
      .reply(200, mockData);

    const response = await fetchCrtptoCurrenicyById(id);

    expect(response).toEqual(mockData);
  });

  it("fetches a wallet by ID", async () => {
    const id = "1";
    const mockData = { id: 1, balance: 100 };
    mockAxios.onGet(`http://localhost:3001/wallet/${id}`).reply(200, mockData);

    const response = await fetchWallet(id);

    expect(response).toEqual(mockData);
  });

  it("updates a wallet", async () => {
    const id = "cash";
    const wallet = {
      id: "cash",
      name: "Cash",
      balance: 67707.31,
      avg_value: 1,
      invested_amount: 67707.31
    };
    mockAxios.onPatch(`http://localhost:3001/wallet/${id}`).reply(200);

    await updateWallet(id, wallet);
    expect(JSON.parse(mockAxios.history.patch[0].data)).toEqual(wallet);
  });

  it("adds a transaction", async () => {
   const transaction = {
     id: 1,
     cryptoId: "bitcoin",
     transactionDateTime: "2022-06-14",
     quantity: 0.248,
     symbol: "BTC",
     transactionType: "sell",
     price: 18707.31,
     status: "success",
     from: "Sai",
   };
    mockAxios.onPost("http://localhost:3001/transactions/").reply(201);

    await addTransaction(transaction);
    expect(JSON.parse(mockAxios.history.post[0].data)).toEqual(transaction);
  });

  it("fetches the watchlist", async () => {
    const mockData = [{ id: "BTC" }, { id: "ETH" }];
    mockAxios.onGet("http://localhost:3001/watchlist/").reply(200, mockData);

    const response = await fetchWatchList();

    expect(response).toEqual(mockData);
  });

  it("removes a coin from the watchlist", async () => {
    const coin_id = "BTC";
    mockAxios.onDelete(`http://localhost:3001/watchlist/${coin_id}`).reply(204);

    await removeWatchList(coin_id);
    expect(mockAxios.history.delete[0].url).toEqual(
      `http://localhost:3001/watchlist/${coin_id}`
    );
  });

  it("adds a coin to the watchlist", async () => {
    const coin = "BTC";
    mockAxios.onPost("http://localhost:3001/watchlist/").reply(201);

    await addWatchList(coin);
    expect(JSON.parse(mockAxios.history.post[0].data)).toEqual({ id: coin });
  });

  it("adds a user", async () => {
    const email = "test@example.com";
    const name = "Test User";
    const password = "password";
    mockAxios.onPost("http://localhost:3001/users/").reply(201);

    await addUser(email, name, password);
    expect(JSON.parse(mockAxios.history.post[0].data)).toEqual({ email, name, password });
  });

  it("resets a user password", async () => {
    const password = "newpassword";
    mockAxios.onPatch("http://localhost:3001/users/").reply(200);

    await resetUserPassword(password);
    expect(JSON.parse(mockAxios.history.patch[0].data)).toEqual({ password });
  });

  it("handles an error when fetching all cryptocurrencies", async () => {
    mockAxios
      .onGet("http://localhost:3001/cryptocurrency")
      .reply(500, "Request failed with status code 500");

    await expect(fetchAllCrtptoCurrenices()).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when fetching a cryptocurrency by ID", async () => {
    const id = "123";
    mockAxios
      .onGet(`http://localhost:3001/cryptocurrency/${id}`)
      .reply(404, "Request failed with status code 404");

    await expect(fetchCrtptoCurrenicyById(id)).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

  it("handles an error when fetching a wallet by ID", async () => {
    const id = "456";
    mockAxios
      .onGet(`http://localhost:3001/wallet/${id}`)
      .reply(400, "Request failed with status code 400");

    await expect(fetchWallet(id)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when updating a wallet", async () => {
    const id = "456";
    const wallet = {
      id: "cash",
      name: "Cash",
      balance: 67707.31,
      avg_value: 1,
      invested_amount: 67707.31,
    };
    mockAxios
      .onPatch(`http://localhost:3001/wallet/${id}`)
      .reply(500, "Request failed with status code 500");

    await expect(updateWallet(id, wallet)).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when adding a transaction", async () => {
    const transaction = {
      id: 1,
      cryptoId: "bitcoin",
      transactionDateTime: "2022-06-14",
      quantity: 0.248,
      symbol: "BTC",
      transactionType: "sell",
      price: 18707.31,
      status: "success",
      from: "Sai",
    };
    mockAxios
      .onPost("http://localhost:3001/transactions/")
      .reply(400, "Request failed with status code 400");

    await expect(addTransaction(transaction)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when fetching the watchlist", async () => {
    mockAxios
      .onGet("http://localhost:3001/watchlist/")
      .reply(404, "Request failed with status code 404");

    await expect(fetchWatchList()).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

  it("handles an error when removing an item from the watchlist", async () => {
    const coinId = "789";
    mockAxios
      .onDelete(`http://localhost:3001/watchlist/${coinId}`)
      .reply(500, "Request failed with status code 500");

    await expect(removeWatchList(coinId)).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when adding an item to the watchlist", async () => {
    const coin = "BTC";
    mockAxios
      .onPost("http://localhost:3001/watchlist/")
      .reply(400, "Request failed with status code 400");

    await expect(addWatchList(coin)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when adding a user", async () => {
    const email = "test@example.com";
    const name = "John Doe";
    const password = "password";
    mockAxios
      .onPost("http://localhost:3001/users/")
      .reply(500, "Request failed with status code 500");

    await expect(addUser(email, name, password)).rejects.toThrowError(
      "Request failed with status code 500"
    );
  });

  it("handles an error when resetting a user password", async () => {
    const password = "newPassword";
    mockAxios
      .onPatch("http://localhost:3001/users/")
      .reply(400, "Request failed with status code 400");

    await expect(resetUserPassword(password)).rejects.toThrowError(
      "Request failed with status code 400"
    );
  });

  it("handles an error when fetching a user by email", async () => {
    const email = "test@example.com";
    mockAxios
      .onGet(`http://localhost:3001/users`, { params: { email } })
      .reply(404, "Request failed with status code 404");

    await expect(getUserByEmail(email)).rejects.toThrowError(
      "Request failed with status code 404"
    );
  });

});
