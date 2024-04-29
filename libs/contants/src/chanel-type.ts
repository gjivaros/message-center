export const WORKER_CHANNEL = {
	newMessage: "message.new",
	messageResponse: "message.response",
} as const;

export type WORKER_CHANNEL_TYPE = typeof WORKER_CHANNEL[keyof typeof WORKER_CHANNEL];
