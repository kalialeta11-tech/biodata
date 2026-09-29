/**
 * PORTFOLIO SCRIPT - KALIA LETA AL GUMAISHA
 * Tugas Informatika - SMA Negeri 19 Bandung
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Calculate Age Automatically from Birth Date: 23 Oktober 2010
  const birthDate = new Date(2010, 9, 23); // Month is 0-indexed (9 = Oct)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const ageEl = document.getElementById('calculated-age');
  if (ageEl) {
    ageEl.textContent = `${age} Tahun`;
  }

  // 2. Theme Toggle (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('kalia_theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('kalia_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'light' 
      ? '<i class="fa-solid fa-moon"></i>' 
      : '<i class="fa-solid fa-sun"></i>';
  }

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // 4. Real MP3 Music Player Control ("The Cure - Olivia Rodrigo")
  const audio = document.getElementById('real-audio-player');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const playBtnText = document.getElementById('play-btn-text');
  const btnReplay = document.getElementById('btn-replay');
  const audioSeek = document.getElementById('audio-seek');
  const timeCurrent = document.getElementById('time-current');
  const timeDuration = document.getElementById('time-duration');
  const btnVolume = document.getElementById('btn-volume');
  const volumeIcon = document.getElementById('volume-icon');
  const volumeSlider = document.getElementById('volume-slider');
  const soundBars = document.getElementById('sound-bars');
  const musicDisc = document.getElementById('music-disc');
  const musicStatusPill = document.getElementById('music-status-pill');

  // Floating Mini-Bar elements
  const floatingMusicBar = document.getElementById('floating-music-bar');
  const floatingPlayBtn = document.getElementById('floating-play-btn');
  const floatingPlayIcon = document.getElementById('floating-play-icon');
  const floatingDisc = document.getElementById('floating-disc');

  if (audio) {
    // Format Seconds to M:SS
    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Toggle Play / Pause
    function togglePlayPause() {
      if (audio.paused || audio.ended) {
        audio.play().then(() => {
          updatePlayUI(true);
        }).catch(err => {
          console.warn("Audio play prevented:", err);
        });
      } else {
        audio.pause();
        updatePlayUI(false);
      }
    }

    function updatePlayUI(isPlaying) {
      if (isPlaying) {
        if (playPauseIcon) playPauseIcon.className = 'fa-solid fa-pause';
        if (playBtnText) playBtnText.textContent = 'Jeda Lagu';
        if (floatingPlayIcon) floatingPlayIcon.className = 'fa-solid fa-pause';
        if (soundBars) soundBars.classList.add('playing');
        if (musicDisc) musicDisc.classList.add('spinning');
        if (floatingDisc) floatingDisc.classList.add('spinning');
        if (musicStatusPill) {
          musicStatusPill.textContent = 'Sedang Memutar 🎵';
          musicStatusPill.classList.add('playing');
        }
        if (floatingMusicBar) floatingMusicBar.classList.add('active');
      } else {
        if (playPauseIcon) playPauseIcon.className = 'fa-solid fa-play';
        if (playBtnText) playBtnText.textContent = 'Putar Lagu';
        if (floatingPlayIcon) floatingPlayIcon.className = 'fa-solid fa-play';
        if (soundBars) soundBars.classList.remove('playing');
        if (musicDisc) musicDisc.classList.remove('spinning');
        if (floatingDisc) floatingDisc.classList.remove('spinning');
        if (musicStatusPill) {
          musicStatusPill.textContent = audio.ended ? 'Selesai' : 'Dijeda';
          musicStatusPill.classList.remove('playing');
        }
      }
    }

    if (btnPlayPause) btnPlayPause.addEventListener('click', togglePlayPause);
    if (floatingPlayBtn) floatingPlayBtn.addEventListener('click', togglePlayPause);

    // Replay Song
    if (btnReplay) {
      btnReplay.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play().then(() => updatePlayUI(true));
      });
    }

    // Update duration when metadata is ready
    audio.addEventListener('loadedmetadata', () => {
      if (timeDuration) timeDuration.textContent = formatTime(audio.duration);
    });

    // Update current time & seek slider
    audio.addEventListener('timeupdate', () => {
      if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
      if (audioSeek && audio.duration) {
        audioSeek.value = (audio.currentTime / audio.duration) * 100;
      }
    });

    // Seeking on progress slider
    if (audioSeek) {
      audioSeek.addEventListener('input', () => {
        if (audio.duration) {
          audio.currentTime = (audioSeek.value / 100) * audio.duration;
        }
      });
    }

    // When song ends
    audio.addEventListener('ended', () => {
      updatePlayUI(false);
      if (audioSeek) audioSeek.value = 0;
      if (timeCurrent) timeCurrent.textContent = '0:00';
    });

    // Volume Slider
    if (volumeSlider) {
      audio.volume = parseFloat(volumeSlider.value);
      volumeSlider.addEventListener('input', (e) => {
        audio.volume = parseFloat(e.target.value);
        audio.muted = (audio.volume === 0);
        updateVolumeIcon();
      });
    }

    // Mute Button
    if (btnVolume) {
      btnVolume.addEventListener('click', () => {
        audio.muted = !audio.muted;
        updateVolumeIcon();
      });
    }

    function updateVolumeIcon() {
      if (!volumeIcon) return;
      if (audio.muted || audio.volume === 0) {
        volumeIcon.className = 'fa-solid fa-volume-xmark';
      } else if (audio.volume < 0.5) {
        volumeIcon.className = 'fa-solid fa-volume-low';
      } else {
        volumeIcon.className = 'fa-solid fa-volume-high';
      }
    }
  }

  // 5. Digital Student Card Modal (Kartu Pelajar)
  const openModalBtn = document.getElementById('open-card-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalOverlay = document.getElementById('student-card-modal-overlay');

  if (openModalBtn && modalOverlay) {
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  }

  if (closeModalBtn && modalOverlay) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 6. Interactive Contact Form with LocalStorage & Toast Notification
  const contactForm = document.getElementById('portfolio-contact-form');
  const toastMsg = document.getElementById('toast-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = document.getElementById('sender-name')?.value || 'Teman';
      const senderMsg = document.getElementById('sender-message')?.value || '';

      // Simpan log pesan di localStorage
      const existingMsgs = JSON.parse(localStorage.getItem('kalia_guestbook') || '[]');
      existingMsgs.push({
        name: senderName,
        message: senderMsg,
        time: new Date().toLocaleTimeString('id-ID')
      });
      localStorage.setItem('kalia_guestbook', JSON.stringify(existingMsgs));

      // Reset form
      contactForm.reset();

      // Show Toast
      if (toastMsg) {
        toastMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Terima kasih, ${senderName}! Pesanmu telah diterima.`;
        toastMsg.classList.add('show');
        setTimeout(() => {
          toastMsg.classList.remove('show');
        }, 3500);
      }
    });
  }
});
