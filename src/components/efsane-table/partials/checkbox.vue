<template>
  <label :for="name" class="efsane-table-checkbox relative" >
    <div class="check-wrapper">
      <slot name="checkbox-input"></slot>
      <span class="efsane-table-custom-checkbox">
                    <span class="efsane-checkbox-first-line"></span>
                    <span class="efsane-checkbox-second-line"></span>
                </span>
    </div>
  </label>
</template>

<script>
export default {
  props:{
    name:[String,Number]
  }
}
</script>

<style lang="scss">
.efsane-table-checkbox {
  position: relative;
  cursor: pointer;
  margin-inline:10px;
  padding-inline:10px;
  display: table;

  [type=checkbox] {
    opacity: 0;
    position: absolute;

    &:checked ~ .efsane-table-custom-checkbox {
      .efsane-checkbox-first-line,
      .efsane-checkbox-second-line {
        &:before {
          height: 100%;
        }
      }

      .efsane-checkbox-first-line {
        &:before {
          transition: height 150ms ease-in-out 0ms;
        }
      }

      .efsane-checkbox-second-line {
        &:before {
          transition: height 150ms ease-in-out 150ms;
        }
      }
    }
  }


  .efsane-table-custom-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    background: #fff;
    box-shadow: inset 1px 1px 1px 1px rgba (0, 0, 0, .1);
    border-radius: 3px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    vertical-align: middle;

    .efsane-checkbox-first-line,
    .efsane-checkbox-second-line {
      display: block;
      width: 3px;
      position: absolute;

      &:before {
        position: relative;
        width: 100%;
        height: 0;
        content: '';
        display: block;
        background: #3cabea;
        border-radius: 3px;
      }
    }

    .efsane-checkbox-first-line {
      height: 8px;
      transform: rotate(-45deg);
      top: 7px;
      left: 4px;

      &:before {
        transition: height 150ms ease-in-out 150ms;
      }
    }

    .efsane-checkbox-second-line {
      height: 12px;
      transform: rotate(225deg);
      bottom: 3px;
      left: 10px;

      &:before {
        transition: height 150ms ease-in-out 0ms;
      }
    }
  }
}
</style>
