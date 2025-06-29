import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionTest {
    @Test
    public void testAssertEquals() {
        int sum = 2 + 3;
        System.out.println("Sum: " + sum);
        assertEquals(5, sum);
    }
    @Test
    public void testAssertTrue() {
        boolean result = 5 > 3;
        System.out.println("Is 5 > 3? " + result);
        assertTrue(result);
    }
    @Test
    public void testAssertFalse() {
        boolean result = 5 < 3;
        System.out.println("Is 5 < 3? " + result);
        assertFalse(result);
    }
    @Test
    public void testAssertNull() {
        String str = null;
        System.out.println("str = " + str);
        assertNull(str);
    }
    @Test
    public void testAssertNotNull() {
        Object obj = new Object();
        System.out.println("Object = " + obj);
        assertNotNull(obj);
    }
}