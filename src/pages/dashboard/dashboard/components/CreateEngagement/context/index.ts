import { createContext, Dispatch, SetStateAction } from "react";

interface EngagementData {
  coachee: any[];
  engagementSetup: "existing" | "new" | null;
  engagementTemplate: string | null;
  themeLibrary: string;
}

export interface CreateEngagementContextProps {
  data: EngagementData;
  setData: Dispatch<SetStateAction<any>>;
}

export const CreateEngagementContext = createContext<CreateEngagementContextProps | undefined>(undefined);