/* Justin Edwards
 * 08/20/2020
 * SpringSecurityConfigurationBasicAuth - what a mouthful.
 * This file configures spring security, allowing requests
 * with options (see axios in frontend). Note the comment
 * about cors.
 */

package com.fourtwothirty.blogginator;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        /* cors() ... applyPermitDefaultValues()) is extremely important.
         * It allows cross origin requests which is crucial to
         the front end and back end communicating
         */
        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues()).and().authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .anyRequest().authenticated()
                .and()
//                .formLogin().and()
                .httpBasic();
    }
}
