package com.example.emotions.model;

import jakarta.persistence.*;

@Entity
public class Emotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String mood;

    public Emotion() {
    }

    public Emotion(String name, String mood) {
        this.name = name;
        this.mood = mood;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getMood() {
        return mood;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }
}