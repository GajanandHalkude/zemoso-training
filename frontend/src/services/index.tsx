import axios from 'axios'
import { Wallet, Transaction} from '../constants'
export const fetchAllCrtptoCurrenices = async () => {
  return await axios
    .get("https://bc92-ms.zebc61.ml/cryptocurrency")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchCrtptoCurrenicyById = async (id: string) => {
  return await axios
    .get(`https://bc92-ms.zebc61.ml/cryptocurrency/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchWallet = async (id: string) => {
  return await axios
    .get(`https://bc92-ms.zebc61.ml/wallet/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const updateWallet = async (id: string, wallet: Wallet) => {
  return await axios
    .patch(`https://bc92-ms.zebc61.ml/wallet/${id}`, { ...wallet })
    .catch((error) => {
      throw error;
    });
};

export const addTransaction = async (transaction: Transaction) => {
      await axios
        .post(`https://bc92-ms.zebc61.ml/transactions/`, { ...transaction })
        .catch((error) => {
          throw error
        })
}

export const fetchTransactions = async () => {
  return await axios
    .get(`http://localhost:3001/transactions/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchWatchList = async () => {
  return await axios
    .get(`https://bc92-ms.zebc61.ml/watchlist/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const removeWatchList = async (coin_id: string) => {
  return await axios
    .delete(`https://bc92-ms.zebc61.ml/watchlist/${coin_id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const addWatchList = async (coin: string) => {
  await axios
    .post(`https://bc92-ms.zebc61.ml/watchlist/`, { id:coin })
    .catch((error) => {
      throw error;
    });
}

export const addUser = async (email: string, name:string,password:string) => {
  await axios
    .post(`https://bc92-ms.zebc61.ml/users/`, { email: email, name:name,password:password })
    .catch((error) => {
      throw error;
    });
};

export const resetUserPassword = async (password:string) => {
  await axios
    .patch(`https://bc92-ms.zebc61.ml/users/1`, { password: password })
    .catch((error) => {
      throw error;
    });
};

export const getUserByEmail = async (email: string) => {
  await axios
    .get(`https://bc92-ms.zebc61.ml/users?email=${email}`)
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
