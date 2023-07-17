package com.minet.userservice.config;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean jwtFilter() {
        FilterRegistrationBean filter= new FilterRegistrationBean();
        filter.setFilter(new JwtFilter());
        filter.addUrlPatterns("/api/v1/users/*");
        filter.addInitParameter("exclusions", "/api/v1/users/login/*,api/vi/users/register/*,/api/v1/users/1/reset-password");
        return filter;
    }
}

