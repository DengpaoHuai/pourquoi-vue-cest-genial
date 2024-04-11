import CustomBalise from "./components/CustomBalise.vue";

declare module "vue" {
  export interface GlobalComponents {
    CustomBalise: typeof CustomBalise;
  }
}
