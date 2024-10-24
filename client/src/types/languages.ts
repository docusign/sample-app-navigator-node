export enum Lang {
  en = 'en',
  uk = 'uk',
}

export interface Language {
  title: string;
  value: string;
}

export type Langs = {
  [key in Lang]: Language;
};
