package org.example;

public class MyService {
    private final ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        System.out.println("fetchData() called");
        return api.getData();
    }
}