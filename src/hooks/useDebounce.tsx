import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number = 300): T {
  // 状态：存储防抖后的值
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 设置定时器，在指定延迟后更新防抖值
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 清除副作用：组件卸载或依赖项变化时清除定时器
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // 依赖项：当原始值或延迟时间变化时重新执行

  // 返回防抖后的值
  return debouncedValue;
}

export default useDebounce;