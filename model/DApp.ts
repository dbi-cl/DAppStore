export type DApp = {
  // Name of the DApp
  name: string;

  // Landing page of the DApp
  landingURL: string;

  // URL of the icon of the DApp
  iconURL: string;

  // List of URLs of the snapshorts
  snapshortURLs: string[];

  // Brief introduction of the DApp (<= 256 charactors)
  briefing: string;

  // Detailed introduction of the DApp
  description: string;

  // Name of the author
  autherName: string;

  // Email of the author
  autherEmail: string;

  // Timestamp of last modification (epoch time)
  modifiedBy: number;

  // Timestamp of creation (epoch time)
  createdBy: number;
}