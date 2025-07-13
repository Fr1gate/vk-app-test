type callbackType = (payload: unknown) => void;

const subscriptions: Record<string, Array<callbackType>> = {};

export const EventBus = {
  on: (event: string, callback: callbackType) => {
    if (subscriptions[event]) {
      subscriptions[event].push(callback);
    } else {
      subscriptions[event] = [callback];
    }
  },
  emit: (event: string, payload: unknown) => {
    if (subscriptions[event]) {
      subscriptions[event].forEach((callback) => callback(payload));
    }
  },
  off: (event: string, callback: callbackType) => {
    if (subscriptions[event]) {
      subscriptions[event] = subscriptions[event].filter(
        (cb) => cb !== callback,
      );
    }
  },
};
