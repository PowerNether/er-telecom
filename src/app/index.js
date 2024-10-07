import { createApp } from 'vue'
import { router, pinia } from '@/app/providers'
import { WrapperBlock, CenterBlock, RowBlock, uModal, uInput, uTable, uContext } from '@/ui'

import App from '@/app/App.vue'

export const app = createApp(App)
    .component('WrapperBlock', WrapperBlock)
    .component('CenterBlock', CenterBlock)
    .component('RowBlock', RowBlock)
    .component('uModal', uModal)
    .component('uInput', uInput)
    .component('uTable', uTable)
    .component('uContext', uContext)
    .use(router)
    .use(pinia)
