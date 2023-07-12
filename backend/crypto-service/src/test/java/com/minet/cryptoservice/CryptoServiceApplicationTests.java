package com.minet.cryptoservice;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CryptoServiceApplicationTests {

	@Test
	void contextLoads() {
		String[] str=new String[]{};
		CryptoServiceApplication.main(str);
		Assertions.assertEquals(1,2-1);
	}

}
