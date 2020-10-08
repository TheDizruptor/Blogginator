/* Justin Edwards
 * 10/08/2020
 * Message Controller - This isn't useful in the scope of
 * our project but is currently used to test frontend/backend
 * connection. Handles requests sent from Greeting.js using
 * axios, returns "Hello, <name>!"
 */

package com.fourtwothirty.blogginator.Controllers;

import com.fourtwothirty.blogginator.Models.Message;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class MessageController {

    @RequestMapping("/greeting")
    public Message greeting(@RequestParam(value="name", defaultValue="world") String name) {
        return new Message(name);
    }
}
