import { createRouter, createWebHistory } from 'vue-router'

/**
 * Application routes.
 * Admin routes use a lazy-loaded chunk to keep the main bundle small.
 * Optional scaffold pages are included but only render placeholder content.
 */
const routes = [
  // ── Landing page (Stephanie's business homepage) ────────────────────
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/LandingPageView.vue'),
    meta: { title: 'Custom Car Dealership Websites' },
  },
  // ── Demo dealership site (accessible via "View Demo" link) ──────────
  {
    path: '/demo',
    name: 'DemoHome',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Demo Dealership Website' },
  },

  // ── Programmatic SEO city pages ──────────────────────────────────────
  {
    path: '/car-dealership-websites-:citySlug',
    name: 'CityPage',
    component: () => import('../views/CityPageView.vue'),
    meta: { title: 'Car Dealership Websites' },
  },

  // ── Public pages ────────────────────────────────────────────────────
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../views/InventoryView.vue'),
    meta: { title: 'Browse Inventory' },
  },
  {
    path: '/inventory/:id',
    name: 'CarDetail',
    component: () => import('../views/CarDetailView.vue'),
    meta: { title: 'Vehicle Details' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About Us' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Us' },
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: () => import('../views/StartConversationView.vue'),
    meta: { title: 'Start the Conversation' },
  },
  {
    path: '/intake',
    name: 'ClientIntake',
    component: () => import('../views/ClientIntakeForm.vue'),
    meta: { title: 'Get Your Site Online' },
    beforeEnter: () => {
      if (import.meta.env.VITE_HIDE_INTAKE_FORM === 'true') return '/'
    },
  },
  {
    path: '/payments',
    name: 'Payments',
    component: () => import('../views/PaymentsView.vue'),
    meta: { title: 'Payments' },
  },

  // ── Optional pages (shown only when toggled on in admin settings) ────
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../views/StaffView.vue'),
    meta: { title: 'Meet the Staff' },
  },
  {
    path: '/financing',
    name: 'Financing',
    component: () => import('../views/FinancingView.vue'),
    meta: { title: 'Financing' },
  },
  {
    path: '/schedule-service',
    name: 'ScheduleService',
    component: () => import('../views/ScheduleServiceView.vue'),
    meta: { title: 'Schedule Service' },
  },
  {
    path: '/vin-decoder',
    name: 'VinDecoder',
    component: () => import('../views/VinDecoderView.vue'),
    meta: { title: 'Free VIN Decoder' },
  },

  // ── Admin panel ──────────────────────────────────────────────────────
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/admin/AdminLoginView.vue'),
    meta: { title: 'Admin Login', isAdminPublic: true },
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../views/admin/AdminDashboardView.vue'),
    meta: { title: 'Admin Dashboard', requiresAdmin: true },
    redirect: '/admin/home',
    children: [
      {
        path: 'home',
        name: 'AdminHome',
        component: () => import('../views/admin/AdminHomeView.vue'),
        meta: { title: 'Dashboard', requiresAdmin: true },
      },
      {
        path: 'cars',
        name: 'AdminCars',
        component: () => import('../views/admin/AdminCarsView.vue'),
        meta: { title: 'Manage Inventory', requiresAdmin: true },
      },
      {
        path: 'cars/new',
        name: 'AdminCarNew',
        component: () => import('../views/admin/AdminCarFormView.vue'),
        meta: { title: 'Add Vehicle', requiresAdmin: true },
      },
      {
        path: 'cars/:id/edit',
        name: 'AdminCarEdit',
        component: () => import('../views/admin/AdminCarFormView.vue'),
        meta: { title: 'Edit Vehicle', requiresAdmin: true },
      },
      {
        path: 'contacts',
        name: 'AdminContacts',
        component: () => import('../views/admin/AdminContactsView.vue'),
        meta: { title: 'Contact Submissions', requiresAdmin: true },
      },
      {
        path: 'settings',
        name: 'AdminSettings',
        component: () => import('../views/admin/AdminSettingsView.vue'),
        meta: { title: 'Site Settings', requiresAdmin: true },
      },
      {
        path: 'staff',
        name: 'AdminStaff',
        component: () => import('../views/admin/AdminStaffView.vue'),
        meta: { title: 'Manage Staff', requiresAdmin: true },
      },
    ],
  },

  // ── Legal ────────────────────────────────────────────────────────────
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: { title: 'Privacy Policy' },
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfServiceView.vue'),
    meta: { title: 'Terms of Service' },
  },

  // ── 404 catch-all ────────────────────────────────────────────────────
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Scroll to top on every route change
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

// ── Navigation guard: protect admin routes ──────────────────────────────
router.beforeEach((to, from, next) => {
  // Set a quick fallback title; individual views override via usePageMeta
  if (to.meta.title) document.title = to.meta.title

  // Demo site — admin is open for prospective clients to explore

  next()
})

export default router
