package com.minet.walletservice;

import com.minet.walletservice.mapper.WalletMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
 public class WalletServiceApplicationTest {

	@Autowired
	private ApplicationContext applicationContext;

	@Test
	public void testApplicationContextLoads() {
		assertNotNull(applicationContext);
	}

	@Test
	public void testModelMapperBean() {
		ModelMapper modelMapper = applicationContext.getBean(ModelMapper.class);
		assertNotNull(modelMapper);
	}

	@Test
	public void testWalletMapperBean() {
		WalletMapper walletMapper = applicationContext.getBean(WalletMapper.class);
		assertNotNull(walletMapper);
	}
}

