package org.assessment.service;

import org.assessment.exceptions.CustomException;

import java.util.*;

public class Normaliser {

    // This list is going to be respected in case of draw, if it has something like "Software Architect"
    // the score is going to respect the priority list in order of insertion.
    private List<String> normalizedTitlesList;

    public void addNormalisedList(List<String> normalizedTitlesListInput) {
        this.normalizedTitlesList = normalizedTitlesListInput;
    }

    public String normalise(String jobTitle) {
        validateInputs(jobTitle);

        double bestScore = 0.0;
        String bestMatch = null;

        for (String normalizedTitle : normalizedTitlesList) {
            double score = calculateScore(jobTitle.toLowerCase(), normalizedTitle.toLowerCase());
            if (score > bestScore) {
                bestScore = score;
                bestMatch = normalizedTitle;
            }
        }

        return bestMatch;
    }

    private void validateInputs(String jobTitle){
        if (Objects.isNull(jobTitle)){
            throw new CustomException("It's necessary to pass a JobTitle");
        } else if (Objects.isNull(normalizedTitlesList) || normalizedTitlesList.isEmpty()) {
            throw new CustomException("It's necessary to add at least one normalizedTitle to compare. Try using the 'addNormalizedList' method.");
        }
    }

    private double calculateScore(String inputTitle, String normalizedTitle) {
        String[] inputWords = inputTitle.split(" ");
        String[] normalizedWords = normalizedTitle.split(" ");

        // Here going to remove all duplicates words from the input
        Set<String> inputSet = new HashSet<>(Arrays.asList(inputWords));
        Set<String> normalizedSet = new HashSet<>(Arrays.asList(normalizedWords));

        // Going to remvoe words that don't match in normlizedSet
        inputSet.retainAll(normalizedSet);

        // Needed a casting (double) here because if two int is divided going to receive another int,
        // in some cases this going to result in 0 when have to be 0.5 (example)
        return (double) inputSet.size() / normalizedSet.size();
    }
}