export const Asset = {
    USDT: 0,
    USDC: 1,
    ETH: 2,
    BNB: 3,
    BTC: 4,
    BUSD: 5,
}

export const Network = {
    ETH: 0,
    BSC: 1,
    BTC: 2,
}

export const FlowType = {
    DEBIT: 1,
    CREDIT: 2,
}

export const ListingType = {
    BUY: 1,
    SELL: 2,
}

export const SessionEvent = {
    SESSIONCREATED: 1,
    MADEPAYMENT: 2,
    UPDATEAMOUNT: 3,
    ESCROWPUSHCOMPLETE: 4,
    REPORTED: 5,
    CANCELLED: 6,
    VERIFIEDPAYMENT: 7,
}

export const TransactionGroup = {
    SEND: 1,
    RECEIVE: 2,
    SWAP: 3,
    BUY: 4,
    SELL: 5,
}

export const TransactionMode = {
    SUCCESS: 1,
    FAILED: 2,
    PENDING: 3
}

export const TransactionType = {
    INTERNAL: 1,
    EXTERNAL: 2,
    TOESCROW: 3,
    FROMESCROW: 4,
}

export const FiatCurrency = {
    NGN: 1,
    USD: 2,
    EUR: 3,
}

export const AdlistStatus = {
    ONGOING: 1,
    COMPLETED: 2,
    CANCELLED: 3,
}