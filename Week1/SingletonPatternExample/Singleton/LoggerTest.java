package Week1.SingletonPatternExample.Singleton;

public class LoggerTest {
    public static void main(String[] args) {
        System.out.println("Testing Singleton Logger---->");

        Logger logger1 = Logger.getInstance();

        Logger logger2 = Logger.getInstance();

        System.out.println("\nHash codes:");
        System.out.println("Logger1 hash code: " + logger1.hashCode());
        System.out.println("Logger2 hash code: " + logger2.hashCode());
        
        System.out.println("\nChecking if logger1 and logger2 are the same instance:");
        System.out.println("logger1 == logger2: " + (logger1 == logger2));
    }
}
