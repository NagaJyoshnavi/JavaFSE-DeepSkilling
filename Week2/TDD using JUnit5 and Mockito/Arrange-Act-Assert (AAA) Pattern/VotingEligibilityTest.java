package org.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class VotingEligibilityTest {
    private VotingEligibility checker;
    @Before
    public void setUp() {
        System.out.println("Setting up VotingEligibility");
        checker = new VotingEligibility();
    }
    @After
    public void tearDown() {
        checker.clear();
        System.out.println("Tear down complete.\n");
    }

    @Test
    public void testEligibleVoter() {
        boolean result = checker.isEligibleToVote(25);
        System.out.println("Should be eligible to vote? " + result);
        assertTrue(result);
    }

    @Test
    public void testUnderageVoter() {
        boolean result = checker.isEligibleToVote(16);
        System.out.println("Should NOT be eligible to vote? " + result);
        assertFalse(result);
    }

    @Test
    public void testBoundaryVoter() {
        // 🔹 Act
        boolean result = checker.isEligibleToVote(18);
        System.out.println("Exactly 18 should be eligible? " + result);
        assertTrue(result);
    }
}
