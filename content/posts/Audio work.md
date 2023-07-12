---
title: Audio work
image: '/b123.png'
---
<style>
  .tag-button {
    margin-right: 10px;
    font-size: 22px;
    padding: 8px 16px;
  }
  .audio-item {
    display: inline-block;
    margin-right: 5px;
  }
  .hidden {
    display: none;
  }
  .gap {
    margin-top: 3em;
  }
</style>

<div class="centered-text">
  <div id="tag-buttons">
    <button class="tag-button" onclick="filterAudio('Nature')">Nature</button>
    <button class="tag-button" onclick="filterAudio('Machinery')">Machinery</button>
    <button class="tag-button" onclick="filterAudio('Water')">Water</button>
	<button class="tag-button" onclick="filterAudio('Ambience')">Ambience</button>
    <button class="tag-button" onclick="showAllAudio()">Show All</button>
  </div>

  <div class="gap"></div>

  ### Self-created [Soundscapes](https://dictionary.cambridge.org/de/worterbuch/englisch/soundscape), of pretty much anything.

  ##### Ermine soundscapes are seamless - they can be looped indefinitely, without any cuts.
  [»Soundscapes/GDrive«](https://drive.google.com/drive/folders/1QX687ELQfYtzNdagNeIhV_71na0-H4r3?usp=sharing)
  [»Soundscapes/YT«](https://www.youtube.com/playlist?list=PL4Oja0jBt-1N6eAg-f4TI4bBbuENOvCEY)
  [»Song loops/YT«](https://www.youtube.com/playlist?list=PL5WEj7zZAeDbyvkEdcWp7HgPZ2V62rgMe)

  ## Examples

  <div id="audio-container">
    <div class="audio-item" data-tags="Nature">
      {{<audio src="soundscape1.wav" caption="CricketsIndustryHumming" data-tags="Nature">}}
    </div>
    <div class="audio-item" data-tags="Machinery">
      {{<audio src="soundscape4.wav" caption="DieselLocomotiveIdle" data-tags="Machinery">}}
    </div>
    <div class="audio-item" data-tags="Machinery">
      {{<audio src="soundscape3.wav" caption="MachineComputerFridgeAmbient" data-tags="Machinery">}}
    </div>
    <div class="audio-item" data-tags="Water">
      {{<audio src="soundscape2.wav" caption="WaterdamConstant" data-tags="Water">}}
    </div>
	   <div class="audio-item" data-tags="Machinery">
      {{<audio src="D2PumpMachineOnAndOff.wav" caption="PumpMachineOnAndOff" data-tags="Machinery">}}
    </div>
	   <div class="audio-item" data-tags="Nature">
      {{<audio src="A7WaterPeopleBirdsRooster.wav" caption="WaterPeopleBirdsRooster" data-tags="Nature">}}
    </div>
	   <div class="audio-item" data-tags="Ambience">
      {{<audio src="AirportGateWaitingAmbientDiningNoise.wav" caption="AirportGateWaitingAmbientDiningNoise" data-tags="Ambience">}}
    </div>
	  <div class="audio-item" data-tags="Water">
      {{<audio src="C4 RiverFlowingWaterDrippingRapidly.wav" caption="RiverFlowingWaterDrippingRapidly" data-tags="Water">}}
    </div>
  </div>
</div>

<script>
  function filterAudio(genre) {
    var audioItems = document.getElementsByClassName('audio-item');
    for (var i = 0; i < audioItems.length; i++) {
      var item = audioItems[i];
      var itemTags = item.getAttribute('data-tags');
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

  document.addEventListener("DOMContentLoaded", function() {
    showAllAudio();
  });
</script>
