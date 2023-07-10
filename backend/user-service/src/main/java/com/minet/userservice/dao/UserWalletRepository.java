package com.minet.userservice.dao;

import com.minet.userservice.entity.UserWallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserWalletRepository extends JpaRepository<UserWallet, Integer> {

    public UserWallet findByUserIdAndWalletId(int userId,int walletId);

    public List<UserWallet> findByUserId(int userId);
}
