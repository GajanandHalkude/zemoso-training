package com.minet.cryptoservice.repository;

import com.minet.cryptoservice.entity.CryptoCurrency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CryptoCurrencyRepository extends JpaRepository<CryptoCurrency, String> {

}
