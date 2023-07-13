package com.minet.portfolioservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@SpringBootTest
class PortfolioServiceApplicationTests {

	@Test
	void testMainMethod() {
		// Call the main method and assert that it executes without throwing any exceptions
		assertDoesNotThrow(() -> PortfolioServiceApplication.main(new String[]{}));
	}
}
