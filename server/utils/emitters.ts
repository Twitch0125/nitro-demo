const commentsEventTarget = new EventTarget();
export const commentsEmitter = {
  emit: (comment: string) => {
    commentsEventTarget.dispatchEvent(
      new CustomEvent("comment", { detail: comment })
    );
  },
  subscribe: (handler: (event: CustomEvent) => void) => {
    commentsEventTarget.addEventListener("comment", handler);
    return () => commentsEventTarget.removeEventListener("comment", handler);
  },
};
