function activateTab(tabId) {
  const tabs = document.querySelectorAll('.nav-item');
  for (let i = 0; i < tabs.length; i++) {
  tabs[i].classList.remove('active');
  }

  document.getElementById(tabId).classList.add('active');

  const content = document.getElementById('content');

  if (tabId === 'image1') {
    content.innerHTML = '<img src="download1.jpg" alt="Image 1">';
  } else if (tabId === 'image2') {
    content.innerHTML = '<img src="download2.jpg" alt="Image 2">';
  } else if (tabId === 'image3') {
    content.innerHTML = '<img src="download3.jpg" alt="Image 3">';
  } else if (tabId === 'image4') {
    content.innerHTML = '<img src="download4.jpg" alt="Image 4">';
  }
}
