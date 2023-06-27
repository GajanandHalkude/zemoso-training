import axios from 'axios'
import { Wallet, Transaction} from '../constants'
export const fetchAllCrtptoCurrenices = async () => {
  return await axios
    .get("http://localhost:3001/cryptocurrency")
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchCrtptoCurrenicyById = async (id: string) => {
  return await axios
    .get(`http://localhost:3001/cryptocurrency/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const fetchWallet = async (id: string) => {
  return await axios
    .get(`http://localhost:3001/wallet/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const updateWallet = async (id: string, wallet: Wallet) => {
  return await axios
    .patch(`http://localhost:3001/wallet/${id}`, { ...wallet })
    .catch((error) => {
      throw error;
    });
};

export const addTransaction = async (transaction: Transaction) => {
      await axios
        .post(`http://localhost:3001/transactions/`, { ...transaction })
        .catch((error) => {
          throw error
        })
}

export const fetchWatchList = async () => {
  return await axios
    .get(`http://localhost:3001/watchlist/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const removeWatchList = async (coin_id: string) => {
  return await axios
    .delete(`http://localhost:3001/watchlist/${coin_id}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const addWatchList = async (coin: string) => {
  await axios
    .post(`http://localhost:3001/watchlist/`, { id:coin })
    .catch((error) => {
      throw error;
    });
}

export const addUser = async (email: string, name:string,password:string) => {
  await axios
    .post(`http://localhost:3001/users/`, { email: email, name:name,password:password })
    .catch((error) => {
      throw error;
    });
};

export const resetUserPassword = async (password:string) => {
  await axios
    .patch(`http://localhost:3001/users/`, {password:password })
    .catch((error) => {
      throw error;
    });
};

export const getUserByEmail = async (email: string) => {
  await axios
    .get(`http://localhost:3001/users?email=${email}`)
    .catch((error) => {
      throw error;
    });
};

