import { defineConfig, presetUno, presetWind, presetIcons } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    presets: [presetUno(), presetRemToPx(), presetWind(), presetIcons],
})
