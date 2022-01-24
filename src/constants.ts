import { CountriesUriType } from "./types";

export const HOURS_IN_MS = 3600000;
export const SIX_MIN_IN_MS = 360000;
export const DAY_IN_MS = 86400000;

export const STORAGE_KEYS = {
  TOKEN: "token",
  IFRAME_URL: "iframe_url",
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  EXPIRES_IN: "expiresIn",
  EXPIRE_SSO_TOKEN: "expire_sso_token",
  SSO_TOKEN: "sso_token",
  COUNTRY: "country",
  BRAND: "brand",
  LANGUAGE: "language",
  USER_NAME: "user_name",
  USER_MAIN_EMAIL: "user_main_email",
  USER_USERNAME: "user_username",
  USER_CYCLE: "user_cycle",
  COMMERCIAL_STRUCTURE: "commercial_structure",
  BUSINESS_MODELS: "business_models",
  USER_PROFILE_ID: "user_profile_id",
  USER_PROFILE_NAME: "user_profile_name",
  USER_SECTOR_NAME: "user_sector_name",
  ACCESO_SIMULADO: "acceso_simulado",
  USER_FUNCTION_ID: "user_function_id",
  IS_COLABORADOR: "is_colaborador",
  NEXT_ROLE: "nextRole",
  USER_SUBCYCLE: "user_subcycle",
  COMMERCIAL_STRUCTURE_LEVEL_ID: "commercial_structure_level_id",
  COMMERCIAL_STRUCTURE_NAME: "commercial_structure_name",
  USER_MANAGEMENT_ID: "user_management_id",
  USER_MANAGEMENT_NAME: "user_management_name",
  PAGE_TITLE: "page_title",
  PAGE_KEY: "page_key",
  USER_PREVIOUS_CODE: "user_previous_code"
};

export const countriesUri: CountriesUriType = {
  AR: "https://minegocio.naturacosmeticos.com.ar",
  PE: "https://minegocio.natura.com.pe",
  MX: "https://minegocio.natura.com.mx",
  CL: "https://minegocio.natura.cl",
  CO: "https://minegocio.natura.com.co",
};
