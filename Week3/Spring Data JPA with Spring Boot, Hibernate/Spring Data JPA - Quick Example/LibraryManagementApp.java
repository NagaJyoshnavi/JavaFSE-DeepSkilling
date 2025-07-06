package com.example.library;

import com.example.library.entity.Book;
import com.example.library.service.BookService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LibraryManagementApp implements CommandLineRunner {

    private final BookService bookService;

    public LibraryManagementApp(BookService bookService) {
        this.bookService = bookService;
    }

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementApp.class, args);
    }

    @Override
    public void run(String... args) {
        // Save (INSERT)
        Book b1 = new Book(null, "Spring in Action", "Craig Walls", 500.0);
        bookService.saveBook(b1);

        // Update
        b1.setPrice(450.0);
        bookService.saveBook(b1);

        // Read
        Book fetched = bookService.getBook(b1.getId());
        System.out.println("Fetched: " + fetched);

        // Custom query
        System.out.println("Books by Craig Walls: " + bookService.getBooksByAuthor("Craig Walls"));

        // Delete
        bookService.deleteBook(b1.getId());
    }
}
