import { env } from "process";
import "server-only";

export interface ParticipantListResponse {
  success: boolean;
  code: number;
  locale: string;
  message: string;
  data: {
    items: Participant[];
  };
}

export interface Participant {
  username: null | string;
  buyer_profile_photo_url: string;
  buyer_name: string;
}

export async function getData(): Promise<Participant[]> {
  try {
    if (!env.API_SERVER_URL) {
      throw new Error("API_SERVER_URL environment is not defined");
    }

    const response = await fetch(`${env.API_SERVER_URL}/tickets/registers`, {
      next: { revalidate: +(env.PARTICIPANTS_REVALIDATE || 60) },
    });

    const {
      data: { items },
    } = await (response.json() as Promise<ParticipantListResponse>);

    return items;
  } catch (e) {
    console.error("Failed to fetch participants data.", e);
    throw new Error("Failed to fetch participants data.");
  }
}

export default getData;
