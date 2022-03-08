import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

export const useProduct = ({
  onChange,
  product,
  countValue = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(
    initialValues?.count || countValue
  );
  const isMounted = useRef(false);
  let isMaxCountReached =
    !!initialValues?.count && initialValues.maxCount === counter;

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }
    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || countValue);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(countValue);
  }, [countValue]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached,
    maxCount: initialValues?.maxCount,

    increaseBy,
    reset,
  };
};

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  countValue?: number;
  initialValues?: InitialValues;
}
