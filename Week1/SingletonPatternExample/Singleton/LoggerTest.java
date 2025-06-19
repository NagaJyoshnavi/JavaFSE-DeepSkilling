package Week1.SingletonPatternExample.Singleton;

public class LoggerTest {
    public static void main(String[] args) {
        System.out.println("Testing Singleton Logger---->");

        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log message.");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log message.");

        Logger logger3 = Logger.getInstance();
        logger3.log("This is the third log message.");

        System.out.println("\nChecking if logger1, logger2, and logger3 are the same instance:");
        System.out.println("logger1 == logger2: " + (logger1 == logger2));
        System.out.println("logger1 == logger3: " + (logger1 == logger3));
        System.out.println("logger2 == logger3: " + (logger2 == logger3));

        System.out.println("\nHash codes of the instances:");
        System.out.println("Logger1 hash code: " + logger1.hashCode());
        System.out.println("Logger2 hash code: " + logger2.hashCode());
        System.out.println("Logger3 hash code: " + logger3.hashCode());
    }
}
