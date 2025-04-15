function login() {
  const validId = "admin";
  const validPassword = "12345";

  const enteredId = document.getElementById("userId").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredId === validId && enteredPassword === validPassword) {
    document.getElementById("loginSection").style.display = "none";

    const homeSection = document.createElement("div");
    homeSection.className = "homepage";

    homeSection.innerHTML = `
      <div class="navbar">
        <a href="#" class="profile-btn"><i class="lucide lucide-user-round"></i> Profile</a>
        
        <div class="profile-card">
          <img src="faculty.jpeg" alt="Faculty Photo" class="profile-pic" id="mainProfile" />
          <img src="funny.jpg" alt="Surprise Photo" class="profile-pic" id="hiddenProfile" style="display: none;" />
          <h3>Dr. Vinay Kumar</h3>
          <p><strong>Email:</strong> vinaykumar@tgpcet.edu</p>
          <audio id="profileAudio" src="funny.mp3"></audio>
        </div>

        <a href="#" id="subjectToggle" class="subjects"><i class="lucide lucide-book"></i> Subjects</a>
        <div class="subject-table" id="subjectTable" style="display: none;">
          <table>
            <thead>
              <tr><th>Subject Code</th><th>Subject Name</th></tr>
            </thead>
            <tbody>
              <tr><td><a href="subject1.html" target="_blank">BME32403</a></td><td><a class="subject-link" href="subject1.html" target="_blank">Thermodynamics</a></td></tr>
              <tr><td><a href="subject2.html" target="_blank">BME32401</a></td><td><a class="subject-link" href="subject2.html" target="_blank">Mechanics of Material</a></td></tr>
              <tr><td><a href="subject3.html" target="_blank">BSH32403</a></td><td><a class="subject-link" href="subject3.html" target="_blank">Human Values</a></td></tr>
              <tr><td><a href="subject4.html" target="_blank">BME32402</a></td><td><a class="subject-link" href="subject4.html" target="_blank">Fluid Mechanics</a></td></tr>
              <tr><td><a href="subject5.html" target="_blank">BEC32306</a></td><td><a class="subject-link" href="subject5.html" target="_blank">Electronics</a></td></tr>
              <tr><td><a href="subject6.html" target="_blank">BME23404</a></td><td><a class="subject-link" href="subject6.html" target="_blank">Team Management</a></td></tr>
            </tbody>
          </table>
        </div>

        <a href="#" id="contactToggle"><i class="lucide lucide-phone"></i> Contact</a>
        <div class="contact-info" id="contactInfo" style="display: none;">
          <h3>Contact Details</h3>
          <ul>
            <li><strong>Kaushik patil   </strong> – 📞 +91-9876543210</li>
            <li><strong>Shlok pauniker  </strong> – 📞 +91-8765432109</li>
            <li><strong>Anah fulzele    </strong> – 📞 +91-9988776655</li>
          </ul>
        </div>

        <a href="#" onclick="logout()" class="logout"><i class="lucide lucide-log-out"></i> Logout</a>
      </div>

      <div class="attendance-graph">
        <h2>Overall Attendance</h2>
        <canvas id="attendanceChart" width="600" height="300"></canvas>
      </div>

      <div class="toast">✅ Login Successful</div>
    `;

    document.body.appendChild(homeSection);
    lucide.createIcons();

    // Toggle subject table
    document.getElementById("subjectToggle").addEventListener("click", function (e) {
      e.preventDefault();
      const table = document.getElementById("subjectTable");
      table.style.display = (table.style.display === "block") ? "none" : "block";
    });

    // Toggle contact info section
    document.getElementById("contactToggle").addEventListener("click", function (e) {
      e.preventDefault();
      const contactBox = document.getElementById("contactInfo");
      contactBox.style.display = (contactBox.style.display === "block") ? "none" : "block";
    });

    // Initialize Chart.js attendance graph
    const ctx = document.getElementById("attendanceChart").getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Thermodynamics', 'Mechanics', 'Values', 'Fluid', 'Electronics', 'Management'],
        datasets: [{
          label: 'Attendance (%)',
          data: [90, 85, 78, 92, 88, 95],
          backgroundColor: ['#4caf50', '#2196f3', '#ffc107', '#ff5722', '#9c27b0', '#00bcd4']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });

    // ✨ Profile photo click logic: show second image + play audio
    setTimeout(() => {
      const mainPic = document.getElementById("mainProfile");
      const hiddenPic = document.getElementById("hiddenProfile");
      const audio = document.getElementById("profileAudio");

      if (mainPic && hiddenPic && audio) {
        mainPic.addEventListener("click", () => {
          hiddenPic.style.display = "block";
          audio.play();

          setTimeout(() => {
            hiddenPic.style.display = "none";
          }, 2000);
        });
      }
    }, 100); // Slight delay to ensure DOM is rendered
  } else {
    document.getElementById("error-msg").textContent = "Invalid ID or Password.";
  }
}

// Toggle profile card visibility
document.addEventListener("click", function (event) {
  const profileBtn = event.target.closest("a.profile-btn");
  const profileCard = document.querySelector(".profile-card");

  if (profileBtn) {
    profileCard.classList.toggle("show");
  }

  if (!event.target.closest(".profile-card") && !event.target.closest("a.profile-btn")) {
    profileCard?.classList.remove("show");
  }
});

// Simple logout function
function logout() {
  location.reload();
}
