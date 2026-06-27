import { useState, useEffect, useCallback } from "react";
import { getProfile, updateProfile } from "@/lib/db";
import type { ProfileData } from "@/lib/types";
import { defaultProfile } from "@/lib/defaults";

export type { ProfileData, ExperienceItem, EducationItem, ReferenceItem } from "@/lib/types";

const AVATAR_KEY = "portfolio_avatar";

export function useProfile() {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile().then((data) => {
      if (data) {
        // Restore avatar from localStorage (too large for Google Sheets)
        const savedAvatar = localStorage.getItem(AVATAR_KEY);
        if (savedAvatar) data.avatar = savedAvatar;
        setProfile(data);
      }
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const update = useCallback(async (patch: Partial<ProfileData>) => {
    setProfile((p) => ({ ...p, ...patch }));
    try {
      // Save avatar locally — too large for Apps Script payload
      if (patch.avatar !== undefined) {
        localStorage.setItem(AVATAR_KEY, patch.avatar);
      }
      // Send only text fields to Google Sheets
      const { avatar: _, ...rest } = patch;
      if (Object.keys(rest).length > 0) {
        await updateProfile({ data: rest });
      }
    } catch (err) {
      console.error("Failed to save profile to Google Sheets:", err);
    }
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(AVATAR_KEY);
    setProfile(defaultProfile);
  }, []);

  return { profile, update, reset, loading };
}
