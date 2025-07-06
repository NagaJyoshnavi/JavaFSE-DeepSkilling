package com.example.library.service;

import com.example.library.entity.Book;
import com.example.library.repository.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final BookRepository repo;

    public BookService(BookRepository repo) {
        this.repo = repo;
    }

    public Book saveBook(Book book) {
        return repo.save(book);
    }

    public Book getBook(Long id) {
        return repo.findById(id).orElse(null);
    }

    public List<Book> getBooksByAuthor(String author) {
        return repo.findByAuthor(author);
    }

    public void deleteBook(Long id) {
        repo.deleteById(id);
    }
}