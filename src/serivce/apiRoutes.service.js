import BASE_URL, { COIN_GECKO_BASE } from "./url.serice";


//Your own base_url or in house url
export const GET_PORTFOLIO_BALANCE = `${BASE_URL}/api/Wallet/GetPortfolioBalance/USD`
export const GET_USER_DETS = `${BASE_URL}/api/User/GetUserByUserId`
export const REFRESH_USER_TOKEN = `${BASE_URL}/api/User/RefreshToken`
export const GET_CURRENCIES = `${BASE_URL}/api/ChainOperation/GetCurrencies`
export const GET_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/GetVirtualAccountsByUserId`
export const CREATE_NEW_ASSETS_ACCOUNTS = `${BASE_URL}/api/Wallet/CreateAssetAccount`
export const GET_TRANSACTIONS_USERID = `${BASE_URL}/api/Wallet/GetTransactionByFilter?userId=`
export const GET_ASSETS_MAPPING = `${BASE_URL}/api/ChainOperation/GetAssetMapping`
export const TRANSFER_INTERNAL_USERS = `${BASE_URL}/api/ChainOperation/TransferToInternalUser`
export const GET_SINGLE_ACCOUNT = `${BASE_URL}/api/Wallet/GetAcountById`
export const VALIDATE_DEVICE_TOKEN = `${BASE_URL}/api/User/ValidateDeviceToken`
export const GET_BANKS = `${BASE_URL}/api/User/GetBankByUserId`
export const CREATE_AD_LISTING = `${BASE_URL}/api/ListingManagement/CreateAdListing`
export const GET_AD_LISTING = `${BASE_URL}/api/ListingManagement/GetAdListing`
export const GET_AD_LISTING_BY_VALUE = `${BASE_URL}/api/ListingManagement/GetAdListingByValue`
export const CHANGE_PASSWORD = `${BASE_URL}/api/User/ChangePassword`
export const CREATE_BUY_SESSION = `${BASE_URL}/api/ListingManagement/CreateBuySession`
export const CREATE_SELL_SESSION = `${BASE_URL}/api/ListingManagement/CreateSellSession`
export const GET_ADLISTING_DETAILS = `${BASE_URL}/api/ListingManagement/GetAdListingById`


//external url
export const GET_SINGLE_COIN = `${COIN_GECKO_BASE}/api/v3/coins/`
export const GET_COIN_MARKETS = `${COIN_GECKO_BASE}/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`

