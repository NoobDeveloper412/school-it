export type Theme = {
  [key: string]:
    | string
    | {
        [key: string]: string;
      };
};
