drop database if exists minet;
CREATE DATABASE minet;

USE minet;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO user (id, name, email, password)
VALUES
    (1, 'John', 'john123@gmail.com', 'John@1234');


CREATE TABLE currency (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    symbol VARCHAR(10) NOT NULL,
    icon VARCHAR(100),
    price DECIMAL(18, 2),
    market_cap DECIMAL(18, 2),
    total_supply DECIMAL(18, 2),
    available_supply DECIMAL(18, 2),
    price_change DECIMAL(18, 2),
    volume DECIMAL(18, 2)
);
INSERT INTO currency (id, name, symbol, icon, price, market_cap, total_supply, available_supply, price_change, volume)
VALUES
    ('bitcoin', 'Bitcoin', 'btc', 'bitcoin', 3285553.7365, 61, 21000000, 19177900, 1.06, 52614783.23),
    ('ethereum', 'Ethereum', 'eth', 'ethereum', 216678.1927, 25.4, 120928102.91, 120927294.91, -5.49, 52614783.23),
    ('usd-coin', 'USD Coin', 'usdc', 'usdCoin', 216678.1147, 25.4, 21000000, 19177118, -5.49, 52614783.23),
    ('ripple', 'XRP', 'xrp', 'xrp', 74.31, 4.6, 99989267435, 49964184162, 0.11, 52614783.23),
    ('binance-usd', 'Binance USD', 'busd', 'binanceUsd', 24942.5448, 4.2, 21214058190.47, 21214058190.47, -6.69, 52614783.23),
    ('solana', 'Solana', 'sol', 'ethereum2', 104.5287, 3.4, 508180963.57, 357867511.45, -1.82, 52614783.23),
    ('dogecoin', 'Dogecoin', 'doge', 'dogecoin', 57.21, 2.7, 161402071.54, 136464456383.7, 1.11, 52614783.23),
    ('polkadot', 'Polkadot', 'dot', 'cardano', 17.649, 2.3, 1241402071.84, 1160452934.68, -6.96, 52614783.23),
    ('matic-network', 'Polygon', 'matic', 'tether', 74.2698, 2.1, 10000000000, 7441499126.62, 1.01, 52614783.23);

CREATE TABLE watchlist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    currency_id VARCHAR(100),
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE wallet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(18, 2) DEFAULT 0,
    average_value DECIMAL(18, 2),
    invested_amount DECIMAL(18, 2),
    currency_id VARCHAR(100)
);
CREATE TABLE transaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    currency_id VARCHAR(100),
    type VARCHAR(50) NOT NULL,
    price DECIMAL(18, 2),
    symbol VARCHAR(10),
    quantity DECIMAL(18, 2),
    date DATE,
    status VARCHAR(50)
);
CREATE TABLE user_wallet (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
	wallet_id INT,
	FOREIGN KEY (user_id) REFERENCES user(id)
);
CREATE TABLE user_transaction (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
	transaction_id INT,
	FOREIGN KEY (user_id) REFERENCES user(id)
);