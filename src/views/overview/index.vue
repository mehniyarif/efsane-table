<template>
  <div>
    <div class="image-wrapper">
      <span class="image-text">Draggable Columns</span>
      <img  class="image-container" alt="Draggable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-draggable.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Dynamic Columns From Data</span>
      <img  class="image-container" alt="Dynamic Columns From Data" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-dynamic-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Resizable Columns</span>
      <img  class="image-container" alt="Resizable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-resizable-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Columns</span>
      <img  class="image-container" alt="Editable Columns" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-columns.gif">
    </div>
    <div class="image-wrapper">
      <span class="image-text">Editable Design</span>
      <img  class="image-container" alt="Editable Design" src="https://efsane.s3.eu-central-1.amazonaws.com/efsane-editable-design.gif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview'
}
</script>

<style lang="scss" scoped>
.image-wrapper{
  position: relative;
  width: 100%;
  display: grid;
  place-content: center;
  padding-inline: 5px;
}
.image-container {
  position: relative;
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.image-text {
  font-weight: 600;
  font-size: 2em;
  background-color: #fff;
  padding: 20px;
}
</style>
