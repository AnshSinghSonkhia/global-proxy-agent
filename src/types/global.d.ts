// declare namespace NodeJS {
//     interface Global {
//       GLOBAL_AGENT?: {
//         HTTP_PROXY?: string;
//         HTTPS_PROXY?: string;
//         NO_PROXY?: string;
//         [key: string]: any;
//       };
//     }
//   }
  
export {};

declare global {
  namespace NodeJS {
    interface Global {
      GLOBAL_AGENT?: {
        HTTP_PROXY?: string;
        HTTPS_PROXY?: string;
        NO_PROXY?: string;
        agent?: any;
        setAgent?: (agent: any) => void;
      };
    }
  }
}
