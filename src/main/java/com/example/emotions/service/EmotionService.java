package com.example.emotions.service;

import com.example.emotions.model.Emotion;
import com.example.emotions.repository.EmotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmotionService {

    @Autowired
    private EmotionRepository emotionRepository;

    public List<Emotion> getAllEmotions() {
        return emotionRepository.findAll();
    }

    public Emotion saveEmotion(Emotion emotion) {
        return emotionRepository.save(emotion);
    }

    public void deleteEmotion(Long id) {
        emotionRepository.deleteById(id);
    }
}