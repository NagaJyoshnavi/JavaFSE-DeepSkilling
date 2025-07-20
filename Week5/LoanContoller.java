package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class LoanController {
    @GetMapping("/loans/{number}")
    public Map<String, Object> getLoan(@PathVariable String number) {
        return Map.of(
                "number", number,
                "type", "home",
                "loanAmount", 750000,
                "emi", 5890,
                "tenure", 24
        );
    }
}
