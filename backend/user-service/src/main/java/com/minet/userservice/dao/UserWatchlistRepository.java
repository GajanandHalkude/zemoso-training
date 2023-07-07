package com.minet.userservice.dao;

import com.minet.userservice.entity.UserWatchlist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserWatchlistRepository extends JpaRepository<UserWatchlist, Integer> {

    public List<UserWatchlist> findByUserId(int userId);

    public UserWatchlist findByUserIdAndCurrencyId(int userId,String currencyId);
}
