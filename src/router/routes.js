export const routes = [
  {
    name: "profile",
    path: "/",
    alias: "/main",
    component: () => import("@/views/VHome.vue"),
  },
  {
    name: "page1",
    path: "/page1",
    component: () => import("@/views/VPage1.vue"),
  },
  {
    name: "page2",
    path: "/page2",
    component: () => import("@/views/VPage2.vue"),
  },
  {
    name: "page3",
    path: "/page3",
    component: () => import("@/views/VPage3.vue"),
  },
  {
    name: "page4",
    path: "/page4",
    component: () => import("@/views/VPage4.vue"),
  },
  {
    name: "page4i",
    path: "/page4/:id",
    component: () => import("@/components/PostIdPage.vue"),
  },
  {
    path: "/page5",
    component: () => import("@/views/VPage5.vue"),
  },
  {
    path: "/page6",
    component: () => import("@/views/VPage6.vue"),
  },
  {
    path: "/page7",
    component: () => import("@/views/VPage7.vue"),
  },
  {
    path: "/page8",
    name: "crm",
    component: () => import("@/views/VPage8.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/authent",
    name: "authent",
    component: () => import("@/views/VAuthend.vue"),
  },
];
