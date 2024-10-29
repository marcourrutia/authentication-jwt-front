const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      token: "",
    },
    actions: {
      setToken: (value) => {
        setStore({ token: value });
      },
    },
  };
};

export default getState;
