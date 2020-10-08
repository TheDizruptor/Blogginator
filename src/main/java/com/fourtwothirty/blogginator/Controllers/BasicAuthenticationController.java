/* Justin Edwards
 * 10/08/2020
 * Authentication Controller - This controller will handle
 * any requests pertaining to authentication. Currently, all
 * it does is returns a string saying the user is authenticated.
 * Eventually, we'll need it to get user information and send
 * it to the front end (I think, my brain is fried).
 */

package com.fourtwothirty.blogginator.Controllers;

import com.fourtwothirty.blogginator.Models.Authentication;
import org.hibernate.boot.jaxb.Origin;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class BasicAuthenticationController {

    @GetMapping(path="/basic-auth")
    public Authentication authenticate() {
        return new Authentication("You are authenticated!");
    }
}
