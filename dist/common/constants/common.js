"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
exports.EVENTS = {
    connection: 'connection',
    CLIENT: {
        SEND_ROOM_MESSAGE: 'SEND_ROOM_MESSAGE',
        REQUEST_ROOM_MESSAGE: 'REQUEST_ROOM_MESSAGE',
        REQUEST_CONTACT_LIST: 'REQUEST_CONTACT_LIST',
        DELETE_CONVERSATION: 'DELETE_CONVERSATION',
        JOIN_ROOM: 'JOIN_ROOM',
        DELETE_MESSAGE: 'DELETE_MESSAGE',
        TYPING: 'TYPING',
    },
    SERVER: {
        JOINED_ROOM: 'JOINED_ROOM',
        RECEIVED_ROOM_MESSAGE: 'RECEIVED_ROOM_MESSAGE',
        RECEIVED_CONTACT_LIST: 'RECEIVED_CONTACT_LIST',
        DELETE_MESSAGE_RESULT: 'DELETE_MESSAGE_RESULT',
        DELETE_CONVERSATION_RESULT: 'DELETE_CONVERSATION_RESULT',
        IS_TYPING: 'IS_TYPING',
        STATUS: {
            ONLINE: 'ONLINE',
            OFFLINE: 'OFFLINE',
        },
    },
};
//# sourceMappingURL=common.js.map