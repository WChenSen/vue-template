import UnoCSS from '@unocss/postcss'
import autoprefixer from 'autoprefixer'

import postcssPxToViewport8Plugin from 'postcss-px-to-viewport-8-plugin'
export default {
    plugins: [
        autoprefixer({
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8',
                '> 1%',
            ],
            grid: true,
        }),
        UnoCSS(),
        postcssPxToViewport8Plugin({ viewportWidth: 375, unitToConvert: 'px' }),
    ],
}
