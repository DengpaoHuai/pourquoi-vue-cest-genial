import { onMounted, ref, UnwrapRef } from "vue";

const useLocalStorage = <T>(key: string) => {
  const data = ref<T | null>(null);

  onMounted(() => {
    const json = localStorage.getItem(key);
    if (json) {
      let result: UnwrapRef<T> = JSON.parse(json);
      data.value = result;
    }
  });

  const remove = () => {
    localStorage.removeItem(key);
    data.value = null;
  };

  const set = (payload: UnwrapRef<T>) => {
    data.value = payload;
    localStorage.setItem(key, JSON.stringify(payload));
  };

  return {
    data,
    set,
    remove,
  };
};

export default useLocalStorage;
