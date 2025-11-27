import { User } from "@/shared/user/User";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserData {
  user_id: number;
  nom_complet: string;
  taille: number;
  poids: number;
  created_at: Date;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updateUser: (
    updates: Partial<Omit<UserData, "user_id" | "created_at">>
  ) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (
    updates: Partial<Omit<UserData, "user_id" | "created_at">>
  ) => {
    if (user) {
      // Créer une nouvelle instance de User avec les données mises à jour
      const updatedUser = new User(
        user.getUserId(),
        updates.nom_complet ?? user.getNomComplet(),
        updates.taille ?? user.getTaille(),
        updates.poids ?? user.getPoids(),
        user.getCreatedAt()
      );
      setUser(updatedUser);
    }
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
