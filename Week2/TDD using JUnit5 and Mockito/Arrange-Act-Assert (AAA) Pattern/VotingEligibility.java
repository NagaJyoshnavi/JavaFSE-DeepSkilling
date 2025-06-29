package org.example;

public class VotingEligibility {
    public boolean isEligibleToVote(int age) {
        return age >= 18;
    }
    public void clear() {
        System.out.println("EligibilityChecker reset.");
    }
}