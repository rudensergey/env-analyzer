export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_PASSWORD: string;
      MONGODB_USER: string;
      JSW_PRIVATE_KEY: string;
    }
  }
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
