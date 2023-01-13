package com.devsuperior.dscommerce.controllers.handlers;

import com.devsuperior.dscommerce.dto.CustomErrorDTO;
import com.devsuperior.dscommerce.services.exceptions.DataBaseException;
import com.devsuperior.dscommerce.services.exceptions.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<CustomErrorDTO> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        CustomErrorDTO errDTO = new CustomErrorDTO(Instant.now(),
                status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(errDTO);
    }

    @ExceptionHandler(DataBaseException.class)
    public ResponseEntity<CustomErrorDTO> databaseIntegrity(DataBaseException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        CustomErrorDTO errDTO = new CustomErrorDTO(Instant.now(),
                status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(errDTO);
    }
}
