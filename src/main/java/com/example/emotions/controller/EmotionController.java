package com.example.emotions.controller;

import com.example.emotions.model.Emotion;
import com.example.emotions.service.EmotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/emotions")
public class EmotionController {

    @Autowired
    private EmotionService emotionService;

    @GetMapping
    public List<Emotion> getAllEmotions() {
        return emotionService.getAllEmotions();
    }

    @PostMapping
    public Emotion addEmotion(@RequestBody Emotion emotion) {
        return emotionService.saveEmotion(emotion);
    }

    @DeleteMapping("/{id}")
    public void deleteEmotion(@PathVariable Long id) {
        emotionService.deleteEmotion(id);
    }
}