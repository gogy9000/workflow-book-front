import { UseFormSetValue,Path } from 'react-hook-form'

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function entries<T>(obj: T): Entries<T> {
  return Object.entries(
    obj as { [s: string]: unknown } | ArrayLike<unknown>,
  ) as any;
}

export const setForms = <T extends Record<string, any>>(
  mailingTask: T | undefined,
  setValue: UseFormSetValue<T>,
) => {
  if (mailingTask) {
    entries(mailingTask).forEach(([key, value]) => {
      setValue(key as Path<T>, value);
    });
  }
};

