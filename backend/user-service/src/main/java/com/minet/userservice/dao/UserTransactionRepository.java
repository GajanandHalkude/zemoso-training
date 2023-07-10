package com.minet.userservice.dao;

import com.minet.userservice.entity.UserTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTransactionRepository extends JpaRepository<UserTransaction,Integer> {

    public UserTransaction findByUserIdAndTransactionId(int userId, int transactionId);

    public List<UserTransaction> findByUserId(int userId);
}
