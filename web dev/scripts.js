// Function to show the popup
function showPopup(condition) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popup-text');

  // Set the content based on the condition
  switch (condition) {
      case 'anxiety':
          popupText.innerHTML = `
              <h2>Anxiety Disorders</h2>
              <p>Anxiety disorders are the most common mental health disorders in the U.S. They affect over 40 million adults aged 18 and older. These disorders can interfere with daily activities and are characterized by excessive fear or worry.</p>
              <h3>Types of Anxiety Disorders:</h3>
              <ul>
                  <li><strong>Generalized Anxiety Disorder (GAD):</strong> Characterized by persistent and excessive worry about various aspects of life.</li>
                  <li><strong>Panic Disorder:</strong> Involves recurrent panic attacks, which are sudden feelings of terror that strike without warning.</li>
                  <li><strong>Social Anxiety Disorder:</strong> Intense fear of social situations that may lead to embarrassment or humiliation.</li>
                  <li><strong>Specific Phobias:</strong> An irrational fear of a specific object, activity, or situation.</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Treatment may include therapy (such as cognitive-behavioral therapy), medications, or a combination of both. Mindfulness techniques and lifestyle changes can also be beneficial.</p>
          `;
          break;
      case 'mood':
          popupText.innerHTML = `
              <h2>Mood Disorders</h2>
              <p>Mood disorders, such as depression and bipolar disorder, affect how you feel and can impact your daily life significantly. These disorders can cause persistent feelings of sadness or fluctuations in mood.</p>
              <h3>Types of Mood Disorders:</h3>
              <ul>
                  <li><strong>Major Depressive Disorder:</strong> Characterized by a persistently low mood and a loss of interest in activities.</li>
                  <li><strong>Bipolar Disorder:</strong> Involves extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).</li>
                  <li><strong>Dysthymia:</strong> A chronic form of depression that lasts for at least two years.</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Common treatments include antidepressant medications, mood stabilizers, psychotherapy, and lifestyle changes such as exercise and diet modifications.</p>
          `;
          break;
      case 'personality':
          popupText.innerHTML = `
              <h2>Personality Disorders</h2>
              <p>Personality disorders are a group of mental illnesses that affect how you think, feel, and behave. They can cause significant problems in personal relationships and daily functioning.</p>
              <h3>Types of Personality Disorders:</h3>
              <ul>
                  <li><strong>Borderline Personality Disorder:</strong> Characterized by unstable moods, behavior, and relationships.</li>
                  <li><strong>Narcissistic Personality Disorder:</strong> Involves an inflated sense of self-importance and a deep need for admiration.</li>
                  <li><strong>Antisocial Personality Disorder:</strong> Characterized by a disregard for the law and the rights of others.</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Therapy is the primary treatment for personality disorders, often involving psychotherapy to help manage symptoms and improve interpersonal relationships.</p>
          `;
          break;
      case 'psychotic':
          popupText.innerHTML = `
              <h2>Psychotic Disorders</h2>
              <p>Psychotic disorders are severe mental disorders that cause abnormal thinking and perceptions. This can lead to delusions (false beliefs) and hallucinations (seeing or hearing things that aren’t there).</p>
              <h3>Types of Psychotic Disorders:</h3>
              <ul>
                  <li><strong>Schizophrenia:</strong> A chronic and severe mental disorder that affects how a person thinks, feels, and behaves.</li>
                  <li><strong>Schizoaffective Disorder:</strong> A combination of symptoms of schizophrenia and mood disorders (like depression).</li>
                  <li><strong>Substance-Induced Psychotic Disorder:</strong> Psychosis caused by drug use or withdrawal.</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Antipsychotic medications are the most common treatment, along with therapy and support services to help manage symptoms.</p>
          `;
          break;
      case 'substance':
          popupText.innerHTML = `
              <h2>Substance Abuse Disorders</h2>
              <p>Substance abuse disorders involve the use of illegal drugs or the misuse of prescription medications. This can lead to significant impairment or distress in social, occupational, or other important areas of functioning.</p>
              <h3>Common Substances:</h3>
              <ul>
                  <li>Alcohol</li>
                  <li>Opioids</li>
                  <li>Stimulants (such as cocaine or methamphetamine)</li>
                  <li>Hallucinogens</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Treatment may involve detoxification, therapy, medications, and support groups to help individuals manage their addiction.</p>
          `;
          break;
      case 'eating':
          popupText.innerHTML = `
              <h2>Eating Disorders</h2>
              <p>Eating disorders are serious conditions related to persistent eating behaviors that negatively impact health, emotions, and quality of life. They can include extreme attitudes towards food and body weight.</p>
              <h3>Types of Eating Disorders:</h3>
              <ul>
                  <li><strong>Anorexia Nervosa:</strong> Characterized by restricted food intake, intense fear of gaining weight, and a distorted body image.</li>
                  <li><strong>Bulimia Nervosa:</strong> Involves binge eating followed by purging (vomiting, excessive exercise, etc.).</li>
                  <li><strong>Binge Eating Disorder:</strong> Frequent episodes of consuming large amounts of food without purging behaviors.</li>
              </ul>
              <h3>Treatment Options:</h3>
              <p>Effective treatment can include a combination of nutritional education, psychotherapy, and medical monitoring.</p>
          `;
          break;
      default:
          popupText.innerHTML = "<h2>Unknown Condition</h2><p>No information available.</p>";
  }

  popup.classList.remove('hidden');
}

// Function to close the popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}




/* About Us */
// Fade-in effect for elements on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Feedback form submission
const form = document.getElementById('feedback-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your feedback!');
  form.reset();
});
