import BASE_URL, { COIN_GECKO_BASE } from "./url.serice";

export const GET_PORTFOLIO_BALANCE = `${BASE_URL}/api/Wallet/GetPortfolioBalance/USD`
export const GET_USER_DETS = `${BASE_URL}/api/User/GetUserByUserId`
export const REFRESH_USER_TOKEN = `${BASE_URL}/api/User/RefreshToken`
export const GET_CURRENCIES = `${BASE_URL}/api/ChainOperation/GetCurrencies`
export const GET_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/GetVirtualAccountsByUserId`
export const CREATE_NEW_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/CreateAssetAccount`
export const GET_COIN_MARKETS = `${COIN_GECKO_BASE}/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
export const GET_SINGLE_COIN = `${COIN_GECKO_BASE}/api/v3/coins/`
export const GET_TRANSACTIONS_USERID = `${BASE_URL}/api/Wallet/GetTransactionByFilter?userId=`
export const GET_ASSETS_MAPPING = `${BASE_URL}/api/ChainOperation/GetAssetMapping`
export const TRANSFER_INTERNAL_USERS = `${BASE_URL}/api/ChainOperation/TransferToInternalUser`
export const GET_SINGLE_ACCOUNT = `${BASE_URL}/api/Wallet/GetAcountById`