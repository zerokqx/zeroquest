export const SUBSCRIBE_EVENTS = {
  NEW: 'subscribe:new',
} as const;

export type SubscribeEventName =
  (typeof SUBSCRIBE_EVENTS)[keyof typeof SUBSCRIBE_EVENTS];

export type SubscribeEventMap = {
  [SUBSCRIBE_EVENTS.NEW]: {
    paymentId: string;
    planId: number;
    userId: string
    name: string,
    inboundId:number,
  };
};

export type SubscribeNew = SubscribeEventMap[typeof SUBSCRIBE_EVENTS.NEW];

export type SubscribeEvent = SubscribeEventMap[SubscribeEventName];
