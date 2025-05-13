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
      Cum_in_mouth: [
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
      american_expreso: [
        {
          title: "netflix and chill ",
          url: "https://www.pornhub.com/view_video.php?viewkey=66397adddda90",
          thumbnail: "nofap.png"
        },
        {
          title: "nigga 1",
          url: "https://www.pornhub.com/view_video.php?viewkey=ph6022dc2d42888",
          thumbnail: "nofap.png"
        },
          {
          title: "nigga 2",
          url: "https://www.pornhub.com/view_video.php?viewkey=ph5c3c49be52473",
          thumbnail: "nofap.png"
        },
        {
          title: "stepmom",
          url: "https://www.pornhub.com/view_video.php?viewkey=649b827a645b5",
          thumbnail: "nofap.png"
        },
        {
          title: "threesome",
          url: "https://www.pornhub.com/view_video.php?viewkey=65bb0724878ef",
          thumbnail: "nofap.png"
        },
        {
          title: "nun",
          url: "https://www.pornhub.com/view_video.php?viewkey=66f14837ef169",
          thumbnail: "nofap.png"
        },
        {
          title: "magic threesome",
          url: "https://www.pornhub.com/view_video.php?viewkey=668e50dce1bc4",
          thumbnail: "nofap.png"
        },
           {
          title: "threesome 2",
          url: "https://www.pornhub.com/view_video.php?viewkey=65aa77ab8694a",
          thumbnail: "nofap.png"
        },
        {
          title: "threesome 3",
          url: "https://www.pornhub.com/view_video.php?viewkey=ph6399dc8edcc17",
          thumbnail: "nofap.png"
        },
         {
          title: "foursome",
          url: "https://www.pornhub.com/view_video.php?viewkey=ph62e7d440dceeb",
          thumbnail: "nofap.png"
        },
       
        {
          title: "stepsister",
          url: "https://www.pornhub.com/view_video.php?viewkey=662fc64403ffd",
          thumbnail: "nofap.png"
        },
        {
          title: "stepsister 2",
          url: "https://www.pornhub.com/view_video.php?viewkey=67d3738a4eccf",
          thumbnail: "nofap.png"
        },
        {
          title: "latina stepmom 2",
          url: "https://www.pornhub.com/view_video.php?viewkey=6556f49b328ba",
          thumbnail: "nofap.png"
        },
        {
          title: "lesbian",
          url: "https://www.pornhub.com/view_video.php?viewkey=67a47b037b7bd",
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


document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Optional: save user preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // Load saved theme on refresh
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
