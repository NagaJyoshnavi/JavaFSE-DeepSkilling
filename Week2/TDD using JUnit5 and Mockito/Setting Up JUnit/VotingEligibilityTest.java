import org.example.VotingEligibility;
import org.junit.Test;
import static org.junit.Assert.*;
public class VotingEligibilityTest {

    @Test
    public void testIsEligibleToVote() {
        VotingEligibility checker = new VotingEligibility();

        boolean result1 = checker.isEligibleToVote(40);
        System.out.println("Eligible to vote? " + result1);
        assertTrue(result1);

        boolean result2 = checker.isEligibleToVote(12);
        System.out.println("Eligible to vote? " + result2);
        assertFalse(result2);
    }
}
