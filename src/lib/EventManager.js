export default class EventManager {
  constructor() {
    this.listeners = new Map();

  };

  on(event, listener) {
    if (!this.listeners.has(event)) this.listeners.set(event, []);

    this.listeners.get(event).push(listener);

  };

  emit(event, payload) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event).forEach(listener => listener(payload));

  };

  removeListener(event, listenerToRemove) {
    const eventsListeners = this.listeners.get(event);

    if (!eventsListeners) return;

    const filteredListeners = this.listeners.get(event).filter(listener => listener !== listenerToRemove);

    this.listeners.set(event, filteredListeners);

  };

};
