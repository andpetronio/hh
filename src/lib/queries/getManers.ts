import { supabase } from "../supabase/server";

export type RateType = "hourly" | "fixed" | "negotiable";

export interface ManerBrowseDTO {
  id: string;
  name: string;
  avatar: string | null;
  tradeKey: string | null;
  tradeLabel: string | null;
  location: string | null;

  experienceYears: number | null;

  rateType: RateType | null;
  rate: number | null;
  minimumHours: number | null;

  availabilityType: string | null;
  verified: boolean;

  bio: string | null;
  skills: string[];

  rating: number | null;
  reviewsCount: number;
}

/**
 * Mapea un row de SQL a ManerBrowseDTO
 */
function mapRowToDTO(row: any): ManerBrowseDTO {
  return {
    id: row.id,
    name: `${row.first_name ?? ""} ${row.last_name ?? ""}`.trim(),
    avatar: row.avatar_url ?? null,
    tradeKey: row.trade_key ?? null,
    tradeLabel: row.trade_label ?? null,
    location: row.location_label ?? null,

    experienceYears: row.experience_years ?? null,

    rateType: (row.rate_type as RateType | null) ?? null,
    rate: row.rate ?? null,
    minimumHours: row.minimum_hours ?? null,

    availabilityType: row.availability_type ?? null,
    verified: Boolean(row.verified_professional),

    bio: row.bio ?? null,
    skills: row.skills ?? [],

    rating: row.avg_rating != null ? Number(row.avg_rating) : null,
    reviewsCount: row.reviews_count != null ? Number(row.reviews_count) : 0,
  };
}

/**
 * Deduplicar array por ID
 */
function deduplicateById(data: any[]): any[] {
  const uniqueMap = new Map<string, any>();
  data.forEach((row) => {
    if (!uniqueMap.has(row.id)) {
      uniqueMap.set(row.id, row);
    }
  });
  return Array.from(uniqueMap.values());
}

// =========================================================
// QUERIES PRINCIPALES
// =========================================================

/**
 * Obtiene todos los maners públicos
 * @param locale - Idioma ('es' | 'pt-BR')
 */
export async function getManers(
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  const { data, error } = await supabase.rpc("get_maners_public", {
    p_locale: locale,
  });

  if (error) {
    console.error("[getManers] Error:", error);
    throw error;
  }

  const unique = deduplicateById(data ?? []);
  return unique.map(mapRowToDTO);
}

/**
 * Obtiene un maner específico por ID (OPTIMIZADO - SQL específico)
 * @param id - UUID del maner
 * @param locale - Idioma
 */
export async function getManerById(
  id: string,
  locale: string = "es",
): Promise<ManerBrowseDTO | null> {
  const { data, error } = await supabase.rpc("get_maner_by_id", {
    p_id: id,
    p_locale: locale,
  });

  if (error) {
    console.error("[getManerById] Error:", error);
    throw error;
  }

  if (!data || data.length === 0) {
    return null;
  }

  return mapRowToDTO(data[0]);
}

/**
 * Obtiene maners por oficio (OPTIMIZADO - SQL específico)
 * @param tradeKey - Key del trade ('plumbing', 'electrical', etc.)
 * @param locale - Idioma
 */
export async function getManersByTrade(
  tradeKey: string,
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  const { data, error } = await supabase.rpc("get_maners_by_trade", {
    p_trade_key: tradeKey,
    p_locale: locale,
  });

  if (error) {
    console.error("[getManersByTrade] Error:", error);
    throw error;
  }

  const unique = deduplicateById(data ?? []);
  return unique.map(mapRowToDTO);
}

/**
 * Busca maners por texto (OPTIMIZADO - SQL específico)
 * Busca en: nombre, oficio, ubicación, bio
 * @param query - Texto a buscar
 * @param locale - Idioma
 */
export async function searchManers(
  query: string,
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const { data, error } = await supabase.rpc("search_maners", {
    p_query: query.trim(),
    p_locale: locale,
  });

  if (error) {
    console.error("[searchManers] Error:", error);
    throw error;
  }

  const unique = deduplicateById(data ?? []);
  return unique.map(mapRowToDTO);
}

/**
 * Cuenta maners por oficio
 */
export async function countManersByTrade(): Promise<Record<string, number>> {
  const { data, error } = await supabase.rpc("count_maners_by_trade");

  if (error) {
    console.error("[countManersByTrade] Error:", error);
    throw error;
  }

  const counts: Record<string, number> = {};
  (data ?? []).forEach((row: any) => {
    counts[row.trade_key] = Number(row.maner_count);
  });

  return counts;
}

// =========================================================
// BÚSQUEDA AVANZADA
// =========================================================

export interface ManerFilters {
  tradeKey?: string | null;
  verified?: boolean | null;
  minRating?: number | null;
  rateType?: RateType | null;
}

/**
 * Obtiene maners con filtros avanzados (OPTIMIZADO - SQL específico)
 * @param filters - Objeto con criterios de filtrado
 * @param locale - Idioma
 */
export async function getManersFiltered(
  filters: ManerFilters = {},
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  const { data, error } = await supabase.rpc("get_maners_filtered", {
    p_trade_key: filters.tradeKey ?? null,
    p_verified: filters.verified ?? null,
    p_min_rating: filters.minRating ?? null,
    p_rate_type: filters.rateType ?? null,
    p_locale: locale,
  });

  if (error) {
    console.error("[getManersFiltered] Error:", error);
    throw error;
  }

  const unique = deduplicateById(data ?? []);
  return unique.map(mapRowToDTO);
}

// =========================================================
// HELPERS
// =========================================================

/**
 * Verifica si un maner existe
 * @param id - UUID del maner
 */
export async function manerExists(id: string): Promise<boolean> {
  const maner = await getManerById(id);
  return maner !== null;
}

/**
 * Obtiene maners verificados
 * @param locale - Idioma
 */
export async function getVerifiedManers(
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  return getManersFiltered({ verified: true }, locale);
}

/**
 * Obtiene maners con alta calificación (4.5+)
 * @param locale - Idioma
 */
export async function getTopRatedManers(
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  return getManersFiltered({ minRating: 4.5 }, locale);
}

/**
 * Obtiene maners por tarifa por hora
 * @param locale - Idioma
 */
export async function getHourlyManers(
  locale: string = "es",
): Promise<ManerBrowseDTO[]> {
  return getManersFiltered({ rateType: "hourly" }, locale);
}
