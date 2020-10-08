/* Justin Edwards
 * 10/08/2020
 * Authentication Model - This does nothing useful right now.
 * The Authentication controller will later use this to do
 * something when the user is authenticated
 */

package com.fourtwothirty.blogginator.Models;

public class Authentication {

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    private String message;

    public Authentication(String message) {
        this.message = message;

    }
}
