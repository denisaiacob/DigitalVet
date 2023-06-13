package com.digitalvet.backend.controller;

import com.digitalvet.backend.entity.FavoriteClinicsEntity;
import com.digitalvet.backend.repository.FavoriteClinicsRepository;
import com.digitalvet.backend.repository.UserRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/digitalVet")
public class FavoriteClinicsController {

    private final FavoriteClinicsRepository favoriteClinicsRepository;
    private final UserRepository userRepository;

    public FavoriteClinicsController(FavoriteClinicsRepository favoriteClinicsRepository, UserRepository userRepository) {
        this.favoriteClinicsRepository = favoriteClinicsRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/user/{userId}/favorites")
    public ResponseEntity<List<FavoriteClinicsEntity>> getAllFavoritesByUserId(@PathVariable(value = "userId") Long userId) {
        if (!userRepository.existsById(userId)) {
            throw new ResourceNotFoundException("Not found User with id = " + userId);
        }

        List<FavoriteClinicsEntity> favorites = favoriteClinicsRepository.findByUserId(userId);
        return new ResponseEntity<>(favorites, HttpStatus.OK);
    }

    @PostMapping("/user/{userId}/favorites")
    public ResponseEntity<FavoriteClinicsEntity> addFavorite(@PathVariable(value = "userId") Long userId,
                                                             @RequestBody FavoriteClinicsEntity requestEntity) {
        FavoriteClinicsEntity fav = userRepository.findById(userId).map(user -> {
            requestEntity.setUser(user);
            return favoriteClinicsRepository.save(requestEntity);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + userId));

        return new ResponseEntity<>(fav, HttpStatus.CREATED);
    }

    @DeleteMapping("/favorites/{id}")
    public ResponseEntity<HttpStatus> deleteFavorite(@PathVariable("id") long id) {
        favoriteClinicsRepository.deleteById(id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
