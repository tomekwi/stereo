import normalizeEvents from './tools/normalizeEvents';
import normalizeListener from './tools/normalizeListener';

export default (emitter) => function off(events, listener) {
  let { listeners } = emitter;

  // Normalize arguments.
  events = normalizeEvents(events);

  // If no listener is specified, unregister all listeners.
  if (listener == null) for (let event of events) {
    delete listeners[event];
  }

  // Otherwise unregister the given listener.
  else {
    listener = normalizeListener(listener);
    for (let event of events) {
      listeners[event].delete(listener);
    }
  }
};
