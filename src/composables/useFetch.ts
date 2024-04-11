import { onMounted, ref } from "vue";

const useFetch = <T>(url: string) => {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  onMounted(() => {
    loading.value = true;
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        data.value = results;

        loading.value = false;
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message);
        } else if (typeof error === "string") {
          console.error(error);
        } else {
          console.error("sa march pa :'(");
        }
      });
  });

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
