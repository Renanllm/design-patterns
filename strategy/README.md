**Problem:**
Develop a payment processing system that handles different types of discounts applicable to transactions, depending on the customer's profile.

**Requirements:**

1. The system must be able to process transactions of different types: regular, premium, and VIP.
2. Each type of transaction may have a specific applicable discount.
3. Discounts can vary dynamically and need to be easily adjustable without modifying the core code.
4. The system should provide a flexible way to add new types of discounts in the future without impacting existing code.
5. Tests should be developed to ensure the correct functioning of the system in different discount scenarios and transaction types.

**Test Cases:**

1. **Test Case: Regular Discount Application:**
   - Transaction Type: Regular
   - Expected Discount: 5%
2. **Test Case: Premium Discount Application:**
   - Transaction Type: Premium
   - Expected Discount: 10%
3. **Test Case: VIP Discount Application:**
   - Transaction Type: VIP
   - Expected Discount: 15%
4. **Test Case: Dynamic Discount Change:**
   - Transaction Type: Regular
   - Change Discount to: 8%
   - Expected Discount: 8%
5. **Test Case: Addition of New Discount Type:**
   - Add Transaction Type: Corporate
   - Initial Discount: 12%
   - Expected Discount: 12%
