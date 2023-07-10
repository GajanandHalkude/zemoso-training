package com.minet.walletservice.dto;

import org.junit.jupiter.api.Test;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.Set;
import static org.junit.jupiter.api.Assertions.*;

 class WalletDTOTest {

    private final ValidatorFactory validatorFactory = Validation.buildDefaultValidatorFactory();
    private final Validator validator = validatorFactory.getValidator();

    @Test
    void testCreateWalletDTO() {
        WalletDTO walletDTO = new WalletDTO();
        assertNotNull(walletDTO);
    }

    @Test
    void testSetName() {
        String expectedName = "My Wallet";
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setName(expectedName);
        assertEquals(expectedName, walletDTO.getName());
    }

    @Test
    void testSetBalance() {
        double expectedBalance = 100.00;
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setBalance(expectedBalance);
        assertEquals(expectedBalance, walletDTO.getBalance());
    }

    @Test
   void testSetAverageValue() {
        double expectedAverageValue = 50.00;
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setAvgValue(expectedAverageValue);
        assertEquals(expectedAverageValue, walletDTO.getAvgValue());
    }

    @Test
   void testSetInvestedAmount() {
        double expectedInvestedAmount = 200.00;
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setInvestedAmount(expectedInvestedAmount);
        assertEquals(expectedInvestedAmount, walletDTO.getInvestedAmount());
    }

    @Test
    void testSetCurrencyId() {
        String expectedCurrencyId = "USD";
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setCurrencyId(expectedCurrencyId);
        assertEquals(expectedCurrencyId, walletDTO.getCurrencyId());
    }

    @Test
     void testEmptyNameValidation() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setName("");
        Set<ConstraintViolation<WalletDTO>> violations = validator.validate(walletDTO);
        assertFalse(violations.isEmpty());
    }

    @Test
     void testNullBalanceValidation() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setBalance(0.0);
        Set<ConstraintViolation<WalletDTO>> violations = validator.validate(walletDTO);
        assertFalse(violations.isEmpty());
    }

    @Test
     void testNullAverageValueValidation() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setAvgValue(0.0);
        Set<ConstraintViolation<WalletDTO>> violations = validator.validate(walletDTO);
        assertFalse(violations.isEmpty());
    }

    @Test
    void testNullInvestedAmountValidation() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setInvestedAmount(0.0);
        Set<ConstraintViolation<WalletDTO>> violations = validator.validate(walletDTO);
        assertFalse(violations.isEmpty());
    }


    @Test
    void testEmptyCurrencyIdValidation() {
        WalletDTO walletDTO = new WalletDTO();
        walletDTO.setCurrencyId("");
        Set<ConstraintViolation<WalletDTO>> violations = validator.validate(walletDTO);
        assertFalse(violations.isEmpty());
    }

    @Test
     void testAllArgsConstructor() {
        int id = 1;
        String name = "My Wallet";
        double balance = 1000.0;
        double avgValue = 500.0;
        double investedAmount = 2000.0;
        String currencyId = "USD";

        WalletDTO walletDTO = new WalletDTO(id, name, balance, avgValue, investedAmount, currencyId);

        assertEquals(id, walletDTO.getId());
        assertEquals(name, walletDTO.getName());
        assertEquals(balance, walletDTO.getBalance(), 0.0);
        assertEquals(avgValue, walletDTO.getAvgValue(), 0.0);
        assertEquals(investedAmount, walletDTO.getInvestedAmount(), 0.0);
        assertEquals(currencyId, walletDTO.getCurrencyId());
    }
}
