package Week1.EcommercePlatformSearchFunction;

public class BinarySearch {
    public static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid].id == id) {
                return products[mid];
            } 
            else if (products[mid].id < id) {
                low = mid + 1;
            } 
            else {
                high = mid - 1;
            }
        }
        return null;
    }
}
