function showVideos() {
    const menu = document.getElementById('videoMenu');
    const sections = document.querySelectorAll('.video-section');
  
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const selected = menu.value;
    if (selected) {
      document.getElementById(selected).style.display = 'block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const landingImage = document.getElementById('enterImage');
    const landingScreen = document.getElementById('landingScreen');
    const mainContent = document.getElementById('mainContent');
  
    landingImage.addEventListener('click', function () {
      landingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    });
  });

  window.onload = () => {
    const enterImage = document.getElementById('enterImage');
    const landingScreen = document.getElementById('landingScreen');
    const mainContent = document.getElementById('mainContent');
  
    enterImage.onclick = () => {
      landingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    };
  };
  



  window.onload = () => {
    const enterImage = document.getElementById('enterImage');
    const landingScreen = document.getElementById('landingScreen');
    const mainContent = document.getElementById('mainContent');
  
    enterImage.onclick = () => {
      landingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    };
  };
  
  function showVideos() {
    const menu = document.getElementById("videoMenu");
    const videoList = document.getElementById("videoList");
    const selectedType = menu.value;
  
    videoList.innerHTML = ""; // Clear previous content
  
    const videoData = {
      Brestfeeding: [
        {
          title: "Step Mother's Milk & Honey",
          url: "https://tinyurl.com/ydnbus68",
          thumbnail: "nofap.png"
        },
        {
          title: "Hot Milf Lets Stepson Taste Her Milk",
          url: "https://tinyurl.com/mwbb8baf",
          thumbnail: "nofap.png"
        }
      ],
      Cuminmouth: [
        {
          title: "Type 2 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID3",
          thumbnail: "nofap.png"
        },
        {
          title: "Type 2 - Video 2",
          url: "https://www.youtube.com/watch?v=VIDEO_ID4",
          thumbnail: "nofap.png"
        }
      ],
      type3: [
        {
          title: "Type 3 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID5",
          thumbnail: "nofap.png"
        },
        {
          title: "Type 3 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID5",
          thumbnail: "nofap.png"
        }
        
      ],
      type4: [
        {
          title: "Type 4 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID6",
          thumbnail: "nofap.png"
        },
        {
          title: "Type 4 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID6",
          thumbnail: "nofap.png"
        }
      ],
      type5: [
        {
          title: "Type 5 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID7",
          thumbnail: "nofap.png"
        },
        {
          title: "Type 5 - Video 1",
          url: "https://www.youtube.com/watch?v=VIDEO_ID7",
          thumbnail: "nofap.png"
        }
      ]
    };
  
    const videos = videoData[selectedType];
  
    if (videos) {
      const container = document.createElement("div");
      container.className = "video-grid";
  
      videos.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
  
        // Clickable thumbnail
        const imgLink = document.createElement("a");
        imgLink.href = video.url;
        imgLink.target = "_blank";
  
        const img = document.createElement("img");
        img.src = video.thumbnail;
        img.alt = video.title;
        img.className = "thumbnail";
  
        imgLink.appendChild(img);
  
        // Clickable title
        const titleLink = document.createElement("a");
        titleLink.href = video.url;
        titleLink.target = "_blank";
        titleLink.textContent = video.title;
        titleLink.className = "video-title";
  
        videoCard.appendChild(imgLink);
        videoCard.appendChild(titleLink);
  
        container.appendChild(videoCard);
      });
  
      videoList.appendChild(container);
    }
  }
  