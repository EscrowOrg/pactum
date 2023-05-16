import BASE_URL from "./url.serice";

export const GET_PORTFOLIO_BALANCE = `${BASE_URL}/api/Wallet/GetPortfolioBalance/USD`
export const REFRESH_USER_TOKEN = `${BASE_URL}/api/User/RefreshToken`
export const GET_CURRENCIES = `${BASE_URL}/api/ChainOperation/GetCurrencies`
export const GET_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/GetVirtualAccountsByUserId`
export const CREATE_NEW_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/CreateAssetAccount`