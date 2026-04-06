import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    happiness: 5,
    sleep: 5,
    stress: 5,
    energy: 5,
    social: 5,
    pressure: 5,
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const analyzeMood = () => {
    const { happiness, sleep, stress, energy, social, pressure } = formData;

    // Mood score calculation
    const moodScore =
      happiness * 2 + sleep * 1.5 + energy * 1.5 + social * 1 - stress * 1.2 - pressure * 1.2;

    // Stress score calculation
    const stressScore =
      stress * 2 + pressure * 1.8 - sleep * 1.2 - energy * 1;

    let moodStatus = "";
    let stressStatus = "";
    let suggestions = [];

    // Mood status
    if (moodScore >= 20) {
      moodStatus = "😊 Happy / Positive";
    } else if (moodScore >= 10) {
      moodStatus = "😐 Neutral / Balanced";
    } else {
      moodStatus = "😔 Low Mood / Emotionally Drained";
    }

    // Stress status
    if (stressScore <= 5) {
      stressStatus = "🟢 Low Stress";
    } else if (stressScore <= 15) {
      stressStatus = "🟡 Moderate Stress";
    } else {
      stressStatus = "🔴 High Stress";
    }

    // Suggestions based on factors
    if (sleep <= 4) {
      suggestions.push("😴 Try to improve your sleep schedule and aim for 7–8 hours of rest.");
    }
    if (stress >= 7) {
      suggestions.push("🧘 Practice deep breathing, meditation, or take short breaks.");
    }
    if (pressure >= 7) {
      suggestions.push("📚 Break your tasks into smaller steps and avoid overloading yourself.");
    }
    if (energy <= 4) {
      suggestions.push("🚶 Take a short walk, stretch, or do light exercise to boost energy.");
    }
    if (social <= 4) {
      suggestions.push("💬 Talk to a friend or family member — social connection can improve mood.");
    }
    if (happiness <= 4) {
      suggestions.push("🎵 Do something you enjoy: music, hobbies, journaling, or relaxing activities.");
    }

    if (suggestions.length === 0) {
      suggestions.push("✨ You're doing well! Keep maintaining your healthy routine.");
    }

    setResult({
      moodScore: moodScore.toFixed(1),
      stressScore: stressScore.toFixed(1),
      moodStatus,
      stressStatus,
      suggestions,
    });
  };

  return (
    <div className="app">
      <div className="container">
        <h1>💙 Mood & Stress Analyzer</h1>
        <p className="subtitle">
          Answer a few questions and get your mood analysis with wellness suggestions.
        </p>

        <div className="form-section">
          <div className="question">
            <label>😊 How happy are you today? ({formData.happiness}/10)</label>
            <input type="range" min="1" max="10" name="happiness" value={formData.happiness} onChange={handleChange} />
          </div>

          <div className="question">
            <label>😴 How was your sleep? ({formData.sleep}/10)</label>
            <input type="range" min="1" max="10" name="sleep" value={formData.sleep} onChange={handleChange} />
          </div>

          <div className="question">
            <label>😣 How stressed are you? ({formData.stress}/10)</label>
            <input type="range" min="1" max="10" name="stress" value={formData.stress} onChange={handleChange} />
          </div>

          <div className="question">
            <label>⚡ What is your energy level? ({formData.energy}/10)</label>
            <input type="range" min="1" max="10" name="energy" value={formData.energy} onChange={handleChange} />
          </div>

          <div className="question">
            <label>💬 How socially connected do you feel today? ({formData.social}/10)</label>
            <input type="range" min="1" max="10" name="social" value={formData.social} onChange={handleChange} />
          </div>

          <div className="question">
            <label>📚 How much work/study pressure do you feel? ({formData.pressure}/10)</label>
            <input type="range" min="1" max="10" name="pressure" value={formData.pressure} onChange={handleChange} />
          </div>

          <button onClick={analyzeMood}>Analyze My Mood</button>
        </div>

        {result && (
          <div className="result-card">
            <h2>📊 Analysis Result</h2>
            <p><strong>Mood Score:</strong> {result.moodScore}</p>
            <p><strong>Stress Score:</strong> {result.stressScore}</p>
            <p><strong>Mood Status:</strong> {result.moodStatus}</p>
            <p><strong>Stress Status:</strong> {result.stressStatus}</p>

            <div className="suggestions">
              <h3>💡 Suggestions</h3>
              <ul>
                {result.suggestions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;