/* Justin Edwards
 * 10/08/2020
 * Message model - All this does is turn <name> into
 * "Hello, <name>!". Useless in the scope of our project,
 * but helpful for testing backend/frontend connection
 * while we get started
 */

package com.fourtwothirty.blogginator.Models;

public class Message {

    private String name;

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Message(String name) {
        this.name = "Hello, " + name + "!";
    }
}
