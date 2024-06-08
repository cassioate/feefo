package org.assessment.service;

import org.assessment.exceptions.CustomException;
import org.assessment.service.Normaliser;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class NormaliserTest {

    Normaliser n;

    List<String> listOfTitles;

    @BeforeEach
     void setUp() {
        listOfTitles = List.of("Architect",
                "Software engineer",
                "Quantity surveyor",
                "Accountant");
        n = new Normaliser();
        n.addNormalisedList(listOfTitles);
    }

    @Test
     void testNormaliserMethodJavaEngineerSuccess() {
        String jt = "Java Engineer";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(1), normalisedTitle);
    }

    @Test
    void testNormaliserMethodThrowIfJobTitleIsNull() {
        String jt = null;
        String errorMessage = "It's necessary to pass a JobTitle";

        CustomException exception = assertThrows(CustomException.class, () -> n.normalise(jt));
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    void testNormaliserMethodThrowIfNormalizedListIsNotInstantiated() {
        String jt = "Java engineer";
        String errorMessage = "It's necessary to add at least one normalizedTitle to compare. Try using the 'addNormalizedList' method.";
        n = new Normaliser();

        CustomException exception = assertThrows(CustomException.class, () -> n.normalise(jt));
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
    void testNormaliserMethodThrowIfNormalizedListEmpty() {
        String jt = "Java engineer";
        String errorMessage = "It's necessary to add at least one normalizedTitle to compare. Try using the 'addNormalizedList' method.";
        n = new Normaliser();
        n.addNormalisedList(new ArrayList<>());

        CustomException exception = assertThrows(CustomException.class, () -> n.normalise(jt));
        assertEquals(errorMessage, exception.getMessage());
    }

    @Test
     void testNormaliserMethodCEngineerSuccess() {
        String jt = "C# engineer";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(1), normalisedTitle);
    }

    @Test
     void testNormaliserMethodChiefAccountantSuccess() {
        String jt = "Chief Accountant";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(3), normalisedTitle);
    }

    @Test
     void testNormaliserMethodAccountantSuccess() {
        String jt = "Accountant";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(3), normalisedTitle);
    }

    @Test
     void testNormaliserMethodPrioritizeBaseOnListSuccess() {
        String jt = "software architect";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(0), normalisedTitle);
    }

    @Test
    void testNormaliserMethodCaseInsensitive() {
        String jt = "sOfTwArE EnGiNeEr";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(1), normalisedTitle);
    }

    @Test
    void testNormaliserMethodTitleNotFound() {
        String jt = "Unrecognized Title";
        String normalisedTitle = n.normalise(jt);

        assertNull(normalisedTitle);
    }

    @Test
     void testNormaliserMethodDuplicateWordsSuccess() {
        String jt = "software Software engineer";
        String normalisedTitle = n.normalise(jt);

        assertEquals(listOfTitles.get(1), normalisedTitle);
    }
}