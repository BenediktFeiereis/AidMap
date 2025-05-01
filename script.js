function scrollToSection() {
    const dropdown = document.getElementById('section-dropdown');
    const value = dropdown.value;
    if (value) {
        const section = document.querySelector(`h2[id="${value}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
const eyes = document.getElementById('eyes');
      const verbal = document.getElementById('verbal');
      const motor = document.getElementById('motor');
      const totalScore = document.getElementById('totalScore');

      function calculateTotal() {
        const eyesValue = parseInt(eyes.value) || 0;
        const verbalValue = parseInt(verbal.value) || 0;
        const motorValue = parseInt(motor.value) || 0;
        totalScore.value = eyesValue + verbalValue + motorValue;
      }

      eyes.addEventListener('change', calculateTotal);
      verbal.addEventListener('change', calculateTotal);
      motor.addEventListener('change', calculateTotal);