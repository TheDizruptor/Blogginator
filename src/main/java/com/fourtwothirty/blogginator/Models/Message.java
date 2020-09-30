package com.fourtwothirty.blogginator.Models;

public class Message {

    private String name;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Message(String name) {
        this.name = "Hello, " + name + "!";
    }
}
