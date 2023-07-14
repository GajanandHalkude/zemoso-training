import axios from 'axios'
import { Wallet, Transaction, url} from '../constants'
export const fetchAllCrtptoCurrenices = async () => {
  return await axios
    .get(`${url}/currency`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchCrtptoCurrenicyById = async (id: string) => {
  return await axios
    .get(`${url}/currency/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchWallet = async (id: string) => {
  return await axios
    .get(`${url}/users/1/wallets/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const updateWallet = async (id: string, wallet: Wallet) => {
  return await axios
    .patch(`${url}/users/1/wallets/${id}`, { ...wallet })
    .catch((error) => {
      throw error;
    });
};

export const fetchTransactions = async () => {
  return await axios
    .get(`${url}/users/1/transactions/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const addTransaction = async (transaction: any) => {
      await axios
        .post(`${url}/users/1/transactions/`, { ...transaction })
        .catch((error) => {
          throw error
        })
}
export const fetchWatchList = async () => {
  return await axios
    .get(`${url}/users/1/watchlist`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const removeWatchList = async (coin_id: string) => {
  return await axios
    .delete(`${url}/users/1/watchlist/${coin_id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const addWatchList = async (coin: string) => {
  await axios
    .post(`${url}/users/1/watchlist`,coin,{headers: {"Content-Type": "text/plain"}})
    .catch((error) => {
      throw error;
    });
}

export const addUser = async (email: string, name: string, password: string) => {
  try {
    const response = await axios.post(`${url}/users/`, {
      email: email,
      name: name,
      password: password,
      avatar:"avatar"
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetUserPassword = async (password:string) => {
  await axios
    .patch(`${url}/users/1/reset-password`,password,{headers: {"Content-Type": "text/plain"}})
    .catch((error) => {
      throw error;
    });
};

export const getUserByEmail = async (email: string) => {
  return await axios
    .get(`${url}/users/email/${email}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
export const getGraphData = async (id:string) => {
  return await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=5&interval=daily`
    ).then((response) => response.data)
    .catch((error) => {throw error })
}
