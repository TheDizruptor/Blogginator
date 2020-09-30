package com.fourtwothirty.blogginator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class BlogginatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogginatorApplication.class, args);
	}

}
