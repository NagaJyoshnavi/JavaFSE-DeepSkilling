package Week1.EcommercePlatformSearchFunction;

import java.util.Arrays;
import java.util.Comparator;

public class SearchFunction {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Book", "Education")
        };

        System.out.println("\nLinear Search by ID:");
        Product resultByIdLS = LinearSearch.linearSearch(products, 2);
        System.out.println(resultByIdLS != null ? resultByIdLS : "Product not found");

        Arrays.sort(products, Comparator.comparingInt(p -> p.id));

        System.out.println("\nBinary Search by ID:");
        Product resultByIdBS = BinarySearch.binarySearch(products, 2);
        System.out.println(resultByIdBS != null ? resultByIdBS : "Product not found"); 
    }
}
