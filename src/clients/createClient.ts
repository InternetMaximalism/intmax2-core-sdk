type Client = {
  version: string;
};

export const createClient = () => {
  return { version: "0.0.1" } as Client;
};
