<template>
  <div>
    <div class="image-wrapper">
      <span class="image-text">Draggable Columns</span>
      <img  class="image-container" fetchpriorty="high" alt="Draggable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-draggable.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Dynamic Columns From Data</span>
      <img  class="image-container" fetchpriorty="high" alt="Dynamic Columns From Data" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-dynamic-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Resizable Columns</span>
      <img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low"   alt="Resizable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-resizable-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Columns</span>
      <img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low"  alt="Editable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Design</span>
      <img  class="image-container" loading="lazy" decoding="async" fetchpriorty="low" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-design.gif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview'
}
</script>

<style lang="scss" scoped>
body{
  background-color: #FCFCFF;
}
.image-wrapper{
  background-color: #FCFCFF;
  position: relative;
  display: grid;
  place-content: center;
  margin: 10px auto;
  width: 90%;
  border: 1px dashed rgba(0,0,0,.1);
  border-radius: 5px;
  padding-bottom: 25px;
}
.image-container {
  position: relative;
  border-radius: 8px;
  width: 95%;
  height: 100%;
  padding-inline: 2.5%;
}

.image-text {
  font-weight: 600;
  font-size: 1.2em;
  text-align: left;
  padding-top: 30px;
  color: #343A40;
}
</style>
