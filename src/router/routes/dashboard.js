export default [
    {
        path: '/dashboard',
        name: 'dashboard-home',
        component:() => import('@/views/dashoard/Home.vue'),
        meta: {
            title: 'الصفحة الرئيسية',
            icon: 'mdi-view-dashboard',
        }
    }
]