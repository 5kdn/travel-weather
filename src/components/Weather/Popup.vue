<script setup lang="ts">
import { ref, withDefaults, watch } from 'vue'
import type { Ref } from 'vue'
import draggable from 'vuedraggable'
import { MovementMethod } from '../utils/MovementMethod'

const props = withDefaults(
  defineProps<{
    isShow: boolean
    movementMethod?: MovementMethod
    points?: Array<string>
  }>(), {
    isShow: false,
    movementMethod: MovementMethod.Car,
    points: () => ['', ''],   // 始点, 終点の2箇所
  },
)
const emits = defineEmits<{
  (
    e: 'Sender',
    value?: {
      movementMethod: MovementMethod
      points: Array<string>
    },
  ): void
}>()

const _isShow: Ref<boolean> = ref(props.isShow)
const _movementMethod: Ref<MovementMethod> = ref(props.movementMethod)
const _points = ref(props.points)

/** pointsのラベルを設定する */
const getLabel = (index: number): string => {
  let text = '中継地'
  if (index === 0) {
    text = '出発地'
  } else if (index === _points.value.length - 1) {
    text = '目的地'
  }
  return text
}

/** ダイアログを閉じるときの設定 */
const closeDialog = (isSendValue: boolean): void => {
  if (isSendValue) {
    const senderPoints = [] as Array<string>
    _points.value.forEach((point) => {
      if (point !== '') {
        senderPoints.push(point)
      }
    })
    emits('Sender', {
      movementMethod: _movementMethod.value,
      points: senderPoints,
    })
  }
  _isShow.value = false
}

/** 反転ボタンを押したときのイベント */
const onClickReverceButton = (): void => { _points.value.reverse() }

/** delete buttonをクリックしたときのイベント */
const onClickDeleteBtn = (index: number): void => {
  if (_points.value.length <= 1) { return }
  _points.value.splice(index, 1)
}
</script>
<script lang="ts">
export default {
  components: { draggable },
}
</script>

<template lang="pug">
v-dialog(
  v-model="_isShow"
  width="80vw"
  @click:outside='closeDialog(false)'
  )
  v-card.dialog_inners
    v-card#button-area
      v-btn-toggle.left(v-model="_movementMethod")
        v-btn: v-icon(icon="mdi-baseline-directions-car")
        v-btn: v-icon(icon="mdi-baseline-pedal-bike")
        v-btn: v-icon(icon="mdi-baseline-directions-run")
      .right
        v-btn(icon @click='onClickReverceButton()')
          v-icon(icon="mdi-baseline-import-export")
        v-btn(icon color="red" @click='closeDialog(false)')
          v-icon(icon="mdi-baseline-close")
    hr/
    draggable(v-model="_points" item-key="id")
      template(#item="{element, index}")
        .v-text-field-wrapper
          v-text-field(
            clearable
            persistent-clear
            prepend-icon="mdi-map-marker"
            :label='getLabel(index)'
            :model-value="_points[index]"
            @input="_points[index] = $event.target.value"
          )
          v-btn(
            height="55px"
            width="55px"
            class="deleteBtn"
            @click="onClickDeleteBtn(index)")
            v-icon mdi-trash-can-outline

    v-btn(
      @click="_points.splice(-1, 0, '')"
      prepend-icon="mdi-plus-circle-outline"
      width="100%"
      color="purple") add place
    v-btn(
      @click="closeDialog(true)"
      width="100%"
      color="green") Update Trip
</template>

<style lang="scss" scoped>
.dialog_inner {
  background-color: white;
  width: 100%;
  height: 100%;
}

#button-area {
  display: flex;

  .left {
    margin-right: auto;
  }

  .right {
    margin-left: auto;
  }
}

.v-text-field-wrapper {
  display: flex;
  flex-direction: row;
  .deleteBtn:hover {
    background: #f66;
  }
}
</style>
