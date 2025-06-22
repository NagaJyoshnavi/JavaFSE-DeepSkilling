package Week1.FinancialForcasting;

import java.util.Scanner;

public class FinancialForcasting {

    public static double calculateFutureValue(double pv, double rate, int years) {
        if(years==0){
            return pv;
        }
        else{
            return pv * Math.pow(1 + rate, years);
        }
    }

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter the Present Value: ");
        double pv = sc.nextDouble();

        System.out.println("Enter the Rate: ");
        double rate = sc.nextDouble();

        System.out.println("Enter the number of years: ");
        int years = sc.nextInt();

        double fv = calculateFutureValue(pv, rate, years);
        System.out.printf("Future Value after %d years = %.2f\n", years, fv);

        sc.close();
    }
}
