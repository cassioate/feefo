package org.assessment.exceptions;

import org.assessment.exceptions.CustomException;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class CustomExceptionsTest {

    @Test
    public void testCustomExceptionMessage() {
        String errorMessage = "Test error message";
        CustomException exception = assertThrows(CustomException.class, () -> {
            throw new CustomException(errorMessage);
        });
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    public void testCustomExceptionWithoutMessage() {
        CustomException exception = assertThrows(CustomException.class, () -> {
            throw new CustomException(null);
        });
        assertNull(exception.getMessage());
    }
}