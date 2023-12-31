package com.devsuperior.dscommerce.controllers.handlers;

import com.devsuperior.dscommerce.dto.CustomErrorDTO;
import com.devsuperior.dscommerce.dto.ValidationErrorDTO;
import com.devsuperior.dscommerce.services.exceptions.DataBaseException;
import com.devsuperior.dscommerce.services.exceptions.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
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

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorDTO> methodArgumentNotValid(MethodArgumentNotValidException e,
                                                                 HttpServletRequest request) {
        HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;
        ValidationErrorDTO errDTO = new ValidationErrorDTO(Instant.now(),
                status.value(), "Dados Inválidos", request.getRequestURI());

        for(FieldError fieldError : e.getBindingResult().getFieldErrors()) {
            errDTO.addError(fieldError.getField(), fieldError.getDefaultMessage());
        }

        return ResponseEntity.status(status).body(errDTO);
    }
}
