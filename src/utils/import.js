import { defineAsyncComponent } from 'vue'

export function registerGlobalComponents(app) {
    app.component(
        'primary-layout',
        defineAsyncComponent(() => import('@/layouts/primary.vue'))
    )

    app.component(
        'default-layout',
        defineAsyncComponent(() => import('@/layouts/default.vue'))
    )
}
