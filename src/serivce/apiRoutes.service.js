import BASE_URL, { COIN_GECKO_BASE } from "./url.serice";


// PUBLIC URL
// ONBOARDING
export const LOGIN_USER = `${BASE_URL}/api/User/Login`
export const COMPLETE_REGISTRATION = `${BASE_URL}/api/User/CompleteRegistration`
export const BASIC_REGISTRATION = `${BASE_URL}/api/User/BasicRegistration`
export const COMPLETE_VENDOR_REGISTRATION = `${BASE_URL}/api/Vendor/CompleteVendorRegistration`
export const BASIC_VENDOR_REGISTRATION = `${BASE_URL}/api/Vendor/BasicVendorRegistration`
export const ADD_PIN = `${BASE_URL}/api/User/AddPin`

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


// AUTH ENDPOINTS
export const AUTH_GET_PORTFOLIO_BALANCE = "/api/Wallet/GetPortfolioBalance/USD"
export const AUTH_GET_USER_DETS = "/api/User/GetUserByUserId"
export const AUTH_REFRESH_USER_TOKEN = "/api/User/RefreshToken"
export const AUTH_GET_CURRENCIES = "/api/ChainOperation/GetCurrencies"
export const AUTH_GET_ASSETS_ACCOUNTS = "/api/Wallet/GetVirtualAccountsByUserId"
export const AUTH_CREATE_NEW_ASSETS_ACCOUNTS = "/api/Wallet/CreateAssetAccount"
export const AUTH_GET_TRANSACTIONS_USERID = "/api/Wallet/GetTransactionByFilter?userId="
export const AUTH_GET_TRANSACTIONS_FILTER = "/api/Wallet/GetTransactionByFilter"
export const AUTH_GET_ASSETS_MAPPING = "/api/ChainOperation/GetAssetMapping"
export const AUTH_TRANSFER_INTERNAL_USERS = "/api/ChainOperation/TransferToInternalUser"
export const AUTH_GET_SINGLE_ACCOUNT = "/api/Wallet/GetAcountById"
export const AUTH_VALIDATE_DEVICE_TOKEN = "/api/User/ValidateDeviceToken"
export const AUTH_GET_BANKS = "/api/User/GetBankByUserId"
export const AUTH_CREATE_AD_LISTING = "/api/ListingManagement/CreateAdListing"
export const AUTH_GET_AD_LISTING = "/api/ListingManagement/GetAdListing"
export const AUTH_GET_AD_LISTING_BY_VALUE = "/api/ListingManagement/GetAdListingByValue"
export const AUTH_CHANGE_PASSWORD = "/api/User/ChangePassword"
export const AUTH_CREATE_BUY_SESSION = "/api/ListingManagement/CreateBuySession"
export const AUTH_CREATE_SELL_SESSION = "/api/ListingManagement/CreateSellSession"
export const AUTH_GET_ADLISTING_DETAILS = "/api/ListingManagement/GetAdListingById"
export const AUTH_GET_VENDOR_SUBUSERS = "/api/Vendor/GetVendorSubUsers"
export const AUTH_GET_USER_NOTIFICATIONS = "/api/User/GetUserNotifications"
export const AUTH_GET_AWAITING_ESCROW_SESSION = "/api/ListingManagement/GetAwaitingEscrowSessions"
export const AUTH_CREATE_VENDOR_USERS = "/api/Vendor/CreateVendorUsers"
export const AUTH_CREATE_BANK = "/api/User/CreateBank"
