document.addEventListener("DOMContentLoaded", function() {
  showAllAudio();
});

function filterAudio(genre) {
  var audioItems = document.getElementsByClassName('audio-item');
  for (var i = 0; i < audioItems.length; i++) {
    var item = audioItems[i];
    var itemTags = item.getAttribute('tags');
    if (itemTags && itemTags.includes(genre) || genre === 'Show All') {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  }
}

function showAllAudio() {
  var audioItems = document.getElementsByClassName('audio-item');
  for (var i = 0; i < audioItems.length; i++) {
    var item = audioItems[i];
    item.classList.remove('hidden');
  }
}
