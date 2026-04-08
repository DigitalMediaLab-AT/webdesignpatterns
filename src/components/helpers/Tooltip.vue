<script>
import { defineComponent, ref, computed } from 'vue'
import { createPopper } from '@popperjs/core'

export default defineComponent({
  name: 'TooltipComponent',
  props: {
    placement: String,
    blockname: String,
    description: String,
    color: String,
    disabled: Boolean
  },
  setup(props) {
    const button = ref(null)
    const tooltip = ref(null)

    const popperInstance = computed(() => {
      return createPopper(button.value, tooltip.value, {
        placement:props.placement,
        blockname: props.blockname,
        description: props.description,
        color: props.color,
        disabled: props.disabled,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
        strategy: 'fixed'
      })
    });

    const insertElement = (btn, tip) => {
      button.value = btn
      tooltip.value = tip
    }

    const handleShow = (e) => {
      if (button.value === null && tooltip.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.tooltipText'))
      }
      tooltip.value.setAttribute('data-show', '')
      popperInstance.value.update()
    }

    const handleHide = (e) => {
      if (button.value === null && tooltip.value === null) {
        insertElement(e.target, e.target.parentElement.querySelector('.tooltipText'))
      }
      tooltip.value.removeAttribute('data-show')
    }

    return {
      handleShow,
      handleHide
    }
  }
})
</script>
  
<template>
  <div class="tooltip">

    <span :class="[!disabled ? color : '']" class="badge badge-dark" type="button" aria-describedby="tooltip"
      @mouseenter="handleShow($event)" @mouseleave="handleHide($event)" @focus="handleShow($event)"
      @blur="handleHide($event)">
      {{ blockname }}
    </span>

    <div v-if="description != ''" class="tooltipText" role="tooltip">
      {{ description }}
      <div class="tooltipArrow" data-popper-arrow></div>
    </div>

  </div>
</template>
  
<style lang="scss" scoped>
.badge {
  z-index: 5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 120px;
  display: inline-block;
  line-height: 1.2;
  padding: 0.2rem 0.4rem;
  font-size: 0.9rem;
}

.tooltip {
  z-index: 2147483646 !important;
  opacity: 10;
  position: relative;
  display: inline-block;
  .tooltipText {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 12rem !important;
    max-width: 12rem !important;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    hyphens: auto;
    line-height: 1.35;

    z-index: 2147483647 !important;
    background-color: #333;
    color: white;
    padding: 0.5rem 0.65rem;
    border-radius: 4px;
    font-size: 0.95rem;
    display: none;
    opacity: 100;
  }
  .tooltipText[data-show] {
    display: block;
  }

  .tooltipArrow,
  .tooltipArrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  .tooltipArrow {
    visibility: hidden;
  }

  .tooltipArrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  .tooltipText[data-popper-placement^='top']>.tooltipArrow {
    bottom: -4px;
  }

  .tooltipText[data-popper-placement^='bottom']>.tooltipArrow {
    top: -4px;
  }

  .tooltipText[data-popper-placement^='left']>.tooltipArrow {
    right: -4px;
  }

  .tooltipText[data-popper-placement^='right']>.tooltipArrow {
    left: -4px;
  }
}
</style>
  