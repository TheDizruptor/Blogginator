package com.fourtwothirty.blogginator.Controllers;

import com.fourtwothirty.blogginator.Models.Message;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

    @RequestMapping("/greeting")
    public Message greeting(@RequestParam(value="name", defaultValue="world") String name) {
        return new Message(name);
    }
}
