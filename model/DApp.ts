export type DAppId = string;
export type DAppBrief = {
  // Name of the DApp
  name: string;

  // Landing page of the DApp
  landingURL: string;

  // URL of the icon of the DApp
  iconURL: string;

  // Brief introduction of the DApp (<= 256 charactors)
  briefing: string;
};

export type DAppList = (DAppBrief & { id: DAppId })[];

export type DApp = DAppBrief & {
  // List of URLs of the snapshorts
  snapshortURLs: string[];

  // Detailed introduction of the DApp
  description: string;

  // Name of the author
  authorName: string;

  // Email of the author
  authorEmail: string;

  // Timestamp of last modification (epoch time)
  modifiedBy: number;

  // Timestamp of creation (epoch time)
  createdBy: number;
};
